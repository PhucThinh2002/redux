import React from "react";
import "../assets/scss/ListProduct.scss";
import { Navigate, useNavigate } from "react-router-dom";

const products = [
  {
    id: 123,
    name: "Product 1",
    price: 4990,
    type: "A",
    img: "https://picsum.photos/id/1/200/200",
  },
  {
    id: 456,
    name: "Product 2",
    price: 3990,
    type: "B",
    img: "https://picsum.photos/id/2/200/200",
  },
  {
    id: 789,
    name: "Product 3",
    price: 2990,
    type: "C",
    img: "https://picsum.photos/id/3/200/200",
  },
];

const ListProduct = () => {
    const navigate = useNavigate();

    const handleNewProduct = () => {
    navigate("/product-management/create-product");
  };

    // const handleEdit = (productId) => {
    //     navigate(`/product-management/update-product/${productId}`)
    // }
    const handleEdit = () => {
        navigate("/product-management/update-product")
    }
  return (
    <div className="list-product">
      <div className="header">
        <span>Product &gt; List</span>
        <button className="btn-new-product" onClick={handleNewProduct}>New Product</button>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search products" />
        <button className="btn-search">Search</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>NAME</th>
            <th>IMG</th>
            <th>PRICE</th>
            <th>TYPE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{product.name}</td>
              <td>
                <img src={product.img} alt={product.name} width="50" />
              </td>
              <td>{product.price}</td>
              <td>{product.type}</td>
              <td>
                <button className="btn-action" onClick={handleEdit}>Edit</button>
                <button className="btn-action">Delete</button>
                <button className="btn-action">View detail</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
          <td colSpan="6">
              <div className="d-flex justify-content-between align-items-center p-2">
                <span className="results">
                  Showing 1 to {products.length} of {products.length} results
                </span>
                <span className="per-page">
                  Per page: 10 <i className="fa fa-angle-down"></i>
                </span>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ListProduct;
