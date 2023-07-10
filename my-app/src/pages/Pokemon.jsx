import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import "./Pokemon.css";

export default function Pokemon() {
  const [pokemonData, setPokemonData] = useState(null);
  const params = useParams();

  const getPokemon = async (pokemon) => {
    console.log(pokemon.pokemon);
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.pokemon}`
      );
      console.log(res);
      if (res.status === 404) {
        setPokemonData("fail");
        return;
      }
      const data = await res.json();
      console.log(data);
      setPokemonData(data);
    } catch (error) {}
  };

  const shouldGetPokemon = useRef(true);

  useEffect(() => {
    if (shouldGetPokemon.current) {
      shouldGetPokemon.current = false;
      getPokemon(params);
      console.log("getting Data");
    }
  }, [params]);

  console.log(pokemonData);

  return (
    <>
      {pokemonData === "fail" ? (
        <h1>Failed to find Pokemon</h1>
      ) : pokemonData ? (
        <>
          <div className="top-container">
            <h1>#{pokemonData.id}</h1>
            <p>{pokemonData.name}</p>
            {pokemonData.types.map((types, index) => (
              <p className={types.type.name} key={index}>
                {types.type.name}
              </p>
            ))}
            <p>{(pokemonData.weight * 0.220462).toFixed(1)} lbs</p>
            <img
              src={pokemonData.sprites.other.dream_world.front_default}
              alt={setPokemonData.name}
            />
          </div>
          <div className="stat-page">
            <p>Stats</p>
            <div className="chart">
                <p>Hp</p>
                <div className="bar" style={{
                    width: pokemonData.stats[0].base_stat*5}}>
                    </div>
                <p>{pokemonData.stats[0].base_stat}</p>
            </div>
            <div className="chart">
                <p>Attack</p>
                <div className="bar" style={{
                    width: pokemonData.stats[1].base_stat*5}}>
                    </div>
                <p>{pokemonData.stats[1].base_stat}</p>
            </div>
            <div className="chart">
                <p>Defense</p>
                <div className="bar" style={{
                    width: pokemonData.stats[2].base_stat*5}}>
                    </div>
                <p>{pokemonData.stats[2].base_stat}</p>
            </div>
            <div className="chart">
                <p>Special Attack</p>
                <div className="bar" style={{
                    width: pokemonData.stats[3].base_stat*5}}>
                    </div>
                <p>{pokemonData.stats[3].base_stat}</p>
            </div>
            <div className="chart">
                <p>Special Defense</p>
                <div className="bar" style={{
                    width: pokemonData.stats[4].base_stat*5}}>
                    </div>
                <p>{pokemonData.stats[4].base_stat}</p>
            </div>
            <div className="chart">
                <p>Speed</p>
                <div className="bar" style={{
                    width: pokemonData.stats[5].base_stat*5}}>
                    </div>
                <p>{pokemonData.stats[5].base_stat}</p>
            </div>
          </div>
        </>
      ) : (
        <h1>Loading . . .</h1>
      )}
    </>
  );
}
