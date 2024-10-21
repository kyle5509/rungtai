'use client'
import { Naira } from "@/lib/helper";
import { addProduct } from "@/redux/Slice/products";
import { useEffect } from "react";
import { BsStarFill } from "react-icons/bs";
import { useDispatch } from "react-redux";

type Props = {
  product: any
}
export default function About({ product }: Props) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addProduct(product))
  }, [])


  return (
    <div className="select-none py-2">
      <p className="text-xl font-[500] text-gray-800 mb-4 ">{product?.description}</p>
      <div className="flex text-sm text-gray-600 gap-2 items-center mt-2">
        {[1, 2, 3, 4, 5].map(() => (
          <BsStarFill className="text-amber-500" />
        ))}
        <strong className="text-black ml-1">4.6</strong>
        <span className="ml-2">23 Reviews</span>
        <span>|</span>
        <span>241 Sold</span>
      </div>
      <p className="font-semibold text-xl mt-5"><span className="text-rose-500 font-light mr-2">-{product?.discountPercentage}%</span> <span className="text-lg mr-1">{Naira}</span>{(product?.price * 1700).toLocaleString()}</p>
      <div className="space-y-3 text-sm mt-4">
        {product?.brand && <p><strong className="mr-2">Brand:</strong> {product.brand}</p>}
        {product?.weight && <p><strong className="mr-2">Weight:</strong> {product.weight}g</p>}
        {product?.dimensions && <p><strong className="mr-2">Dimensions:</strong> {product.dimensions.height} <span className="text-sm font-semibold">X</span> {product.dimensions.width} <span className="text-sm font-semibold">X</span> {product.dimensions.depth} </p>}
      </div>
    </div>
  )
}
