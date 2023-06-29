import {useState, useEffect, useRef} from "react"
import PokemonThumbnail from "../components/PokemonThumbnail.js"

export default function Pokedex() {
    const [allPokemon, setAllPokemon] = useState([])
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')

    const getAllPokemons = async () => {
      const res = await fetch(loadMore)
      const data = await res.json()
      setLoadMore(data.next)

      const pokemonDataPromises = data.results.map(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
       return res.json()
      })

      const pokemonData = await Promise.all(pokemonDataPromises)
      setAllPokemon(currentList => [...currentList, ...pokemonData])
    }
    
    const shouldGetAllPokemon = useRef(true)

    useEffect(() => {
      if(shouldGetAllPokemon.current) {
        shouldGetAllPokemon.current = false
        getAllPokemons()
      }
    })

    return (
      <div className="app-container">
        <h1>PokeDex</h1>
        <input className="sticky" type="text" placeholder="Search for Pokemon"/>
        <div className="pokemon-container">
          <div className="all-container">
          {allPokemon.map((pokemon, index) => (
              <PokemonThumbnail
                key={index}
                pokemon={pokemon}
                />
          ))}
          </div>
        </div>
        {loadMore ?  
          <button className="load-more" onClick={() => getAllPokemons()}>Load More</button> 
          :<></>
        }
      </div>
    );
}

