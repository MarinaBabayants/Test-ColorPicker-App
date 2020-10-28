import React from "react";
import "./paletteColor.css";

type Props = {
    hex: string,
    label: string,
    changeRgbColorHandler: (color: string) => void,
    changeHexColorHandler: (color: string) => void,
    onChange: (color: string) => void,
    onCloseHandler: () => void,
};

const PaletteColor = ({hex, label, changeRgbColorHandler, changeHexColorHandler, onCloseHandler, onChange}: Props) => {
    return (
        <li className='paletteColor'
            onClick={() => {
                changeRgbColorHandler(hex)
                changeHexColorHandler(hex)
                onChange(hex)
                onCloseHandler()
            }}>
            <span>{label}</span>
            <div className='paletteColorHex' style={{backgroundColor: hex}}>
            </div>
        </li>
    )
};

export default PaletteColor;