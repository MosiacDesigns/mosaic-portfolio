"use client";

import Link from "next/link";

const CalendlyPopupLink = () => {
  const handleClick = () => {
    if (window && window?.Calendly)
      window?.Calendly.initPopupWidget({
        url: "https://calendly.com/mosaicdesigns06?background_color=1c1c22&text_color=ffffff&primary_color=00e187",
      });
    return false;
  };

  return (
    
    <Link href="" onClick={handleClick}>
      Connect
    </Link>
  );
};

export default CalendlyPopupLink;
