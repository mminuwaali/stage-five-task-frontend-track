import Link from "next/link"
import Image from "next/image"
export default function Navbar() {
    return <nav className="z-10 flex justify-between items-center gap-4 bg-white p-4 rounded-md w-full">
        <Link href="#" className="border-purple px-6 py-1.5 border rounded-md text-purple">Back to Editor</Link>
        <Link href="#" className="bg-purple px-6 py-1.5 rounded-md text-white">Share Link</Link>
    </nav>
}
