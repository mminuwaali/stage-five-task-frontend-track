"use client"
import React from "react"
import { useUserContext } from "./user.context"

type LinkContextType = {
    error: string
    loading: boolean
    data: LinkType[]
    setData: React.Dispatch<React.SetStateAction<LinkType[]>>
}

const LinkContext = React.createContext<null | LinkContextType>(null)

export function useLinkContext() {
    const context = React.useContext(LinkContext)
    if (context === null) throw new Error("useLinkContext must be used within a LinkProvider")
    return context
}

export default function LinkProvider(props: { children: React.ReactNode }) {
    const { data: user } = useUserContext()!

    const [error, setError] = React.useState("")
    const [loading, setLoading] = React.useState(false)
    const [data, setData] = React.useState<LinkType[]>([])

    return (
        <LinkContext.Provider value={{ loading, error, data, setData }}>
            {props.children}
        </LinkContext.Provider>
    )
}
