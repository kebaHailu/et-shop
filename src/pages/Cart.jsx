import { useCart } from "../context/CartContext"

export const Cart = () => {
  const {total} = useCart();
  console.log(total)
  return (
    <div>Cart</div>
  )
}
