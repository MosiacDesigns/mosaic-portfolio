/**
 * Mosaic Designs — website enquiries → Google Sheet
 *
 * Paste this whole file into Extensions → Apps Script of your enquiries Google Sheet,
 * set SECRET below, then Deploy → New deployment → Web app (Execute as: Me, Who has access: Anyone).
 * Full steps: integrations/google-sheet/README.md
 */

// 1. A long random string. Put the SAME value in the website's SHEET_SECRET environment variable.
const SECRET = 'PASTE-A-LONG-RANDOM-SECRET-HERE';

// 2. Optional: get an email for every new enquiry (sent from your own Google account, free). Leave '' to turn off.
const NOTIFY_EMAIL = 'admin@mosaicdesigns.tech';

const SHEET_NAME = 'Enquiries';
const HEADERS = ['Received', 'Name', 'Email', 'Company / website', 'Service', 'Budget', 'Timeline', 'Message', 'Page', 'Status', 'Notes'];

function doPost(e) {
  try {
    const data = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    if (!SECRET || SECRET.indexOf('PASTE-') === 0 || data.secret !== SECRET) return json_({ ok: false, error: 'unauthorised' });

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const sheet = getSheet_();
      sheet.appendRow([
        new Date(),
        safe_(data.name),
        safe_(data.email),
        safe_(data.company),
        safe_(data.service),
        safe_(data.budget),
        safe_(data.timeline),
        safe_(data.message),
        safe_(data.page),
        'New',
        '',
      ]);
    } finally {
      lock.releaseLock();
    }

    if (NOTIFY_EMAIL) notify_(data);
    return json_({ ok: true });
  } catch (err) {
    console.error(err);
    return json_({ ok: false, error: String(err) });
  }
}

/** Visiting the web-app URL in a browser shows this — handy to check the deployment is live. */
function doGet() {
  return json_({ ok: true, service: 'Mosaic enquiries', hint: 'POST only' });
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.getRange('A:A').setNumberFormat('dd mmm yyyy, hh:mm');
    sheet.setColumnWidth(8, 420);
    // Status dropdown for simple lead tracking.
    const rule = SpreadsheetApp.newDataValidation().requireValueInList(['New', 'Replied', 'Call booked', 'Proposal sent', 'Won', 'Lost', 'Spam'], true).build();
    sheet.getRange(2, 10, sheet.getMaxRows() - 1, 1).setDataValidation(rule);
  }
  return sheet;
}

function notify_(d) {
  const body = [
    'Name: ' + (d.name || ''),
    'Email: ' + (d.email || ''),
    'Company / website: ' + (d.company || '—'),
    'Service: ' + (d.service || ''),
    'Budget: ' + (d.budget || '—'),
    'Timeline: ' + (d.timeline || '—'),
    '',
    d.message || '',
    '',
    'Sheet: ' + SpreadsheetApp.getActiveSpreadsheet().getUrl(),
  ].join('\n');
  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    replyTo: d.email || NOTIFY_EMAIL,
    subject: 'New enquiry: ' + (d.service || 'Website') + ' — ' + (d.name || ''),
    body: body,
  });
}

/** Stops text like "=HYPERLINK(...)" being run as a formula, and caps length. */
function safe_(v) {
  let s = String(v == null ? '' : v).slice(0, 5000);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

/** Run once from the editor (▶ Run → testSetup) to create the header row and grant permissions. */
function testSetup() {
  getSheet_();
  if (NOTIFY_EMAIL) MailApp.getRemainingDailyQuota();
}
