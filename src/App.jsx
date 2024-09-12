import React from "react";
import ViTien from "./BT_ViTien/viTien";
import ReactForm from "./Form/ReactForm";
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import ProductLayoutComponent from "./ProductManagement/ProductLayoutComponent";
import ListProduct from "./ProductManagement/ListProduct";
import CreateProductComponent from "./ProductManagement/CreateProductComponent";
import UpdateProductComponent from "./ProductManagement/UpdateProductComponent";
import HomePageMaster from "./MasterPage/HomePageMaster";
import HomePage from "./pages/HomePage";
import Crypto from "./Crypto/Crypto";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomePageMaster/>}>
          <Route index element={<HomePage />}></Route>
          <Route path="form" element={<ReactForm/>}></Route>
          <Route path="vitien" element={<ViTien/>}></Route>
        </Route>

        <Route path="admin" element={<ProductLayoutComponent />}>
          <Route index element={<ListProduct />} />
          <Route path="create-product" element={<CreateProductComponent />} />
          <Route path="update-product">
            <Route path=':id' element={<UpdateProductComponent/>}></Route>
          </Route>
          <Route path="crypto" element={<Crypto/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
};
export default App