import Foliocard from '@/components/foliocard'
import NewFolioEntry from '@/components/newfolioentry'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function Home() {
    const cookieStore = cookies()
    const supabase = createServerComponentClient({ cookies: () => cookieStore })

    let { data: FolioEntry } = await supabase.from('FolioEntry').select('*')

    async function signInWithEmail() {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: 'example@email.com',
            password: 'example-password'
        })
    }

    return (
        <main>
            <section className="h-full px-8 py-24 text-white ">
                <h1 className="mb-8 text-3xl font-semibold tracking-tight text-black">
                    Current Investments
                </h1>
                <div className="grid grid-cols-5 gap-4">
                    <NewFolioEntry />
                    {FolioEntry.map(({ ticker, id }) => (
                        <Foliocard key={id} id={id} title={ticker} />
                    ))}
                </div>
            </section>
        </main>
    )
}
