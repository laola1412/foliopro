'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import supabase from '@/lib/supabaseClient'

export default function NewFolioEntry() {
    const [ticker, setTicker] = useState('')
    const [analysis, setAnalysis] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(ticker, analysis, name)

        const { data, error } = await supabase.from('FolioEntry').insert([
            {
                ticker,
                analysis,
                name
            }
        ])
        if (error) {
            console.log(error)
        }
        if (data) {
            console.log(data)
        }
    }

    return (
        <>
            <div className="px-4 py-6 text-white border rounded-md cursor-pointer hover:border-neutral-200 hover:text-neutral-800 hover:bg-white bg-neutral-200">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline">Share</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                            <DialogTitle>Create New Investment</DialogTitle>
                            <DialogDescription>
                                Start creating a new analysis instance.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="flex items-center space-x-2">
                            <div className="grid flex-1 gap-2">
                                <form onSubmit={handleSubmit}>
                                    <Label htmlFor="link">Ticker</Label>
                                    <Input
                                        id="link"
                                        defaultValue=""
                                        onChange={(e) => setTicker(e.target.value)}
                                    />
                                    <Label htmlFor="link">Company Name</Label>
                                    <Input
                                        id="link"
                                        defaultValue=""
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <Label htmlFor="link">Analysis</Label>
                                    <Input
                                        id="link"
                                        defaultValue=""
                                        onChange={(e) => setAnalysis(e.target.value)}
                                    />
                                    <button type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                        <DialogFooter className="sm:justify-start">
                            <DialogClose asChild>
                                <Button type="button" variant="secondary">
                                    Close
                                </Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    )
}
