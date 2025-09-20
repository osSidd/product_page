import Template from "./templateCard";
import { getColors } from "../../functions/functions";
import useView from "../../hooks/useView";
import ViewMoreBtn from "./view_more_btn";

export default function Color({products}){

    const productColors = getColors(products)
    const {brands: colors, viewMore, toggleView} = useView(productColors)

    return(
        <Template heading='color'>
            <ul className="flex gap-4 items-center justify-center flex-wrap mb-4 px-6">
                {
                    colors.map(color => (
                        <li key={color} style={{backgroundColor: color}} className='cursor-pointer w-6 h-6 rounded-full'></li>
                    ))
                }
            </ul>
            <ViewMoreBtn viewMore={viewMore} toggleView={toggleView}/>
        </Template>
    )
}