import React, { useRef } from "react";
import html2canvas from "html2canvas";
import download from "downloadjs";
import Chat from "./Chat";
import Button from "../Common/Button/Button";

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
    <>
      <Chat chatRef={elementRef} />
      <Button 
        text="Capture"
        onClick={handleCaptureClick}
        alignSelf="center" />
    </>
  );
};

export default CaptureElementAsImage;
