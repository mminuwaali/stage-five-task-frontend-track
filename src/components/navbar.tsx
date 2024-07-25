"use client"
import Link from "next/link"
import Image from "next/image"
import { useUserContext } from "./contexts/user.context"
export default function Navbar() {
    const { data } = useUserContext()

    return <nav className="z-10 flex justify-between items-center gap-4 bg-white py-2 p-8 rounded-md w-full">
        {data ? <>
            <Link href="/profile/detail" className="border-purple px-6 py-1.5 border rounded-md text-purple">Back to Editor</Link>
            <Link href="#" className="bg-purple px-6 py-1.5 rounded-md text-white">Share Link</Link>
        </> : <>
            <Image alt="" src="/logo.svg" width={100} height={100} className="h-14" />

            <nav className="flex items-center gap-6">
                <Link href="/signin" className="bg-purple px-6 py-1.5 rounded-md text-white">Sign in</Link>
                <Link href="/signup" className="border-purple px-6 py-1.5 border rounded-md text-purple">Sign up</Link>
            </nav>
        </>}
    </nav>
}
