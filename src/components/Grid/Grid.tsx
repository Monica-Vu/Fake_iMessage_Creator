import React from 'react';
import "./Grid.css"
import Download from '../DownloadChat/Download';
import RightSection from '../RightSection';

// TODO: write it such as that grid item can take specific properties )i.e the text-alignment
// use button as reference code
const Grid: React.FC = () => {
    return(
        <div className="grid-container">
            <div className="grid-item"> 
            <Download />           
             </div>
            <div className="grid-item"> 
            <RightSection /> 
            </div>
        </div>
    );
};

export default Grid;