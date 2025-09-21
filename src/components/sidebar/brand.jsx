import { getBrandNQty } from "../../functions/functions"

import Template from "./templateCard"
import useView from "../../hooks/useView"
import ViewMoreBtn from "./view_more_btn"

export default function Brand({products, brands, toggleBrand}){

    const productBrands = getBrandNQty(products)
    const {brands: productArr, viewMore, toggleView} = useView(productBrands)

    return(
        <Template heading='brand'>
            <ul>
                {
                    productArr.map((product, index) => (
                        <li 
                            key={index} 
                            className={`flex items-center justify-between text-lg font-normal my-4 cursor-pointer px-6 py-2 ${ brands.includes(product.brand) ?'bg-gray-200':'hover:bg-gray-200'}`}
                            onClick={() => toggleBrand(product.brand)}
                        >
                            <span className="capitalize">{product.brand}</span>
                            <span>{product.qty}</span>
                        </li>
                    ))
                }
            </ul>
            <ViewMoreBtn viewMore={viewMore} toggleView={toggleView}/>
        </Template>
    )
}