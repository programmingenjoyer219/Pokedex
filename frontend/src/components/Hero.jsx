import React from 'react'
import Socials from "./components-hero/Socials";
import SearchByName from "./components-hero/SearchByName";
import SearchByType from "./components-hero/SearchByType";
import ModeButton from "./components-hero/ModeButton";
import getImageURL from '../utils/imageUtil';

export default function Hero(props) {
    return (
        <header className="bg-[#ec5252] dark:bg-[#222224] text-white w-[95vw] flex flex-col items-center justify-center p-4 font-[Monda] rounded-b-2xl">
            <img
                id="pokemon-logo"
                src={props.isDark ? getImageURL("pokemon-logo-orange.png") : getImageURL("pokemon-logo.png")}
                alt="Pokemon Logo"
                className="w-32 mb-6"
            />

            <div className="text-center max-w-2xl mx-auto">
                <h1 className="text-2xl font-bold mb-4">
                    Discover Your Perfect Pokémon Match
                </h1>

                <p className="mb-8">
                    Welcome to the ultimate Pokémon database! Whether you're a seasoned
                    trainer or a new enthusiast, our site helps you find and explore every
                    Pokémon by type or name, making your journey to catch 'em all easier and
                    more exciting.
                </p>

                <SearchByType receiveData={props.receiveData} setPageNum={props.setPageNum} scrollToCardSection={props.scrollToCardSection} />

                <SearchByName receiveData={props.receiveData} setPageNum={props.setPageNum} scrollToCardSection={props.scrollToCardSection} />

                <Socials />
                <ModeButton isDark={props.isDark} setIsDark={props.setIsDark} />
            </div>
        </header>
    )
}
