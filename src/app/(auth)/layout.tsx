import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Authentication",
}

export default function Layout(props: { children: React.ReactNode }) {
    return <section className="flex flex-col justify-center items-center gap-4 w-screen h-screen">
        <Link href="/">
            <Image alt="" src="/logo.svg" width={100} height={100} className="w-40" />
        </Link>

        <div className="bg-white shadow p-4 rounded w-4/5 md:w-1/2 xl:w-1/3">
            {props.children}
        </div>
    </section>
}
