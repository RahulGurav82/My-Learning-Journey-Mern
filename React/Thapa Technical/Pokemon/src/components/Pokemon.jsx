import React, { useEffect, useState } from 'react'
import PokemonCards from './PokemonCards';

const Pokemon = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, seError] = useState(null);
    const [search, setSearch] = useState("");

    const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

    const FetchAPI = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();

            const PokemonDetails = data.results.map( async (currVal)=> {
                const res = await fetch(currVal.url);
                const data = res.json();
                return data;
            });

            const AllPokemoms = await Promise.all(PokemonDetails);
            setPokemons(AllPokemoms);
            setLoading(false);

        } catch (error) {
            seError(error);
        }
    }

    useEffect(()=> {
        FetchAPI();
    }, []);

    const SearchResult = pokemons.filter((crrVal) => 
         crrVal.name.includes(search.toLowerCase())
    )

    if(loading) {
        return (
            <div>
                <h1>Loading....</h1>
            </div>
        )
    }

    if(error) {
        return (
            <h1>Error : {error.message}</h1>
        )
    }
  return (
    <>
      <section className='text-center w-full'>
            <div className='font-medium text-4xl'>Let's Catch Pokemon</div>
            <input type="text" placeholder='search....' className='border' value={search} onChange={(e)=> setSearch(e.target.value)} />
            <div className='w-full'>
                <ul className='flex flex-wrap w-full mt-12'>
                    {
                        SearchResult.map((currVal) => {
                            return (
                            <PokemonCards key={currVal.id} currVal={currVal} /> 
                            )
                        })
                    }
                </ul>
            </div>
      </section>
    </>
  )
}

export default Pokemon
