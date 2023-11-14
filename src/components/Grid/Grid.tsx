import React from 'react';
import "./Grid.css"
import Download from '../DownloadChat/Download';
import RightSection from '../RightSection/RightSection';

// TODO: write it such as that grid item can take specific properties )i.e the text-alignment
// use button as reference code
const Grid: React.FC = () => {
    return(
        <div className="grid-container">
            <div className="grid-item align-right"> 
            <Download />           
             </div>
            <div className="grid-item align-left"> 
            <RightSection /> 
            </div>
        </div>
    );
};

export default Grid;