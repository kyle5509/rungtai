import CartList from "./CartList";
import Summary from "./Summary";

export default function Base() {
  return (
    <div className="p-4">
      <div className="grid wrapper bg-white gap-5 grid-cols-[1fr_auto]">
        <div className="pb-5">
          <p className="font-semibold py-4 bg-white px-2 text-2xl mb-2">Shopping Cart (1)</p>
          <CartList />
        </div>
        <Summary />
      </div>
    </div>
  )
}
