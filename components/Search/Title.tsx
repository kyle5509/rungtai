import React from 'react'

type Props = {
    style?: string
}

export default function Title({ style }: Props) {
    return (
        <div className={`flex ${style}  border-b-2 mb-5 justify-between items-center ${style}`}>
            <div className="">
                <p className="text-2xl font-bold mb-1">Results</p>
                <p className="text-gray-600">5,223 Products Found</p>
            </div>
            <div className="">
            </div>
        </div>
    )
}
