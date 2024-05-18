import React from 'react'
import { Formik } from 'formik';
import styles from "./CreateProduct.module.css"
import { addProducts } from '../../services/productservice';

import { useNavigate } from "react-router-dom";


const Createproduct = () => {
    const navigate = useNavigate()

    const handleSubmit = async (data) => {
        try {
            await addProducts(data);
            alert("product addded")
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={styles.formContainer}>
            <h1>create product</h1>
            <Formik
                initialValues={{ name: '', price: '', type: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Required';
                    }
                    if (!values.price) {
                        errors.price = 'Required';
                    }
                    if (!values.type) {
                        errors.type = 'Required';
                    }
                    return errors;
                }}
                onSubmit={(values) => {
                    handleSubmit(values)
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit} className={styles.from}>
                        <h6>Name</h6>
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        {errors.name && touched.name && errors.name}
                        <h6>price</h6>
                        <input
                            type="number"
                            name="price"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.price}
                        />
                        {errors.price && touched.price && errors.price}


                        <label >type</label>
                        <select id="type" name="type" onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.type} >
                            <option value="regular">regular</option>
                            <option value="normal">normal</option>
                        </select>
                        {errors.type && touched.type && errors.type}

                        <button type="submit" disabled={isSubmitting}>
                            create
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default Createproduct
