import React from 'react';
import getImageURL from '../../utils/imageUtil';

export default function ModeButton(props) {
    let modeButtonSrc;
    props.isDark ? modeButtonSrc = getImageURL("pokeball.png") : modeButtonSrc = getImageURL("pokeball-ultra.png");

    return (
        <button onClick={() => { props.setIsDark(prevState => { return !prevState }) }} title='Switch Mode' className="bg-yellow-400 rounded-full focus:outline-none transition hover:opacity-50">
            <img
                src={modeButtonSrc}
                alt="Pokeball"
                className="w-12 h-12"
            />
        </button>
    )
}
