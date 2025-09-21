import { useState } from "react";
import useView from "../../hooks/useView";
import Brand from "./brand";
import Color from "./color";
import Deals from "./deals";
import Prices from "./price";
import ViewMoreBtn from "./view_more_btn";

export default function Sidebar({products, dispatch}){

    const {viewMore, toggleView} = useView(products)

    const [deals, setDeals] = useState([])
    const [brands, setBrands] = useState([])
    const [colors, setColors] = useState([])

    function toggleDeal(val){
        if(deals.includes(val)){

            const arr = [...deals]
            arr.splice(deals.indexOf(val),1)
            
            dispatch({
                type: 'SET_DEAL',
                payload: arr,
            })
            setDeals(arr)
        }else{
            dispatch({
                type: 'SET_DEAL',
                payload: deals.concat(val),
            })
            setDeals(prev => prev.concat(val))
        }
    }

    function toggleBrand(val){
         if(brands.includes(val)){

            const arr = [...brands]
            arr.splice(brands.indexOf(val),1)
            
            dispatch({
                type: 'SET_BRAND',
                payload: arr,
            })
            setBrands(arr)
        }else{
            dispatch({
                type: 'SET_BRAND',
                payload: brands.concat(val),
            })     
            setBrands(prev => prev.concat(val))
        }       
    }

    function toggleColor(val){
         if(colors.includes(val)){

            const arr = [...colors]
            arr.splice(colors.indexOf(val),1)
            
            dispatch({
                type: 'SET_COLOR',
                payload: arr,
            })
            setColors(arr)
        }else{
            dispatch({
                type: 'SET_COLOR',
                payload: colors.concat(val),
            })
            setColors(prev => prev.concat(val))
        }    
    }

    return(
        <aside className="col-span-3">
            <Deals products={products} deals={deals} toggleDeal={toggleDeal}/>
            <Prices products={products}/>
            {!viewMore ? 
            <>
                <Color products={products} productColor={colors} toggleColor={toggleColor}/>
                <Brand brands={brands} toggleBrand={toggleBrand} products={products}/>
            </> : null}
            <div className="uppercase cursor-pointer bg-gray-100 py-4 text-center text-xl font-medium">
                <ViewMoreBtn viewMore={viewMore} toggleView={toggleView}/>
            </div>
        </aside>
    )
}