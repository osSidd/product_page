import { getBrandNQty } from "../../functions/functions"

import Template from "./templateCard"
import useView from "../../hooks/useView"
import ViewMoreBtn from "./view_more_btn"

export default function Brand({products}){

    const productBrands = getBrandNQty(products)
    const {brands, viewMore, toggleView} = useView(productBrands)

    return(
        <Template heading='brand'>
            <ul>
                {
                    brands.map((brand, index) => (
                        <li key={index} className="flex items-center justify-between text-lg font-normal my-4 cursor-pointer hover:bg-gray-200 px-6 py-2">
                            <span className="capitalize">{brand.brand}</span>
                            <span>{brand.qty}</span>
                        </li>
                    ))
                }
            </ul>
            <ViewMoreBtn viewMore={viewMore} toggleView={toggleView}/>
        </Template>
    )
}