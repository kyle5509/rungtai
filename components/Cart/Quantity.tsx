import { Dispatch, SetStateAction } from "react";

type Props = {
    qty: string
    product: any
    setQty: Dispatch<SetStateAction<string>>
    height?: string
    width?: string
}



export default function Quantity({qty, setQty, product, height, width}: Props) {
    return (
        <div className="flex mt-3 items-center gap-3">
            <div className="h-9 border-2 w-20 rounded-full border-gray-500 bg-gray-50 cursor-pointer overflow-hidden relative">
                <select style={{height: `${height}`, width: `${width}`}} value={`${product?.quantity}`} onChange={(e) => setQty(e.target.value)} name="" className="w-full font-semibold grid place-content-center bg-transparent cursor-pointer rounded-full h-full px-3 outline-none ">
                    {[1, 2, 3, 4, 5].map((el, key) => (
                        <option value={`${(el)}`}>{el}</option>
                    ))}
                </select>

            </div>
        </div>)
}
