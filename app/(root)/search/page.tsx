import FilterNav from "@/components/Search/FilterNav"
import Loading from "@/components/Search/Loading"
import ProductsList from "@/components/Search/ProductsList"
import Title from "@/components/Search/Title"

export default async function SearchPage() {
  const response = await fetch('https://dummyjson.com/products')
  const result = await response.json()
  const products = result.products

  return (
    <div className=" rounded-md shadow-md h-full wrapper grid grid-cols-[auto_1fr] gap-5">
      <FilterNav products={products} />
      <div className="">
        <div className="h-full p-4 bg-white rounded-md shadow-lg relative">
          <Title style="py-3" />
          <ProductsList />
          <Loading />
        </div>
      </div>

    </div>
  )
}
