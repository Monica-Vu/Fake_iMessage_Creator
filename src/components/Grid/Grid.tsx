import React from 'react';
import "./Grid.css"
import Download from '../DownloadChat/Download';
import FileUpload from '../FileUpload/FileUpload';

const Grid: React.FC = () => {
    return(
        <div className="grid-container">
            <div className="grid-item"> 
            <Download />           
             </div>
            <div className="grid-item"> 
            <FileUpload /> 
            </div>
        </div>
    );
};

export default Grid;