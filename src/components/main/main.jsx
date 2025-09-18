import FilterSection from "./filter";
import HeroBanner from "./hero";
import Pagination from "./pagination";
import Products from "./product";

export default function Main(){
    return(
        <main className="col-span-9">
            <HeroBanner/>
            <FilterSection/>
            <Products/>
            <Pagination/>
        </main>
    )
}