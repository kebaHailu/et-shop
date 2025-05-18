import {Routes, Route } from "react-router-dom";
import {Cart, CardList, ShopDetail, PageNotFound} from "../pages";

export const AllRoutes = () => {
  return (
    <div className="main-content">
        <Routes>
            <Route path="/" element={<CardList/>} /> 
            <Route path="cart" element={<Cart/>} /> 
            <Route path="item/:id" element={<ShopDetail />} /> 
            <Route path="*" element={<PageNotFound />} /> 
            

        </Routes>
    </div>
  )
}
