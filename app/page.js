'use client'
import Foliocard from '@/components/foliocard'
import NewFolioEntry from '@/components/newfolioentry'

export default function Home() {
    return (
        <main>
            <section className="h-full px-8 py-24 text-white ">
                <h1 className="mb-8 text-3xl font-semibold tracking-tight text-black">
                    Current Investments
                </h1>
                <div className="grid grid-cols-5 gap-4">
                    <NewFolioEntry />
                    <Foliocard />
                </div>
            </section>
        </main>
    )
}
