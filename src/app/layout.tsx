import UserProvider from "@/components/contexts/user.context"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import LinkProvider from "@/components/contexts/link.context"

const inter = Inter({ subsets: ["latin"], preload: true })

export const metadata: Metadata = {
    title: "Devlinks",
    description: "",
}

export default function Layout(props: { children: React.ReactNode }) {
    return <html lang="en">
        <body className={`bg-pale-gray ${inter.className}`}>
            <UserProvider>
                <LinkProvider>
                    <div id="root">{props.children}</div>
                    <div id="portal"></div>
                </LinkProvider>
            </UserProvider>
        </body>
    </html>
}
