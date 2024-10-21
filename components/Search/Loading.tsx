'use client'

import { useAppSelector } from "@/redux/Store/hook"
import { useEffect, useState } from "react"

export default function Loading() {
    const products = useAppSelector(store => store.products.products)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(products.length > 0 ? false : true)
    }, [products])

    return (
        <div className={`h-full duration-300 w-full absolute top-0 left-0 grid place-content-center bg-white ${!loading ? "opacity-0 invisible" : "visible opacity-100"}`}>
            <span className="loader"></span>
        </div>)
}
