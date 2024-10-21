'use client'
import { BsHeart, BsTrash } from "react-icons/bs";
import { useState } from "react";
import { motion } from 'framer-motion'
import { Naira } from "@/lib/helper";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/Store/hook";
import { removeFromCart, updateQuantity } from "@/redux/Slice/cart";

type Props = {
    product: any
}

export default function Cart({ product }: Props) {
    const [quantity, setQuantity] = useState(product.quantity)
    const store = useAppSelector(store => store.cart)
    const ids = store.cart?.map((el) => {
        return el.id
    })
    const dispatch = useAppDispatch()
    const { id } = product
    const RemoveFromCart = () => {
        dispatch(removeFromCart(id))
    }
    const UpdateQuantity = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newQuantity = parseInt(e.target.value);
        setQuantity(newQuantity);
        dispatch(updateQuantity({ id: product.id, quantity: newQuantity }))
    }

    return (
        <motion.div initial={{ x: '-100vw' }}
            animate={{ x: ids.includes(id) ? 0 : '-100vw' }}
            transition={{ duration: 0.5 }}>
            <div className="flex">
                <div className="h-36 w-40 rounded-md">
                    <img src={product?.images[0]} className="h-full w-full object-contain" alt="" />
                </div>
                <div className="flex-1 flex flex-col justify-between p-3 h-40 rounded-md">
                    <div className="grid grid-cols-[1fr_auto] gap-7 justify-between">
                        <Link href={`/details/${product?.id}`} className="flex duration-300 hover:text-blue-500 font-[500] text-[15px] text-wrap hover:underline"> {product?.description}</Link>
                        <div className="flex whitespace-nowrap justify-end text-nowrap items-center gap-5 text-base">
                            <BsHeart className="cursor-pointer hover:text-rose-600 duration-300" />
                            <BsTrash onClick={RemoveFromCart} className="cursor-pointer hover:text-rose-600 duration-300" />
                        </div>
                    </div>
                    <div className="flex justify-between items-end">
                        <p className="text-base font-semibold">{Naira}{(product?.price * 1700).toLocaleString()}</p>
                        <div className="h-10 w-20 px-2 rounded-full border-2">
                            <select name="" onChange={UpdateQuantity} value={quantity} className="w-full outline-none border-none h-full bg-transparent " id="">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
