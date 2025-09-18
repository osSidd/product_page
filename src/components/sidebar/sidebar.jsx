import Brand from "./brand";
import Color from "./color";
import Deals from "./deals";
import Prices from "./price";

export default function Sidebar(){
    return(
        <aside className="col-span-3">
            <Deals/>
            <Prices/>
            <Color/>
            <Brand/>
            <div className="uppercase bg-gray-100 py-4 text-center text-xl font-medium">more</div>
        </aside>
    )
}