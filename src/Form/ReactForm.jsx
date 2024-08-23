import { useFormik } from 'formik';
import * as yup from 'yup';
import React from "react";

const ReactForm = () => {
    const frmRegister = useFormik({
        initialValues: {
            username: '',
            email: '',
            gender: 'male',  // default to 'male'
            server: 'USA',    // default to 'USA'
            password: ''
        },
        validationSchema: yup.object({
            username: yup.string().required('Username is required'),
            email: yup.string()
                .required('Email is required')
                .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Email is invalid'),
            gender: yup.string().required('Gender is required'),
            server: yup.string().required('Country is required'),
            password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
        }),
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return (
        <div className="container">
            <div className="w-50 mx-auto card mt-2">
                <h3 className="text-center mt-4">
                    <b>User Registration</b>
                </h3>
                <form onSubmit={frmRegister.handleSubmit} className="card-body">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            className="form-control"
                            name="username"
                            id="username"
                            placeholder=""
                            value={frmRegister.values.username}
                            onChange={frmRegister.handleChange}
                            onBlur={frmRegister.handleBlur}
                        />
                        {frmRegister.touched.username && frmRegister.errors.username ? (
                            <p className='alert alert-danger my-1'>{frmRegister.errors.username}</p>
                        ) : null}
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="email">Email</label>
                        <input
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder=""
                            value={frmRegister.values.email}
                            onChange={frmRegister.handleChange}
                            onBlur={frmRegister.handleBlur}
                        />
                        {frmRegister.touched.email && frmRegister.errors.email ? (
                            <p className='alert alert-danger my-1'>{frmRegister.errors.email}</p>
                        ) : null}
                    </div>
                    <div className="form-group mt-2">
                        <div>Gender</div>
                        <label htmlFor="male" className="ms-2">Male</label>
                        <input
                            className="form-check-input mx-2"
                            name="gender"
                            type="radio"
                            id="male"
                            value="male"
                            checked={frmRegister.values.gender === 'male'}
                            onChange={frmRegister.handleChange}
                            onBlur={frmRegister.handleBlur}
                        />
                        <label htmlFor="female" className="ms-2">Female</label>
                        <input
                            className="form-check-input mx-2"
                            name="gender"
                            type="radio"
                            id="female"
                            value="female"
                            checked={frmRegister.values.gender === 'female'}
                            onChange={frmRegister.handleChange}
                            onBlur={frmRegister.handleBlur}
                        />
                        {frmRegister.touched.gender && frmRegister.errors.gender ? (
                            <p className='alert alert-danger my-1'>{frmRegister.errors.gender}</p>
                        ) : null}
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="server">Country</label>
                        <select
                            className="form-control"
                            name="server"
                            value={frmRegister.values.server}
                            onChange={frmRegister.handleChange}
                            onBlur={frmRegister.handleBlur}
                        >
                            <option value="USA">USA</option>
                            <option value="Canada">Canada</option>
                            <option value="UK">UK</option>
                            <option value="Australia">Australia</option>
                        </select>
                        {frmRegister.touched.server && frmRegister.errors.server ? (
                            <p className='alert alert-danger my-1'>{frmRegister.errors.server}</p>
                        ) : null}
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="password">Password</label>
                        <input
                            className="form-control"
                            name="password"
                            type="password"
                            id="password"
                            placeholder="Input password"
                            value={frmRegister.values.password}
                            onChange={frmRegister.handleChange}
                            onBlur={frmRegister.handleBlur}
                        />
                        {frmRegister.touched.password && frmRegister.errors.password ? (
                            <p className='alert alert-danger my-1'>{frmRegister.errors.password}</p>
                        ) : null}
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary mt-2 w-100">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReactForm;
