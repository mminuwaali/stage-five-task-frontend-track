import type { Metadata } from "next"
import Header from "@/components/header"
import Mobile from "@/components/cards/mobile"

export const metadata: Metadata = {
    title: "Authentication",
}

export default function Layout(props: { children: React.ReactNode }) {
    return <section className="flex flex-col gap-10 p-10 w-screen h-screen overflow-hidden">
        <Header />

        <section className="flex gap-10 w-full h-full overflow-hidden">
            <aside className="md:flex justify-center hidden bg-white rounded md:basis-2/6 items-center py-10">
                <Mobile />
            </aside>

            <main className="flex-auto bg-white rounded overflow-auto basis-96"></main>
        </section>
    </section>
}
