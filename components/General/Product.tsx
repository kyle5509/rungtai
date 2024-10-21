'use client'
import { Naira } from "@/lib/helper"
import { addToCart, cartItems, cartTotalQty } from "@/redux/Slice/cart"
import { useAppDispatch, useAppSelector } from "@/redux/Store/hook"
import Link from "next/link"
import { useEffect } from "react"
import { BiHeart } from "react-icons/bi"
import { GrCart } from "react-icons/gr"

type Props = {
  product: any
}



export default function Product({ product }: Props) {
  const dispatch = useAppDispatch()
  const cart = useAppSelector(cartItems)
  useEffect(() => {

    console.log(cart)
  }, [cart])
  return (
    <div className="shadow-md border group duration-500 hover:shadow-lg bg-white border-gray-300 rounded-md overflow-hidden">
      <div className="h-48 relative bg-gray-100 p-2">
        <div onClick={() => {
          dispatch(addToCart({ ...product, quantity: 1 }))
        }
        } className="absolute cursor-pointer z-20 active:scale-95 duration-500 group-hover:opacity-100 group-hover:visible opacity-0 invisible top-3 right-3 h-8 w-8 rounded-full text-emerald-500 border-emerald-500 hover:bg-emerald-100 border-2  hover:scale-105 bg-emerald-50 shadow-md grid place-content-center">
          <GrCart className=" text-[15px]" />
        </div>
        <Link href={`/details/${product?.id}`} className="absolute top-0 left-0 h-full w-full">
          <img src={product?.images[0]} className="h-full group-hover:scale-105 duration-500 w-full object-contain" alt="" />
        </Link>
      </div>
      <Link href={`/details/${product?.id}`} className="block p-3">
        <p className="font-semibold mb-2 text-[15px] text-ellipsis w-full group-hover:text-blue-800 duration-300 overflow-hidden whitespace-nowrap">{product.title}</p>
        <p className=" text-ellipsiss duration-300 hover:text-amber-600 text-[13px] text-gray-600">{product?.description}</p>
        <div className="mt-2 flex items-center gap-2">
          <p className="font-bold text-lg">{Naira} {(product?.price * 1700).toLocaleString()}</p>
          <p className=" text-xs text-gray-400">-{product?.discountPercentage}%</p>
          <BiHeart className="ml-auto inline-block text-xl duration-300 active:scale-90 text-rose-500" />
        </div>
      </Link>
    </div>
  )
}
