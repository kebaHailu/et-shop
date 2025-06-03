import { CartCard } from "../components/CartCard"
import { useSelector } from "react-redux";
export const Cart = () => {
  const cart = useSelector(state => state.cartState.cartList);
  const total = useSelector(state => state.cartState.total)
  console.log(total)
  return (
    <main>
      <section className="mx-w-8xl mx-auto py-7">
        <h1 className="text-2xl p-4 font-bold">Your Cart List - ${total}</h1>
        <div className="flex flex-wrap   justify-center sm_screen:justify-center">
          {cart && cart.map((item) => <CartCard key={item.id} item={item} />)}
        </div>
      </section>
    </main>
  );
}
