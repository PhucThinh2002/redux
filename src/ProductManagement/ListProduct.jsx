import React, { useEffect, useState } from "react";
import "../assets/scss/ListProduct.scss";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

const ListProduct = () => {
  const [arrProduct, setArrProduct] = useState([]);
  const [search, setSearch] = useSearchParams('');
  const kw = search.get('prodName');
  
  const handleChange = (e) => {
    setSearch({
      prodName:e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const getAllProductApi = async () =>{
    let url = '';
    if(kw){
      url=`https://apitraining.cybersoft.edu.vn/api/ProductApi/getall?keyword=${kw}`
    }else{
      url=`https://apitraining.cybersoft.edu.vn/api/ProductApi/getall`
    }
    const res = await fetch(url)
    const data = await res.json();
    setArrProduct(data);
    console.log(data)
  }
  useEffect(() => {
    getAllProductApi();
  },[kw])
  return (
    <div className="list-product">
      <div className="header">
        <span>Product &gt; List</span>
        <NavLink to={'./create-product'} className="btn-new-product text-decoration-none">New Product</NavLink>
      </div>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input type="text" placeholder="Search products" onInput={handleChange}/>
        <button className="btn-search" type={"submit"}>Search</button>
      </form>
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
          {arrProduct.map((item) => (
            <tr key={item.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{item.name}</td>
              <td>
                <img src={item.img} alt={item.name} width="50" />
              </td>
              <td>{item.price}</td>
              <td>{item.type}</td>
              <td>
                <NavLink to={`./update-product/${item.id}`} className="btn btn-sm btn-action">Edit</NavLink>
                <button className="btn-action" onClick={async (e) =>{
                  if(window.confirm('Bạn có muốn xóa không ?')){
                    //api xóa
                    const res = await axios.delete(`https://apitraining.cybersoft.edu.vn/api/ProductApi/delete/${item.id}`);
                    //sau khi xóa thành công thì load lại api get all product
                    getAllProductApi();
                  }
                }}>Delete</button>
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
                  Showing 1 to {arrProduct.length} of {arrProduct.length} results
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
