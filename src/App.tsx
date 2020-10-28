import React from 'react';
import './App.css';
import ColorPicker, {Color} from './components/colorPicker/colorPicker';

const DefaultColors: Array<Color> = [
    {label: 'RED', hex: '#FF0000'},
    {label: 'YELLOW', hex: '#FFFF00'},
    {label: 'GREEN', hex: '#00FF00'},
    {label: 'BLUE', hex: '#0000FF'},
]

const defaultValue = '#FAEBD7'

const body = document.body;

const App = () => {
    return (
        <div className="AppContainer">
            <ColorPicker
                value={defaultValue}
                colors={DefaultColors}
                onChange={(color) => body.style.backgroundColor = color}
            />
        </div>
    );
}

export default App;
