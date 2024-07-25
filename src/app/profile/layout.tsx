import Header from "@/components/header"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Authentication",
}

export default function Layout(props: { children: React.ReactNode }) {
    return <section className="flex flex-col gap-10 p-10 w-screen h-screen overflow-hidden">
        <Header />
        
        <section className="flex gap-10 w-full h-full overflow-hidden">
            <aside className="bg-white rounded basis-60 grow"></aside>

            <main className="flex-auto bg-white rounded overflow-auto basis-96"></main>
        </section>
    </section>
}
