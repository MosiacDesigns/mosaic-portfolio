# Website enquiries → Google Sheet (free, about 10 minutes)

Every time someone sends the contact form, a new row appears in your Google Sheet, and you can also get an email alert.
No database and no paid service: it runs on your own Google account through Apps Script.

## 1. Create the sheet
1. Go to sheets.google.com and create a blank sheet, e.g. **“Mosaic — Website enquiries”**.
2. In the sheet: **Extensions → Apps Script**.

## 2. Add the script
1. Delete everything in `Code.gs` and paste in the contents of [`Code.gs`](./Code.gs) from this folder.
2. Change `SECRET` to a long random string, e.g. the output of `openssl rand -hex 24`, or any 40+ random letters and numbers.
   **Keep a copy:** the website needs the same value.
3. Optional: change `NOTIFY_EMAIL` (where alerts go), or set it to `''` for no emails.
4. Click **Save** (the disk icon).
5. In the function dropdown choose **testSetup**, then click **▶ Run**. Google asks for permission:
   choose your account → *Advanced* → *Go to … (unsafe)* → **Allow**. This screen appears because the script is yours and unpublished.
   An **Enquiries** tab with headers and a Status dropdown appears in the sheet.

## 3. Publish it as a web app
1. **Deploy → New deployment** → the gear icon → **Web app**.
2. *Description:* Website enquiries · *Execute as:* **Me** · *Who has access:* **Anyone**.
3. **Deploy** → copy the **Web app URL**. It ends in `/exec`.
   Opening that URL in a browser should show `{"ok":true,"service":"Mosaic enquiries",…}`.

> “Anyone” only means the website can reach the script. Nobody can read your sheet, and the script ignores any request without your secret.

## 4. Connect the website
In **Vercel → Project → Settings → Environment Variables** (or `.env.local` when running locally), add:

```
SHEET_WEBHOOK_URL=https://script.google.com/macros/s/…/exec
SHEET_SECRET=<the same secret as in Code.gs>
```

Then **redeploy**. Send a test enquiry from the Contact page; the row appears within a couple of seconds.

## Changing the script later
After editing `Code.gs`: **Deploy → Manage deployments → ✏️ Edit → Version: New version → Deploy**.
The URL stays the same. If you create a *new* deployment instead, you get a new URL and must update `SHEET_WEBHOOK_URL`.

## Limits (free Google account)
- Email alerts: about 100 a day (`MailApp` quota). Rows in the sheet are not limited in any practical way for a contact form.
- Spam: the form already has a hidden bot trap. Mark junk rows **Spam** in the Status column.
