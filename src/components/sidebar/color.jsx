import Template from "./templateCard";
import { getColors } from "../../functions/functions";
import useView from "../../hooks/useView";
import ViewMoreBtn from "./view_more_btn";

export default function Color({products, productColor, toggleColor}){

    const productColors = getColors(products)
    const {brands: colors, viewMore, toggleView} = useView(productColors)

    return(
        <Template heading='color'>
            <ul className="flex gap-3 items-center justify-center flex-wrap mb-4 px-6">
                {
                    colors.map(color => (
                        <li 
                            key={color} 
                            className={`cursor-pointer w-7 h-7 hover:bg-gray-200 rounded-full ${productColor.includes(color) ? 'bg-gray-300' : 'bg-gray-100'} relative`}
                            onClick={() => toggleColor(color)}
                        >
                            <span style={{backgroundColor: color}} className="absolute top-1 left-1 w-5 h-5 block rounded-full"></span>
                        </li>
                    ))
                }
            </ul>
            <ViewMoreBtn viewMore={viewMore} toggleView={toggleView}/>
        </Template>
    )
}