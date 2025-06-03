import { Button } from "./Button";
import { add, remove } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export const Card = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartState.cartList);

  const image_path = item.image_path;
  const default_url =
    "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg";
  const base_url = image_path ? image_path : default_url;

  const handleCart = (product) => {
    if (inCart) {
      dispatch(remove(product));
    } else {
      dispatch(add(product));
    }
  };

  const inCart = cart.some((cartItem) => cartItem.id === item.id);

  return (
    <>
      <div
        className={`w-72 h-96 m-1 ${
          inCart ? "bg-red-100" : "bg-white"
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
          <div className="flex justify-between items-start h-20">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3 flex-1 mr-2">
              {item.discription}
            </p>
            <p className="mb-3 font-bold text-right text-orange-700 whitespace-nowrap">
              ${item.price}
            </p>
          </div>
          <div className="flex justify-center mt-auto">
            <Button customFunction={() => handleCart(item)}>
              {inCart ? "Remove from Cart" : "Add To Cart"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
