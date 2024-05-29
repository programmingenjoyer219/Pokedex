import React from 'react'
import { useState } from 'react'
import getImageURL from '../../utils/imageUtil'

export default function SearchByName(props) {
    const [name, setName] = useState("");

    function handleChange(e) {
        let newPokemonName = e.target.value;
        setName(newPokemonName);
    }

    try {
        const input = document.querySelector('#search-by-name input');
        const searchButton = document.querySelector('#search-by-name button[title="Search"]');

        input.addEventListener('keydown', function (event) {
            // Check if the key pressed is 'Enter' (key code 13)
            if (event.key === 'Enter') {
                // Trigger a click event on the search button
                searchButton.click();
            }
        });
    } catch (error) {
        console.log(`Waiting for input and search buttons to load`);
    }


    return (

        <div className='relative mb-8' id='search-by-name'>
            <p className='w-full text-center text-[#f0f0f0]'>Search Pokemon By Name</p>
            <div className="relative mt-4 mb-8">
                <input
                    onChange={handleChange}
                    value={name}
                    type="text"
                    placeholder="I choose you!"
                    className="w-full text-center p-2 rounded bg-yellow-400 text-black placeholder-gray-700 focus:bg-[#ffd966] focus:outline-none"
                />
                <button title='Search' onClick={() => { props.receiveData("pokemonName", name); props.setPageNum(1); setName(""); props.scrollToCardSection(); }} className="absolute right-2 top-2">
                    <img src={getImageURL("search.png")} alt="Search" className='w-6 h-6' />
                </button>
            </div>
        </div>
    )
}

