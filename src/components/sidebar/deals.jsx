import { getHotDeals } from "../../functions/functions"
import Template from "./templateCard"
import useView from "../../hooks/useView"
import ViewMoreBtn from "./view_more_btn"

export default function Deals({products}){

    const hotDeals = getHotDeals(products)

    const {brands: deals, viewMore, toggleView} = useView(hotDeals)

    return(
        <Template heading='hot deals' headingCase="capitalize">
            <ul>
                {
                    deals.map((deal, index) => (
                        <li key={index} className="flex items-center justify-between capitalize text-lg font-normal my-4 cursor-pointer hover:bg-gray-200 px-6 py-2">
                            <span>{deal.brand}</span>
                            <span>{deal.qty}</span>
                        </li>
                    ))
                }
            </ul>
            <ViewMoreBtn viewMore={viewMore} toggleView={toggleView}/>
        </Template>
    )
}