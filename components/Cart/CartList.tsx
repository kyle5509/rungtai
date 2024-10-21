'use client'
import { useAppSelector } from "@/redux/Store/hook";
import Cart from "./Cart";
import { cartItems } from "@/redux/Slice/cart";

export default function CartList() {
    const store = useAppSelector(cartItems)
  return (
    <div className="space-y-7">
        {store.cart.map((product: any) => (
            <Cart product={product}/>
        ))}
    </div>
  )
}
