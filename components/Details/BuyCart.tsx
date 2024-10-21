'use client'
import { addToCart } from "@/redux/Slice/cart";
import { useAppDispatch, useAppSelector } from "@/redux/Store/hook";
import { GrLocation } from "react-icons/gr";
import Quantity from "./Quantity";
import { Naira } from "@/lib/helper";
import { Dispatch, SetStateAction, useEffect } from "react";
import { revertQuantity } from "@/redux/Slice/products";

type Props = {
    product: any
    price: number
}

export default function BuyCart({ product, price }: Props) {
    const dispatch = useAppDispatch()
    const quantity = useAppSelector(store => store.products.quantity)

    const AddToCart = () => {
        dispatch(addToCart({ ...product, quantity }))
    }

    useEffect(() => {
        dispatch(revertQuantity())
    }, [])


    return (
        <div className="">
            <div className='w-80 border sticky top-[170px] shadow-md rounded-xl border-gray-400 bg-white'>
                <p className="text-xl font-semibold p-4 pb-0">{Naira} {(price * 1700).toLocaleString()}</p>
                <div className="p-3 pt-0 text-xs">
                    <Quantity />
                    <button className='bg-rose-600 w-full mt-3 py-3 hover:bg-rose-500 duration-300 active:scale-95    mb-4 rounded-full text-white shadow-md font-semibold'>Buy Now</button>
                    <button className='bg-rose-200 text-rose-500 w-full py-3 active:scale-95 duration-300 hover:bg-rose-100 rounded-full shadow-md font-semibold' onClick={AddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
