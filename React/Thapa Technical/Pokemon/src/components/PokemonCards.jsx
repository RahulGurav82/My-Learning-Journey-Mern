import React from 'react'

const PokemonCards = ({currVal}) => {
  return (
    <li className='list-none'>
        <div className='w-[300px] flex-wrap bg-white border border-gray-200 rounded-lg shadow-sm group relative overflow-visible'>
            <div className="w-full max-w-xs overflow-hidden relative">
                <img
                    className="w-full h-48 object-contain p-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-4 group-hover:z-20"
                    src={currVal?.sprites?.other?.dream_world?.front_default}
                    alt="Pokemon"
                />
            </div>
            
            <div>
                <p className='font-normal text-2xl'>{currVal.name}</p>
            </div>
            <div>
                {
                    currVal.types.map((val)=> val.type.name).join(", ")
                }
            </div>
            <div className='flex gap-4'>
                <p>Height : {currVal.height}</p>
                <p>Weight : {currVal.weight}</p>
                <p>Speed : {currVal.stats[5].base_stat}</p>
            </div>
        </div>

    </li>
  )
}

export default PokemonCards
