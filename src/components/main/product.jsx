import ProductCard from "./product_card";

export default function Products(){
    return(
        <section className="grid grid-cols-3 gap-x-12 gap-y-8 mt-6">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </section>
    )
}