import React from 'react';
import './Button.css';

const DEFAULT_SPACING ='10px'

interface ButtonProps {
    text: string;
    colour?: string;
    fontColour?: string;
    padding?: string;
    margin?: string;
    onClick?: () => void; 
}

const Button: React.FC<ButtonProps> = ({ colour, text, padding, margin, fontColour, onClick }) => {
    const buttonStyle: React.CSSProperties = {
        backgroundColor: colour || '#4d95f7',
        color: fontColour || "#fff",
        padding: padding || DEFAULT_SPACING,
        margin: margin || DEFAULT_SPACING,
        cursor: onClick ? 'pointer' : 'default'
    }

    return(
        <button className="button" style={buttonStyle} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;