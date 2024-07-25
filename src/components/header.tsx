"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Header() {
    const pathname = usePathname()

    return <header className="flex justify-around items-center gap-4 bg-white p-2 rounded-md w-full">
        <Link href="/">
            <Image alt="" src="/logo.svg" width={100} height={100} className="h-14" />
        </Link>

        <nav className="flex justify-center items-center gap-2 grow">
            <Link href="/profile/social" className={`${pathname === '/profile/social' ? 'bg-light-gray' : 'bg-transparent'} px-6 py-1.5 rounded-md text-purple flex items-center gap-2`}>
                <Image alt="" src="/icons/link.svg" width={100} height={100} className="w-4" />
                <span className="capitalize">links</span>
            </Link>
            <Link href="/profile/detail" className={`${pathname === '/profile/detail' ? 'bg-light-gray' : 'bg-transparent'} px-6 py-1.5 rounded-md text-purple flex items-center gap-2`}>
                <Image alt="" src="/icons/link.svg" width={100} height={100} className="w-4" />
                <span className="capitalize">profile details</span>
            </Link>
        </nav>

        <Link href="/" className="border-purple bg-light-gray px-6 py-1.5 border rounded-md text-purple">Preview</Link>
    </header>
}