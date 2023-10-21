import { Suspense } from 'react'
import supabase from '@/lib/supabaseClient/'

export default async function Statistics() {
    let { data: FolioEntry, error } = await supabase.from('FolioEntry').select('ticker')

    return (
        <>
            <h1>Statistics</h1>
            <div className="flex flex-col">
                <Suspense fallback={<div>Loading...</div>}>
                    {FolioEntry.map(({ ticker }) => (
                        <p>{ticker}</p>
                    ))}
                </Suspense>
            </div>
        </>
    )
}
