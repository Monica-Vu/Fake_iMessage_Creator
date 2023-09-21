import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import download from 'downloadjs';

const CaptureElementAsImage: React.FC = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  const handleCaptureClick = async () => {
    if (elementRef.current) {
      try {
        const canvas = await html2canvas(elementRef.current);
        const dataUrl = canvas.toDataURL('image/png');
        download(dataUrl, 'element.png');
      } catch (error) {
        console.error('Error capturing element:', error);
      }
    }
  };

  return (
    <div>
      <div
        ref={elementRef}
        style={{
          width: '300px',
          height: '200px',
          backgroundColor: 'lightblue',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Capture this element as PNG
      </div>
      <button onClick={handleCaptureClick}>Capture</button>
    </div>
  );
};

export default CaptureElementAsImage;
