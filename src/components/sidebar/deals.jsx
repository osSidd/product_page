import { getHotDeals } from "../../functions/functions"
import Template from "./templateCard"
import useView from "../../hooks/useView"
import ViewMoreBtn from "./view_more_btn"

export default function Deals({products, deals, toggleDeal}){

    const hotDeals = getHotDeals(products)

    const {brands: productArr, viewMore, toggleView} = useView(hotDeals)

    return(
        <Template heading='hot deals' headingCase="capitalize">
            <ul>
                {
                    productArr.map((product, index) => (
                        <li 
                            key={index} 
                            onClick={() => toggleDeal(product.brand)}
                            className={`flex items-center justify-between capitalize text-lg font-normal my-4 cursor-pointer ${deals.includes(product.brand) ? 'bg-gray-200' : 'hover:bg-gray-200'} px-6 py-2`}
                        >
                            <span>{product.brand}</span>
                            <span>{product.qty}</span>
                        </li>
                    ))
                }
            </ul>
            <ViewMoreBtn viewMore={viewMore} toggleView={toggleView}/>
        </Template>
    )
}