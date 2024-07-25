"use client"
import React from "react"

type UserContextType = {
    error: string
    data: UserType
    loading: boolean
    setData: React.Dispatch<React.SetStateAction<UserType>>
}

const UserContext = React.createContext<null | UserContextType>(null)

export function useUserContext() {
    const context = React.useContext(UserContext)
    if (context === null) throw new Error("useUserContext must be used within a UserProvider")
    return context
}

export default function UserProvider(props: { children: React.ReactNode }) {
    const [error, setError] = React.useState("")
    const [loading, setLoading] = React.useState(false)
    const [data, setData] = React.useState<UserType>({})

    return (
        <UserContext.Provider value={{ loading, error, data, setData }}>
            {props.children}
        </UserContext.Provider>
    )
}
