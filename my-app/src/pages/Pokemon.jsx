import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Pokemon.css";

export default function Pokemon() {
	const [pokemonData, setPokemonData] = useState(null);
	const params = useParams();


	const getPokemon = async (pokemon, controller) => {
		try {
		  const res = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${pokemon.pokemon}`,
			{ signal: controller.signal }
		  );
		  console.log(res);
		  if (res.status === 404) {
			setPokemonData("fail");
			return;
		  }
		  const data = await res.json();
		  console.log(data);
		  setPokemonData(data);
		} catch (error) {
			console.log("Pokemon does not exist")
		}
	  };
	  
	  useEffect(() => {
		const controller = new AbortController();
	  
		const getPokemonFunction = async () => {
		  await getPokemon(params, controller);
		  console.log("getting Data");
		};
	  
		getPokemonFunction();
	  
		return () => {
		  console.log("Component unmounted");
		  controller.abort();
		};
	  }, [params]);

	console.log(pokemonData);

	return (
		<>
			{pokemonData === "fail" ? (
				<h1>Failed to find Pokemon</h1>
			) : pokemonData ? (
				<>
					<div className="top-container">
						<div className="left-container">
							<h1>#{pokemonData.id}</h1>
							<div className="inner-container">
							<h2>
								{pokemonData.name.charAt(0).toUpperCase() +
									pokemonData.name.slice(1)}
							</h2>
							<div className="type-container">
								{pokemonData.types.map((types, index) => (
									<p className={types.type.name} key={index}>
										{types.type.name}
									</p>
								))}
							</div>
							</div>
						</div>
						<div className="right-container">
							<img
								src={pokemonData.sprites.other.dream_world.front_default}
								alt={setPokemonData.name}
								/>
						</div>
					</div>
						<h3 className="stat-text">Stats</h3>
					<div className="stat-page">
						<p className="weight">Weight: {(pokemonData.weight * 0.220462).toFixed(1)} lbs</p>
						<div className="chart">
							<p>Hp</p>
							<div
								className="bar"
								style={{
									width: pokemonData.stats[0].base_stat * 5,
									animation: `barAnimation ${
										pokemonData.stats[0].base_stat / 100
									}s ease`,
								}}
								></div>
							<p>{pokemonData.stats[0].base_stat}</p>
						</div>
						<div className="chart">
							<p>Attack</p>
							<div
								className="bar"
								style={{
									width: pokemonData.stats[1].base_stat * 5,
									animation: `barAnimation ${
										pokemonData.stats[1].base_stat / 100
									}s ease`,
								}}
								></div>
							<p>{pokemonData.stats[1].base_stat}</p>
						</div>
						<div className="chart">
							<p>Defense</p>
							<div
								className="bar"
								style={{
									width: pokemonData.stats[2].base_stat * 5,
									animation: `barAnimation ${
										pokemonData.stats[2].base_stat / 100
									}s ease`,
								}}
								></div>
							<p>{pokemonData.stats[2].base_stat}</p>
						</div>
						<div className="chart">
							<p>Special Attack</p>
							<div
								className="bar"
								style={{
									width: pokemonData.stats[3].base_stat * 5,
									animation: `barAnimation ${
										pokemonData.stats[3].base_stat / 100
									}s ease`,
								}}
								></div>
							<p>{pokemonData.stats[3].base_stat}</p>
						</div>
						<div className="chart">
							<p>Special Defense</p>
							<div
								className="bar"
								style={{
									width: pokemonData.stats[4].base_stat * 5,
									animation: `barAnimation ${
										pokemonData.stats[4].base_stat / 100
									}s ease`,
								}}
								></div>
							<p>{pokemonData.stats[4].base_stat}</p>
						</div>
						<div className="chart">
							<p>Speed</p>
							<div
								className="bar"
								style={{
									width: pokemonData.stats[5].base_stat * 5,
									animation: `barAnimation ${
										pokemonData.stats[5].base_stat / 100
									}s ease`,
								}}
								></div>
							<p>{pokemonData.stats[5].base_stat}</p>
						</div>
					</div>
				</>
			) : (
				<h1 className="loading">Loading . . .</h1>
				)}
		</>
	);
}
