import useView from "../../hooks/useView";
import Brand from "./brand";
import Color from "./color";
import Deals from "./deals";
import Prices from "./price";
import ViewMoreBtn from "./view_more_btn";

export default function Sidebar({products}){

    const {viewMore, toggleView} = useView(products)

    return(
        <aside className="col-span-3">
            <Deals products={products}/>
            <Prices products={products}/>
            {!viewMore ? 
            <>
                <Color products={products}/>
                <Brand products={products}/>
            </> : null}
            <div className="uppercase cursor-pointer bg-gray-100 py-4 text-center text-xl font-medium">
                <ViewMoreBtn viewMore={viewMore} toggleView={toggleView}/>
            </div>
        </aside>
    )
}