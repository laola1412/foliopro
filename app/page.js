import Foliocard from '@/components/foliocard'
<<<<<<< HEAD
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
=======
import { Button } from "@/components/ui/button"

>>>>>>> fefac30fed76a4ba66c58db9b8ce21dd4737cab8

    return (
        <main className="w-full p-12 ">
            <div className='flex gap-4 mb-8 '>
                <h1 className="text-4xl font-semibold tracking-tight text-black">
                    Current Investments
                </h1>
                <Button className='bg-red-400'>Add</Button>
            </div>
                <div className="grid grid-cols-5 gap-4">
<<<<<<< HEAD
                    <NewFolioEntry />
                    {FolioEntry.map(({ ticker, id }) => (
                        <Foliocard key={id} id={id} title={ticker} />
                    ))}
=======
                    <Foliocard />
                    <Foliocard />
                    <Foliocard />
                    <Foliocard />
                    <Foliocard />
                    <Foliocard />
                    <Foliocard />
                    <Foliocard />
                    <Foliocard />
                    <Foliocard />
                    <Foliocard />
                    <Foliocard />
                    <Foliocard />
>>>>>>> fefac30fed76a4ba66c58db9b8ce21dd4737cab8
                </div>
        </main>
    )
}
