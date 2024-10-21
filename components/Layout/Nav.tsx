'use client'
import { cartTotalQty } from "@/redux/Slice/cart";
import { useAppSelector } from "@/redux/Store/hook";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiSearch, BiUser } from "react-icons/bi"
import { BsCart } from "react-icons/bs"
import { IoCallOutline } from "react-icons/io5";

export default function Nav() {
  const links = ['Specials', 'Offices', 'Home', 'Kitchen', 'Wood', 'Finishing', 'Workshop', 'Store']
  const Logo = ['R', 'U', 'N', 'G', 'T', 'A', 'I']
  const [value, setValue] = useState('')
  const router = useRouter()
  const search = () => {
    if (value.trim() !== '') router.push(`/search?search=${value}`)
    setValue('')
  }
  const qty = useAppSelector(cartTotalQty)


  return (
    <div className="fixed top-0 left-0 border-b-2 bg-white z-[500000000000000]  w-full">
      <div className=" navWrapper flex items-center justify-between h-24 ">
        <Link href={'/'} className="flex gap-[2px]">
          {Logo.map((el, key) => (
            <p key={key} className={` font-bold text-2xl
                ${key === 0 && 'text-[red]'}
                ${key === 1 && 'text-[green]'}
                ${key === 2 && 'text-[blue]'}
                ${key === 3 && 'text-[pink]'}
                ${key === 4 && 'text-[purple]'}
                ${key === 5 && 'text-[orange]'}
                ${key === 6 && 'text-[cyan]'}
                ${key === 7 && 'text-black mx-1'}
                ${key > 7 && 'text-[#964B00]'}
                `}>{el}</p>
          ))}
        </Link>
        <div className="h-12 w-[400px] border-gray-500 rounded-full border-2 relative">
          <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="Search" className="w-full h-full outline-none px-5 bg-transparent" />
          <div onClick={search} className="absolute group top-1/2 -translate-y-1/2 right-0 h-full w-12 rounded-r-lg cursor-pointer grid place-content-center">
            <BiSearch size={20} className="duration-300 group-hover:scale-125 group-active:scale-100" />
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex items-center text-13 duration-300 hover:text-blue-500 cursor-pointer font-semibold gap-2">
            <IoCallOutline size={25} />
            <p>Contact</p>
          </div>
          <div className="h-[22.5px] w-[2px] bg-gray-300"></div>
          <Link href={'/cart'} className={`flex items-center text-13 duration-300 hover:text-blue-500 cursor-pointer font-semibold gap-2  ${qty > 0 && ""}`}>
            <div className={`relative `}>
              <BsCart size={25} />
              <div className={`h-5 text-[11px] w-5 rounded-full  bg-rose-500  grid place-content-center absolute -top-1 -right-1 duration-500 ${qty > 0 ? "opacity-100 visible scale-100" : "scale-[3] invisible opacity-0"}`}>
                <p className="duration-300 text-white">{qty}</p>
              </div>
            </div>
            <p>Cart</p>
          </Link>
          <div className="flex items-center text-13 duration-300 hover:text-blue-500 cursor-pointer font-semibold gap-2">
            <BiUser size={25} />
            <p>Account</p>
          </div>


        </div>
      </div>
      <div className="border-y-2 h-14">
        <div className="navWrapper flex justify-between h-full items-center ">
          {links.map((elem, key) => (
            <Link href={'/search'} key={key} className="">
              <p className=" cursor-pointer text-13 font-semibold duration-300 hover:text-blue-600">{elem}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
