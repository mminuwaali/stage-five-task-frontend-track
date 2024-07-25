"use client"
import Navbar from "@/components/navbar"
import ProfileCard from "@/components/cards/profile"
import { useUserContext } from "@/components/contexts/user.context"

export default function Page() {
    const { data } = useUserContext()
    return <section className="relative before:top-0 before:right-0 before:absolute flex flex-col gap-10 bg-white before:bg-purple p-6 before:rounded-b-3xl w-screen before:w-full h-screen before:h-96 overflow-hidden">
        <Navbar />

        <section className="z-10 flex flex-auto justify-center items-center">
            {data ? null : <ProfileCard />}
        </section>
    </section>
}
