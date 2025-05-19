import { Button } from "./Button";
import { useCart } from "../context/CartContext";
import { useEffect } from "react";

export const CartCard = ({ item }) => {
  const { cart, addToCart } = useCart();

  const image_path = item.image_path;
  const default_url =
    "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg";
  const base_url = image_path ? image_path : default_url;

  const handleAddToCart = (product) => {
    addToCart(product);
  };
  const inCart = cart.some((cartItem) => cartItem.id === item.id);

  useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]);

  return (
    <>
      <div
        className={`max-w-sm m-1 ${
          inCart ? "bg-gray-100" : "bg-white"
        } rounded-lg shadow-sm hover:shadow-xl`}
      >
        <a href="#">
          <img
            className="w-full h-48 object-cover rounded-t-lg"
            src={base_url}
            alt="Item Image"
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {item.name}
            </h5>
          </a>
          <div className="flex justify-between">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {item.discription}
            </p>
            <p className="mb-3 font-bold text-right text-orange-700 ">
              ${item.price}
            </p>
          </div>
          <div className="flex justify-between">
            <Button>See more</Button>
            <Button customFunction={() => handleAddToCart(item)}>
              {inCart ? "Remove item" : "Add To Cart"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
