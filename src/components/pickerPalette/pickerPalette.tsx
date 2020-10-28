import React, {useRef} from "react";
import './pickerPalette.css'
import PaletteColor from "../paletteColor/PaletteColor";
import {Color} from "../colorPicker/colorPicker";
import {useOutsideClosing} from "../../utils/hooks";

type Props = {
    colors: Array<Color>,
    changeIndicatorColor: (color: string) => void,
    changeHexColor: (color: string) => void,
    onChange: (color: string) => void,
    onCloseHandler: () => void,
};

const PickerPalette = ({colors, changeIndicatorColor, changeHexColor, onCloseHandler, onChange}: Props) => {

    const wrapperRef = useRef(null);
    useOutsideClosing(wrapperRef, onCloseHandler);

    return (
        <ul className='pickerPaletteContainer' ref={wrapperRef}>
            {colors.map(({label, hex}) => (<PaletteColor
                hex={hex}
                label={label}
                key={label}
                onChange={onChange}
                changeRgbColorHandler={changeIndicatorColor}
                changeHexColorHandler={changeHexColor}
                onCloseHandler={onCloseHandler}
            />))}
        </ul>
    )
};

export default PickerPalette;