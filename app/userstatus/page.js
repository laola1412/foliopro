'use client'
import { Auth } from '@supabase/ui'

export default function UserStatus() {
    const user = Auth.useUser()

    return (
        <>
            {user && <p>Logged in as {user.email}</p>}
            <p>Show always</p>
        </>
    )
}
