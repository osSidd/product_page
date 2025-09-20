import { createContext, useReducer } from "react"
import products from '../static/products.json'

export const ProductContext = createContext()

function reducer(state, action){
    switch(action){
        case 'GET_ALL_PRODUCTS':
            return products
    }
}

export default function ProductContextProvider({children}){
    
    const [state, dispatch] = useReducer(reducer, {
        products: products
    })
    
    return (
        <ProductContext.Provider value={{state, dispatch}}>
            {children}
        </ProductContext.Provider>
    )
}