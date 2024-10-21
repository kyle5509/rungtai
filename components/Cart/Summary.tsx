'use client'
import { Naira } from "@/lib/helper";
import { cartSum } from "@/redux/Slice/cart";
import { useAppSelector } from "@/redux/Store/hook";

export default function Summary() {
  const sum = useAppSelector(cartSum)
  
  

  return (
    <div className="">
      <div className="w-80 rounded-md h-fit sticky border top-[175px] shadow-md ">
        <p className="text-lg p-3 font-semibold mb-2 border-b">Summary</p>
        <div className="p-3">
          <div className="flex justify-between items-center">
            <p className="text-[17px]">Subtotal</p>
            <p className="text-[17px] font-semibold">{Naira}{sum}</p>
          </div>
          <button className="text-sm w-full font-semibold text-white py-3.5 mt-6 rounded-full shadow-md bg-rose-500">Checkout</button>
        </div>
      </div>
    </div>
  )
}
