import { useEffect, useState } from "react";

import FilterSection from "./filter";
import HeroBanner from "./hero";
import Pagination from "./pagination";
import Products from "./product";

import { sortProducts } from "../../functions/functions";

export default function Main({products}){

    const [productQty, setProductQty] = useState(12)
    const [sortValue, setSortValue] = useState('name')
    const [view, setView] = useState('grid')
    const [pageNo, setPageNo] = useState(1)
    const [productArr, setProductArr] = useState(null)

    useEffect(() => {

        const sortedArr = sortProducts(products, sortValue)
        const slicedArr = sliceProductsArr(sortedArr)

        setProductArr(slicedArr)

    }, [productQty, pageNo])

    function toggleProductQty(e){
        const val = e.target.value
        setProductQty(val)
        setPageNo(1)
    }

    function toggleView(val){
        setView(val)
    }

    function toggleSort(e){
        const val = e.target.value
        setSortValue(val)

        setProductArr(prev => sortProducts(prev, val))
    }

    function togglePageNo(val){
        setPageNo(val)
    }

    function sliceProductsArr(products){
        return products.slice((productQty*(pageNo - 1)), (productQty * pageNo))
    }   

    return(
        <main className="col-span-9">
            <HeroBanner/>
            <FilterSection 
                toggleView={toggleView} 
                products={products} 
                productQty={productQty} 
                view={view}
                sortValue={sortValue}
                toggleSort={toggleSort}
                toggleProductQty={toggleProductQty}
            />
            <Products 
                view={view} 
                products={productArr}
            />
            <Pagination 
                productQty={productQty} 
                products={products}
                pageNo={pageNo}
                togglePageNo={togglePageNo}
            />
        </main>
    )
}