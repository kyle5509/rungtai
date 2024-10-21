import { useState } from "react"
import { BsCheck } from "react-icons/bs"

type Props = {
    title: string
    style?: string
}

export const RadioSquare = ({ title, style }: Props) => {
    const [checked, setChecked] = useState(false)
    return (
        <div onClick={() => setChecked(!checked)} className={`flex duration-300 cursor-pointer group gap-2 items-center ${style}`}>
            <div className={`h-5 w-5 border-2 group-active:scale-90 duration-300 place-content-center grid text-lg text-white ${checked ? "bg-black border-gray-600" : 'bg-white'}`}>
                <BsCheck />
            </div>
            <p>{title}</p>
        </div>
    )
}
