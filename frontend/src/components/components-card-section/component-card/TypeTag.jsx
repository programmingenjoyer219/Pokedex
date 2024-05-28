import React from 'react'
import getImageURL from '../../../utils/imageUtil';

export default function TypeTag(props) {
    let pokemonTypes = props.types;
    function customBgColor(pokemonType) {
        let bgColor;
        switch (pokemonType) {
            case "Bug":
                bgColor = "#92BC2C"
                break;
            case "Water":
                bgColor = "#539DDF"
                break;
            case "Steel":
                bgColor = "#5695A3"
                break;
            case "Rock":
                bgColor = "#C9BB8A"
                break;
            case "Psychic":
                bgColor = "#FA8581"
                break;
            case "Flying":
                bgColor = "#A1BBEC"
                break;
            case "Poison":
                bgColor = "#B763CF"
                break;
            case "Normal":
                bgColor = "#A0A29F"
                break;
            case "Fighting":
                bgColor = "#D3425F"
                break;
            case "Fire":
                bgColor = "#FBA54C"
                break;
            case "Ground":
                bgColor = "#DA7C4D"
                break;
            case "Electric":
                bgColor = "#F2D94E"
                break;
            case "Ice":
                bgColor = "#75D0C1"
                break;
            case "Ghost":
                bgColor = "#5F6DBC"
                break;
            case "Grass":
                bgColor = "#5FBD58"
                break;
            case "Fairy":
                bgColor = "#EE90E6"
                break;
            case "Dragon":
                bgColor = "#0C69C8"
                break;
            case "Dark":
                bgColor = "#595761"
                break;
        }
        return bgColor;
    }

    return (
        <div className="flex mb-4">
            {
                pokemonTypes.map((type, index) => {
                    let bgColor = customBgColor(type);
                    return (
                        <div key={index} style={{ backgroundColor: bgColor }} className={`flex items-center rounded-full px-3 py-1 mx-1`}>
                            <img className="w-4 h-4 mr-1" src={getImageURL(`pokemon types/${type}.svg`)} alt={type} />
                            <span className="text-sm font-semibold text-white">{type}</span>
                        </div>
                    )
                })
            }
        </div>

    )
}
