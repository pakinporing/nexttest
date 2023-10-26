import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import dataProduct from '../assets/data/productData';

export interface ProductState {
    id: number
    productName: string
    productDetail:
    string
    productImg: any;
    price: number
}

export interface ProductSlice {
    products: ProductState[]
}

const initialState: ProductSlice = {
    products: dataProduct
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProducts: (state, action: PayloadAction<ProductState[]>) => {
            state.products = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { addProducts } = productSlice.actions

export default productSlice.reducer