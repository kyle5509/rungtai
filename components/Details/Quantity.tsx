'use client'

import { updateQuantity } from "@/redux/Slice/products"
import { useAppDispatch, useAppSelector } from "@/redux/Store/hook"
import { useEffect, useState } from "react"

export default function Quantity() {
    const dispatch = useAppDispatch()
    const quantity = useAppSelector(store => store.products.quantity)
    const onChange = (e: any) => {
        dispatch(updateQuantity(e.target.value))
    }
    useEffect(() => {
        dispatch(updateQuantity(quantity))
        console.log(quantity)
    }, [quantity])

    return (
        <div className="flex mt-3 items-center gap-3">
            <div className="h-10 border-2 w-full rounded-full border-gray-500 bg-gray-50 cursor-pointer overflow-hidden relative">
                <p className="absolute top-1/2 -translate-y-1/2 left-3 pointer-events-none">Quantity: </p>
                <select value={quantity} onChange={onChange} name="" className="w-full font-semibold bg-transparent cursor-pointer rounded-full h-full pl-20 outline-none ">
                    {[1, 2, 3, 4, 5].map((el, key) => (
                        <option value={`${(el)}`}>{el}</option>
                    ))}
                </select>

            </div>
        </div>)
}
