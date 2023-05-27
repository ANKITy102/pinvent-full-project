import {createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import productService from './productService';
import { toast } from 'react-toastify';

const initialState = {
    product: null,
    products: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message:"",
}

//Create New Product
export const createProduct = createAsyncThunk(
    "products/create",
    async(formData, thunkAPI)=>{
        try{
            return await productService.createProduct(formData);
        }catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            console.log(message);
            return thunkAPI.rejectWithValue(message);
        }
    }
)
//Now the above request can have three state pending, success, error
// to capture all of the states, we need to head over to our extra reducers.


const productSlice = createSlice({
    name: "product",
    initialState,
    reducers:{
        CALC_STORE_VALUE(state,value){
            console.log("store value")
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(createProduct.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(createProduct.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            console.log(action.payload);
            state.products.push(action.payload);
            toast.success("Product added successfully");
        })
        .addCase(createProduct.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            toast.error(action.payload);
        })
    }
});

export const {CALC_STORE_VALUE} = productSlice.actions

export const selectIsLoading = (state) =>{
    return state.product.isLoading;
}

export default productSlice.reducer