import { getPriceRange } from "../../functions/functions";
import Template from "./templateCard";

export default function Prices({products}){

    const {min, max} = getPriceRange(products)

    return(
        <Template heading='prices'>
            <div className="px-6">
                <div className="flex items-center justify-between my-2">
                    <span className="capitalize">ranger&#58;</span>
                    <span>&#36;{min} - &#36;{max}</span>
                </div>
                <input type="range" name="" min={min} max={max} step={2} id="" />
            </div>
        </Template>

    )
}