import { ProductTypes } from "../Actions/ActionTypes"

const initialValue = {
    allProducts : [],
    cart : []
}

// const {ALL_PRODUCTS} = ProductTypes;
export const ProductReducer = (state=initialValue,{type,payload}) => {
    switch (type) {
        case ProductTypes.ALL_PRODUCTS :
            return {...state, allProducts : [...state.allProducts,...payload]}

        case ProductTypes.ADD_CART_PRODUCT :
            const existingProduct = state.cart.find(
                (item) => item.id === payload.id
            );
            if (existingProduct) {
            return {...state };
            }
            return {...state, cart:[...state.cart,payload]}   

        case ProductTypes.REMOVE_CART_PRODUCT :
            return {...state, cart:[...state.cart.filter((item)=>item.id !== payload.id)]}  

        default :
            return state;
    }
}