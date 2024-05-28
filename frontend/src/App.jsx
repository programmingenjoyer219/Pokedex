import axios from "axios";
import React, { useRef, useState } from "react";
import Hero from "./components/Hero";
import CardSection from "./components/CardSection";

export default function App() {
	const ref = useRef(null); // Lets you scroll to a particular section
	const [isDark, setIsDark] = useState(true);
	const [pokemonData, setPokemonData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const cardsPerPage = 8;

	const lastPostIndex = (currentPage * cardsPerPage) - 1;
	const firstPostIndex = (lastPostIndex - cardsPerPage) + 1;

	let currentCards = pokemonData.slice(firstPostIndex, lastPostIndex + 1);
	let numPages = Math.ceil(pokemonData.length / cardsPerPage);

	function scrollToCardSection() {
		ref.current?.scrollIntoView({ behavior: "smooth" })
	}

	async function getPokemonData(queryType, name) {
		let endpoint = `http://localhost:3000/${queryType}/${name}`;
		try {
			const response = await axios.get(endpoint);
			setPokemonData(response.data);
		} catch (error) {
			console.error(error);
		}
	}

	if (pokemonData.length === 0) {
		getPokemonData("pokemon", "all");
	}

	isDark ? document.querySelector("html").className = "dark" : document.querySelector("html").className = "light";

	return (
		<>
			<Hero isDark={isDark} setIsDark={setIsDark} receiveData={getPokemonData} setPageNum={setCurrentPage} scrollToCardSection={scrollToCardSection} />
			<CardSection isDark={isDark} ref={ref} cardsToDisplay={currentCards} setPageNum={setCurrentPage} currentPageNum={currentPage} numPages={numPages} />
		</>
	)
}