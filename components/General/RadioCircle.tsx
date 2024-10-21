import { useState } from "react"
import { BsCheck } from "react-icons/bs"

type Props = {
    title: string
    style?: string
}

export const RadioCircle = ({ title, style }: Props) => {
    const [checked, setChecked] = useState(false)
    return (
        <div onClick={() => setChecked(!checked)} className={`flex duration-300 cursor-pointer group gap-2 items-center ${style}`}>
            <div className="h-5 w-5 rounded-full p-1 border group-hover:scale-90 duration-300 border-black">
                <div className={`w-full h-full rounded-full bg-red-500 duration-300 ${checked ? "bg-black" : " bg-transparent"}`}></div>
            </div>
            <p>{title}</p>
        </div>
    )
}
