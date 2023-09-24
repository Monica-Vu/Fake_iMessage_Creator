import React, { useRef, useState } from 'react';
import ImageCrop from './ImageCrop'; 
import UploadButton from './UploadButton';

function FileUpload() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setSelectedFile(file || null);
  };

  return (
    <div>
      <h2> Image Upload </h2>
      <UploadButton onClick={handleButtonClick} />
      <input 
        type="file" 
        ref={fileInputRef}
        onChange={handleFileChange} 
        accept=".png, .jpg, .jpeg, .gif"
        style={{ display: 'none'}}
        />
      {selectedFile && <ImageCrop file={selectedFile} />}
    </div>
  );
}

export default FileUpload;
