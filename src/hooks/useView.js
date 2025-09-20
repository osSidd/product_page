import { useState } from "react"

export default function useView(products){

    const [brands, setBrands] = useState(products.slice(0,6))
    const [viewMore, setViewMore] = useState(true)

    function toggleView(){
        if(viewMore){
            setBrands(products)
        }
        else{
            setBrands(products.slice(0, 6))
        }
        setViewMore(prev => !prev)
    }

    return {
        brands,
        viewMore,
        toggleView,
    }
}