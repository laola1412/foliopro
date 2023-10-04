import { Suspense } from 'react'
import Loading from './loading'

export default async function PokemonDetails({ params }) {
    const data = await getPokemonDetails(params.pokemon_id).then((data) => data)
    console.log(data)

    return (
        <>
            <div>Pokemon Detail</div>
            <Suspense fallback={<Loading />}>
                {data && (
                    <div>
                        <h1>{data.name}</h1>
                        <p>{data.types[0].type.name}</p>
                        <p>{data.weight}</p>
                        <p>{data.stats[1].stat.name}</p>
                    </div>
                )}
            </Suspense>
        </>
    )
}

async function getPokemonDetails(route) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${route}`)
    return res.json()
}
