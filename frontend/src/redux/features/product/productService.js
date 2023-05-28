import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api/product`;


//Create New Product
 const createProduct = async (formData)=>{
    const response  = await axios.post(API_URL, formData)
    return response.data
}

//Get all products;
const getProducts = async() =>{
    console.log("get product route")
    const response = await axios.get(API_URL);
    return response.data;
}

const productService = {
    createProduct,
    getProducts
}

export default productService;