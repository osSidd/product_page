import useView from "../../hooks/useView";
import Brand from "./brand";
import Color from "./color";
import Deals from "./deals";
import Prices from "./price";
import ViewMoreBtn from "./view_more_btn";

export default function Sidebar({products, filters, dispatch, sidebarView, toggleSidebarView}){

    const {viewMore, toggleView} = useView(products)

    const {deals, brands, colors, price} = filters

    function toggleDeal(val){
        if(deals.includes(val)){

            const arr = [...deals]
            arr.splice(deals.indexOf(val),1)
            
            dispatch({
                type: 'SET_DEAL',
                payload: arr,
            })
        }else{
            dispatch({
                type: 'SET_DEAL',
                payload: deals.concat(val),
            })
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
        }else{
            dispatch({
                type: 'SET_BRAND',
                payload: brands.concat(val),
            })     
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
        }else{
            dispatch({
                type: 'SET_COLOR',
                payload: colors.concat(val),
            })
        }    
    }

    function togglePrice(e){
        const {name, value} = e.target
        dispatch({
            type: 'SET_PRICE',
            payload: {
                ...price,
                [name]: +value
            }
        })
    }

    return(
        <aside className={` ${sidebarView ? "col-span-3" : "w-0 hidden overflow-hidden"}  relative`}>
            <Deals products={products} deals={deals} toggleDeal={toggleDeal}/>
            <Prices price={price} togglePrice={togglePrice}/>
            {!viewMore ? 
            <>
                <Color products={products} productColor={colors} toggleColor={toggleColor}/>
                <Brand brands={brands} toggleBrand={toggleBrand} products={products}/>
            </> : null}
            <div className="uppercase cursor-pointer bg-gray-100 py-4 text-center text-xl font-medium">
                <ViewMoreBtn viewMore={viewMore} toggleView={toggleView}/>
            </div>
            {/* <div className={`${sidebarView ? "top-0 right-0" : "top-0 right-0"} "absolute bg-gray-200 flex items-center justify-center cursor-pointer w-10 h-10"`}> */}
            <div className={`${sidebarView ? "top-0 right-0": "top-32 left-0"} " absolute bg-gray-200 flex items-center justify-center cursor-pointer p-2 w-12 h-12"`}>
                {sidebarView ? <img onClick={toggleSidebarView} className=" w-6 h-6" src="./collapse.svg" alt="collapse sidebar icon"/> : null}
            </div>
        </aside>
    )
}