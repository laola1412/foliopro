'use client'
import Foliocard from '@/components/foliocard'
import { Button } from "@/components/ui/button"


export default function Home() {
    return (
        <main className="w-full p-12 ">
            <div className='flex gap-4 mb-8 '>
                <h1 className="text-4xl font-semibold tracking-tight text-black">
                    Current Investments
                </h1>
                <Button className='bg-red-400'>Add</Button>
            </div>
                <div className="grid grid-cols-5 gap-4">
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
                </div>
        </main>
    )
}
