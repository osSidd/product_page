import { useContext } from "react"
import { ProductContext } from "../context/productContext"

export default function useProductContext(){
    
    const {state, dispatch} = useContext(ProductContext)

    return {state, dispatch}
}