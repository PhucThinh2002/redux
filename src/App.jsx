import React from "react";
import ViTien from "./BT_ViTien/viTien";
import ReactForm from "./Form/ReactForm";
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import ProductLayoutComponent from "./ProductManagement/ProductLayoutComponent";
import ListProduct from "./ProductManagement/ListProduct";
import CreateProductComponent from "./ProductManagement/CreateProductComponent";
import UpdateProductComponent from "./ProductManagement/UpdateProductComponent";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="form" element={<ReactForm/>}></Route>
        <Route path="vitien" element={<ViTien/>}></Route>

        <Route path="/product-management" element={<ProductLayoutComponent />}>
          <Route index element={<ListProduct />} />
          <Route path="create-product" element={<CreateProductComponent />} />
          <Route path="update-product" element={<UpdateProductComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};
export default App