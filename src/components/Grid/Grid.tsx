import React from 'react';
import "./Grid.css"
import Download from '../DownloadChat/Download';
import CreationSection from '../CreationSection/CreationSection';

// TODO: write it such as that grid item can take specific properties )i.e the text-alignment
// use button as reference code
const Grid: React.FC = () => {
    return (
        <div className="grid-container">
            <div className="grid-item align-right">
                {/* <div className="edit-list"> */}
                    <Download />
                {/* </div> */}
            </div>
            <div className="grid-item align-left">
                <CreationSection />
            </div>
        </div>
    );
};

export default Grid;