import React, { useRef } from "react";
import html2canvas from "html2canvas";
import download from "downloadjs";
import Chat from "./Chat";

const CaptureElementAsImage: React.FC = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  const handleCaptureClick = async () => {
    if (elementRef.current) {
      try {
        const canvas = await html2canvas(elementRef.current);
        const dataUrl = canvas.toDataURL("image/png");
        download(dataUrl, "element.png");
      } catch (error) {
        console.error("Error capturing element:", error);
      }
    }
  };

  return (
    <div>
      <Chat chatRef={elementRef} />
      <button onClick={handleCaptureClick}>Capture</button>
    </div>
  );
};

export default CaptureElementAsImage;
