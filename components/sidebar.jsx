"use client"
import Link from "next/link"
import { useState } from "react"
import { PanelLeftIcon, PanelLeftOpenIcon, WalletCardsIcon, HammerIcon, LineChartIcon, SlidersIcon } from "lucide-react";

export default function Sidebar() {
    const [sidebarStatus, setSidebarStatus] = useState(true)

  return (
    <>
        <div className={`p-4 sticky top-0 left-0 bg-neutral-900 h-[100vh] ${sidebarStatus ? 'w-[300px]' : ''}`}>
            <div className="inline-block mb-12 cursor-pointer" onClick={() => setSidebarStatus(!sidebarStatus)}>
            {
                sidebarStatus ? <PanelLeftIcon className="w-6 h-6 text-neutral-400 hover:text-white" /> : <PanelLeftOpenIcon className="w-6 h-6 text-neutral-400 hover:text-white" />
            }
            </div>
            
            {
                sidebarStatus && 
                <div className="flex flex-col">
                    <Link href="/" className="flex gap-3 p-4 rounded-lg hover:text-white hover:cusor-pointer hover:bg-neutral-800 text-neutral-400">
                        <WalletCardsIcon className="w-6 h-6" />
                        <p className="">Investments</p>
                    </Link >
                    <Link href="/" className="flex gap-3 p-4 rounded-lg hover:text-white hover:cusor-pointer hover:bg-neutral-800 text-neutral-400">
                        <HammerIcon className="w-6 h-6 " />
                        <p className="" >Analysis</p>
                    </Link >
                    <Link href="/statistics" className="flex gap-3 p-4 rounded-lg hover:text-white hover:cusor-pointer hover:bg-neutral-800 text-neutral-400">
                        <LineChartIcon className="w-6 h-6 " />
                        <p className="" >Statistics</p>
                    </Link >
                    <Link href="/settings" className="flex gap-3 p-4 rounded-lg hover:text-white hover:cusor-pointer hover:bg-neutral-800 text-neutral-400">
                        <SlidersIcon className="w-6 h-6 " />
                        <p className="" >Settings</p>
                    </Link >
                </div>
            }
            
        </div>
    </>
  );
}
