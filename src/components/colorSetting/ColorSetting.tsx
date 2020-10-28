import React, {useRef, useState} from "react";
import "./colorSetting.css";
import {hexToRgb, rgbToHex} from "../../utils/utils";
import {useOutsideClosing} from "../../utils/hooks";

type Props = {
    changeIndicatorColor: (color: string) => void,
    changeHexColor: (color: string) => void,
    onCloseHandler: () => void,
    onChange: (color: string) => void,
    indicatorColor: string,
    hexColor: string,
};

const ColorSettings = ({changeIndicatorColor, changeHexColor, onCloseHandler, indicatorColor, hexColor, onChange}: Props) => {

    const {r, g, b} = hexToRgb(indicatorColor) as { r: number, g: number, b: number };

    const [R, changeR] = useState(r.toString());
    const [G, changeG] = useState(g.toString());
    const [B, changeB] = useState(b.toString());

    const wrapperRef = useRef(null);
    useOutsideClosing(wrapperRef, () => {
        changeIndicatorColor(hexColor)
        onCloseHandler()
    });

    return (
        <div className="colorSettingsContainer" ref={wrapperRef}>

            <div className="sliderContainer">
                <label>R</label>
                <input
                    type="range"
                    id="red"
                    value={R}
                    max="255"
                    min="0"
                    onChange={(e) => {
                        changeR(e.target.value);
                        changeIndicatorColor(rgbToHex(e.target.value, G, B))
                    }}
                />
            </div>
            <div className="sliderContainer">
                <label>G</label>
                <input
                    type="range"
                    id="green"
                    value={G}
                    max="255"
                    min="0"
                    onChange={(e) => {
                        changeG(e.target.value);
                        changeIndicatorColor(rgbToHex(R, e.target.value, B))
                    }}
                />
            </div>
            <div className="sliderContainer">
                <label>B</label>
                <input
                    type="range"
                    id="blue"
                    value={B}
                    max="255"
                    min="0"
                    onChange={(e) => {
                        changeB(e.target.value)
                        changeIndicatorColor(rgbToHex(R, G, e.target.value))
                    }}
                />
            </div>
            <div className="buttonsControls">
                <button
                    className="cancelButton"
                    onClick={() => {
                        changeIndicatorColor(hexColor)
                        onCloseHandler()
                    }}
                >CANCEL
                </button>
                <button
                    className="okButton"
                    onClick={() => {
                        changeHexColor(rgbToHex(R,G,B))
                        onChange(rgbToHex(R,G,B))
                        onCloseHandler()
                    }}
                >OK
                </button>
            </div>
        </div>
    )
}

export default ColorSettings;

