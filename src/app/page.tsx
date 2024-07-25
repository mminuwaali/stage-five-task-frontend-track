import Navbar from "@/components/navbar";

export default function Page() {
    return <section className="relative before:top-0 before:right-0 before:absolute flex flex-col gap-10 bg-white before:bg-purple p-6 before:rounded-b-3xl w-screen before:w-full h-screen before:h-96 overflow-hidden">
        <Navbar />

        <section className="z-10 flex flex-auto justify-center items-center">
        </section>
    </section>
}
