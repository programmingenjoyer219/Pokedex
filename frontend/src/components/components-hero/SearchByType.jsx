import React from 'react'
import getImageURL from '../../utils/imageUtil';
import TypeButton from './components-search-by-type/TypeButton';

export default function SearchByType(props) {
    let differentTypes = ["Bug", "Dark", "Dragon", "Electric", "Fairy", "Fighting", "Fire", "Flying", "Ghost", "Grass", "Ground", "Ice", "Normal", "Poison", "Psychic", "Rock", "Steel", "Water"];

    function handleClick(pokemonType) {
        console.log(pokemonType);
        props.receiveData("pokemonType", pokemonType);
        props.setPageNum(1);
        props.scrollToCardSection();
    }

    return (
        <div id='search-by-type' className='mb-8'>
            <p className='w-full mb-4 text-center text-[#f0f0f0]'>Get Pokemons by Type</p>
            <div id='type-button-container' className='grid grid-cols-6 justify-evenly justify-items-center items-center gap-4 w-full'>
                {
                    differentTypes.map((type, index) => {
                        return <TypeButton id={type} key={index} handleClick={() => handleClick(type)} imgSrc={getImageURL(`type-buttons/${type}-icon.png`)} />
                    })
                }
            </div>
        </div>
    )
}
