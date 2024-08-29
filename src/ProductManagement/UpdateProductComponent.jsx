import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditProduct = () => {
    const param = useParams();//lấy tham số id trên url
    const {id} = param
    const navigate = useNavigate();
    const prodEdit = useFormik({
        initialValues:{
            id:'',
            name:'',
            price:'',
            description:'',
            img:'',
            type:'APPLE',
            delete:false,
        },
        onSubmit: async (value) => {
            console.log(value);
            //gọi api update
            const res = await axios.put(`https://apitraining.cybersoft.edu.vn/api/ProductApi/update/${value.id}`,value);
            alert('update thành công')
            navigate('../../')
        }
    })
    const getProductById = async () => { 
        const res = await axios.get(`https://apitraining.cybersoft.edu.vn/api/ProductApi/get/${id}`);
        console.log(res.data);
        prodEdit.setValues(res.data);
    }
    useEffect(()=>{
        getProductById();
    },[id])
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              Edit Product
            </div>
            <div className="card-body">
              <form onSubmit={prodEdit.handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="id" className="form-label">ID</label>
                  <input value={prodEdit.values.id} onChange={prodEdit.handleChange }type="text" className="form-control" name="id" disabled />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input value={prodEdit.values.name} onChange={prodEdit.handleChange } type="text" className="form-control" name="name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">Price</label>
                  <input value={prodEdit.values.price} onChange={prodEdit.handleChange } type="text" className="form-control" name="price" />
                </div>
                <div className="mb-3">
                  <label htmlFor="imageUrl" className="form-label">Image URL</label>
                  <input value={prodEdit.values.img} onChange={prodEdit.handleChange } type="text" className="form-control" name="img" />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input value={prodEdit.values.description} onChange={prodEdit.handleChange } type="text" className="form-control" name="description" />
                </div>
                <div className="mb-3">
                  <label htmlFor="type" className="form-label">Type</label>
                  <select value={prodEdit.values.type} onChange={prodEdit.handleChange } className='form-control' name="type">
                    <option value={'SONY'}>SONY</option>
                    <option value={'APPLE'}>APPLE</option>
                    <option value={'SAMSUNG'}>SAMSUNG</option>
                    <option value={'XIAOMI'}>XIAOMI</option>
                  </select>
                </div>
                <div className="mb-3 form-check">
                  <input value={prodEdit.values.id} onChange={prodEdit.handleChange } type="checkbox" className="form-check-input" name="deleted" />
                  <label className="form-check-label" htmlFor="deleted">Deleted</label>
                </div>
                <button type="submit" className="btn btn-warning">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProduct