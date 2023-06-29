import { useParams} from "react-router-dom"
import { useEffect, useState, useRef } from "react"

export default function Pokemon() {
    const [pokemonData, setPokemonData] = useState(null)
    const params = useParams()
    
    const getPokemon = async (pokemon) => {
        console.log(pokemon.pokemon)
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.pokemon}`)
            const data = await res.json()
            console.log(data)
            setPokemonData(data)
        } catch(error) {
            console.log(error)
        }

    }

    const shouldGetAllPokemon = useRef(true)

    useEffect(() => {
      if(shouldGetAllPokemon.current) {
        shouldGetAllPokemon.current = false
        getPokemon(params)
      }
    }, [params])

    console.log(pokemonData)

    return (
        <>
            {pokemonData ?
            <>
            <h1>{pokemonData.name}</h1>
            <h2>Test</h2>
            </>: 
            <h1>Loading . . .</h1>}
        </>
    )
}