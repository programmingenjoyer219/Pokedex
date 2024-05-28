import React from 'react'
import getImageURL from '../../../utils/imageUtil';

export default function NameTag(props) {
    let pokeballIconSrc;
    props.isDark ? pokeballIconSrc = getImageURL("pokemon-card-bg-orange.png") : pokeballIconSrc = getImageURL("pokemon-card-bg-red.png");

    return (
        <div className="flex items-center mb-4">
            <img className="w-4 h-4 mx-2" src={pokeballIconSrc} alt="pokeball-logo" />
            <h2 className="text-xl font-bold dark:text-[#f0f0f0]">{props.name}</h2>
            <img className="w-4 h-4 mx-2" src={pokeballIconSrc} alt="pokeball-logo" />
        </div>
    )
}
