import React from "react";
import { Link } from "react-router-dom";
import './PokemonThumbnail.css'

const PokemonThumbnail = ({pokemon}) => {
    return(
        <Link to={`/${pokemon.name}`} className="link">
        <div className="thumb-container">
            <p>#0{pokemon.id}</p>
            <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/>
            <div className="detail-wrapper">
                <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
                <div className="type-containers">
                {pokemon.types.map((types, index) => (
                    <PokemonType
                    key={index}
                    types={types.type.name}
                    />
                    ))}
                </div>
            </div>
        </div>
        </Link>
    )
}

const PokemonType = (types) => {
       const typeColors = {
        normal: "#bdbaaf",
        fire: "#cc2f0a",
        water: "#3490ed",
        grass: "#74bb40",
        electric: "#fbb720",
        ice: "#8fe4fb",
        fighting: "#80351a",
        poison: "#954595",
        ground: "#d0b656",
        flying: "#6a77dd",
        psychic: "#f7407e",
        bug: "#a2b01f",
        rock: "#ae9549",
        ghost: "#5d59ac",
        dark: "#4d392e",
        dragon: "#745edf",
        steel: "#b6b4be",
        fairy: "#f4abfc",
      };
      
      const typeColor = typeColors[types.types] || "white";

  const pokemonTypeStyle = {
    backgroundColor: typeColor
  };

    return (
        <div className="pokemon-type-bubble" style={pokemonTypeStyle}>
            <small>{types.types}</small>
        </div>
    )
}

export default PokemonThumbnail