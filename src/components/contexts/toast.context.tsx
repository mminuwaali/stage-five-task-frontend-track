"use client"
import React from "react"

const ToastContext = React.createContext(null)

export function useToastContext() {
    const context = React.useContext(ToastContext)
    if (context === null) throw new Error("useToastContext must be used within a ToastProvider")
    return context
}

export default function ToastProvider(props: { children: React.ReactNode }) {
    return <ToastContext.Provider value={null}>
        {props.children}
    </ToastContext.Provider>
}
