'use client'
import Product from "../General/Product";
import { useAppSelector } from "@/redux/Store/hook";


export default function ProductsList() {
    const products = useAppSelector(store => store.products.products)
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-gray-50 gap-3">
            {products?.map((product: any, key: number) => (
                <Product product={product} />
            ))}
        </div>
    )
}
