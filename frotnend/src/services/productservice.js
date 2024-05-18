import axios from "axios"

const BASE_URL = "http://localhost:5000/api"

export const addProducts = async (data) => {
    const response = await axios.post(`${BASE_URL}/products/create`, data);
    return response
}


export const getProducts = async () => {
    const response = await axios.get(`${BASE_URL}/products`);
    return response
}



export const addtoCart = async (data) => {
    const response = await axios.post(`${BASE_URL}/carts/add`,data);
    return response
}

export const getCart = async () => {
    const response = await axios.get(`${BASE_URL}/carts`);
    return response
}


export const applyCoupons = async (data) => {
    const response = await axios.post(`${BASE_URL}/coupons/apply`,data);
    return response
}