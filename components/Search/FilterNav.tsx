'use client'
import { useAppDispatch } from "@/redux/Store/hook";
import DeliveryOptions from "./DeliveryOptions";
import PriceFilter from "./PriceFilter";
import { useEffect } from "react";
import { addProducts } from "@/redux/Slice/products";

export default function FilterNav({ products }: { products: any }) {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(addProducts(products))
  }, [])
  return (
    <div className="">
      <div className="w-[300px] pt-3 top-[155px] sticky ">
        <div className="bg-white p-5 shadow-md rounded-xl overscroll-y-auto h-full">
          <DeliveryOptions />
          <PriceFilter />
        </div>
      </div>
    </div>
  )
}
