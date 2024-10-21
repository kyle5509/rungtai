import About from "@/components/Details/About"
import BuyCart from "@/components/Details/BuyCart"
import Description from "@/components/Details/Description"
import Loading from "@/components/Details/Loading";
import Photos from "@/components/Details/Photos"

export default async function Details({params}: {params: {id: string}}) {
  const response = await fetch(`https://dummyjson.com/products/${params.id}`)
  const product = await response.json()

  return (
    <div className="relative">
      <div className="wrapper h-full grid gap-4  grid-cols-[1fr_auto]">
        <div className="h-full p-4 relative ">
          <div className="grid gap-8 grid-cols-2">
            <Photos images={product?.images} />
            <About product={product}/>
          </div>
          <Description />
        </div>
        <BuyCart price={product?.price} product={product} />
      </div>
      <Loading />
    </div>
  )
}
