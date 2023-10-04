import Link from 'next/Link'
import { Suspense } from 'react'

export default async function Statistics() {
    const pokemonNames = await getPokemonNames()

    return (
        <>
            <h1>Statistics</h1>
            <div className="flex flex-col">
                <Suspense fallback={<div>Loading...</div>}>
                    {pokemonNames.results.map((pokemon) => (
                        <Link href={`/statistics/${pokemon.name}`} key={pokemon.name}>
                            {pokemon.name}
                        </Link>
                    ))}
                </Suspense>
            </div>
        </>
    )
}

async function getPokemonNames() {
    return await fetch('https://pokeapi.co/api/v2/pokemon/?offset=100&limit=40').then((res) =>
        res.json()
    )
}
