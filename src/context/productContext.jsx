import { createContext, useReducer } from "react"
import products from '../static/products.json'

export const ProductContext = createContext()

function reducer(state, action){
    switch(action.type){
        case 'SET_DEAL':
            const filterdeals = {...state.filters, deals: action.payload} 
            return {
                ...state,
                filters: filterdeals,
                products: applyFilters(state.originalProductList, filterdeals)
            }

        case 'SET_BRAND':
            const filterbrands = {...state.filters, brands: action.payload} 
            return {
                ...state,
                filters: filterbrands,
                products: applyFilters(state.originalProductList, filterbrands)
            }

        case 'SET_COLOR':
            const filterColors = {...state.filters, colors: action.payload} 
            return {
                ...state,
                filters: filterColors,
                products: applyFilters(state.originalProductList, filterColors)
            }
        
        case 'SET_PRICE':
            const filterPrice = {...state.filters, price: action.payload}
            return {
                ...state,
                filters: filterPrice,
                products: applyFilters(state.originalProductList, filterPrice)
            }

        default:
            return state
    }
}

function applyFilters(products, filters){
    return products.filter(product => {
        
        if(filters.deals.length){
            if(!product.isHot) return false
            if(!filters.deals.includes(product.brand)) return false
        }

        if(filters.brands.length)
            if(!filters.brands.includes(product.brand)) return false

        if(filters.colors.length){
            let flag = false
            for(let i = 0; i< product.colors.length; i++){
                if(filters.colors.includes(product.colors[i])) flag = true
            }
            if(!flag) return false
        }

        if(!(product.discountedPrice >= filters.price.min && product.discountedPrice <= filters.price.max)) return false
    
        return true
        

    })
}

export default function ProductContextProvider({children}){
    
    const [state, dispatch] = useReducer(reducer, {
        products: products,
        originalProductList: products,
        filters: {deals: [], brands: [], colors: [], price: {min: 30, max: 350}}

    })
    
    return (
        <ProductContext.Provider value={{state, dispatch}}>
            {children}
        </ProductContext.Provider>
    )
}