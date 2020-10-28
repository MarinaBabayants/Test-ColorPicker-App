import React, {useState} from "react";
import "./colorPicker.css"
import PickerPalette from "../pickerPalette/pickerPalette";
import ColorSettings from "../colorSetting/ColorSetting";

export type Color = {
    label: string,
    hex: string,
};

type Props = {
    value: string,
    colors: Array<Color>,
    onChange: (color: string) => void,
};

type DropDownsState = 'pickerPalette' | 'colorSettings' | ''

const ColorPicker = ({value, colors, onChange}: Props) => {
    const [dropDownName, openDropDown] = useState<DropDownsState>('');
    const [indicatorColor, changeIndicatorColor] = useState<string>(value)
    const [hexColor, changeHexColor] = useState<string>(value)

    const renderDropDown = (dropDownName: DropDownsState) => {
        switch (dropDownName) {
            case 'pickerPalette':
                return <PickerPalette
                    colors={colors}
                    changeIndicatorColor={changeIndicatorColor}
                    changeHexColor={changeHexColor}
                    onChange={onChange}
                    onCloseHandler={closeDropDown}/>;
            case 'colorSettings':
                return <ColorSettings
                    hexColor={hexColor}
                    changeIndicatorColor={changeIndicatorColor}
                    changeHexColor={changeHexColor} onCloseHandler={closeDropDown}
                    onChange={onChange}
                    indicatorColor={indicatorColor}/>;
            default:
                return null;
        }
    }

    const openPickerPalette = () => openDropDown('pickerPalette');
    const openColorSettings = () => openDropDown('colorSettings');
    const closeDropDown = () => openDropDown('');

    return (
        <div className='colorPickerWrapper'>
            <div className='colorPicker'>
                <span className='colorPickerValue'>{hexColor}</span>
                <div className='pickersControls'>
                    <button className='pickersControlsAction' onClick={openColorSettings}>
                        <span className='colorIndicator' style={{backgroundColor: indicatorColor}}>
                        </span>
                    </button>
                    <button className='pickersControlsAction paletteAction' onClick={openPickerPalette}>
                    </button>
                </div>
            </div>
            <div className="modalContainer">
                {renderDropDown(dropDownName)}
            </div>
        </div>
    )
};

export default ColorPicker;