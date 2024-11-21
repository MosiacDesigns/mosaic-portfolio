import { useEffect } from "react";

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/mosaicdesigns06?background_color=27272c&text_color=ffffff&primary_color=00e187"
      style={{ minWidth: "320px", height: "450px" }}
    ></div>
  );
};

export default CalendlyWidget;
