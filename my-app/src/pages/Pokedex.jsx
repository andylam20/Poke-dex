import {useState, useEffect} from "react"
import PokemonThumbnail from "../components/PokemonThumbnail.js"

export default function Pokedex() {
    const [allPokemon, setAllPokemon] = useState([])
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')

      const getAllPokemons = async () => {
        try{
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
        catch {
          console.log("Fail")
        }
      }

    useEffect(() => {
      const shouldGetAllPokemonFunction = () => {
        getAllPokemons()
      }

      return shouldGetAllPokemonFunction()
    })

    return (
      <div className="app-container">
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

