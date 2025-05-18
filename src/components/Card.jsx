import { Button } from "./Button";
import { useCart } from "../context/CartContext";
export const Card = ({item}) => {
  const { total } = useCart(); 

  const image_path = item.image_path 
  const default_url = "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg";
  const base_url = image_path ? image_path :default_url;

  const handleProduct = () => {
    console.log(total)
  }
  return (
    <>
      <div class="max-w-sm m-1 bg-white rounded-lg shadow-sm hover:shadow-xl ">
        <a href="#">
          <img class="w-full h-48 object-cover rounded-t-lg" src={base_url} alt="Item Image" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              {item.name}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {item.discription}
          </p>
          <div className="flex justify-between">
            <Button>See more</Button>
            <Button customFunction={handleProduct}> Add To Cart </Button>
          </div>
        </div>
      </div>
    </>
  );
}
