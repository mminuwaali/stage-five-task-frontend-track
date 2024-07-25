import Image from "next/image"
import Link from "next/link"
export default function Header() {
    return <header className="flex justify-around items-center gap-4 p-2 rounded-md w-full">
        <Link href="/">
            <Image alt="" src="/logo.svg" width={100} height={100} className="h-14" />
        </Link>

        <nav className="flex justify-center items-center gap-2 grow"></nav>

        <nav className="flex justify-center items-center gap-2"></nav>
    </header>
}
