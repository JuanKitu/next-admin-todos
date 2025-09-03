'use client'
import React from 'react'
import {useSession} from "next-auth/react";

export default function ProfilePage() {
    const session = useSession();
    return (
        <div>
            {
                JSON.stringify(session)
            }
        </div>
    )
}
