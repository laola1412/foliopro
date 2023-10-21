import { CalendarDays } from 'lucide-react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'

export default function Foliocard(props) {
    return (
        <>
            <Link
                href={`/${props.id}`}
                className="px-4 py-6 bg-white border rounded-md hover:bg-neutral-200 hover:cursor-pointer"
            >
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <Button className="text-lg font-bold " size="simple" variant="link">
                            {props.title.toUpperCase()}
                        </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                        <div className="flex justify-between space-x-4">
                            <Avatar>
                                <AvatarImage src="https://github.com/vercel.png" />
                                <AvatarFallback>VC</AvatarFallback>
                            </Avatar>
                            <div className="space-y-1">
                                <h4 className="text-sm font-semibold">@nextjs</h4>
                                <p className="text-sm">
                                    The React Framework – created and maintained by @vercel.
                                </p>
                                <div className="flex items-center pt-2">
                                    <CalendarDays className="w-4 h-4 mr-2 opacity-70" />{' '}
                                    <span className="text-xs text-muted-foreground">
                                        Joined December 2021
                                    </span>
                                </div>
                            </div>
                        </div>
                    </HoverCardContent>
                </HoverCard>
                <p className="text-sm tracking-tight text-neutral-500">Hello 123</p>
            </Link>
        </>
    )
}
