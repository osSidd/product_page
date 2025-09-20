import ProductCard from './product_card'

export default function Products({products, view}){

    if(!products) return null

    return(
        <section className={`${view === 'grid' ? 'grid grid-cols-3 gap-x-12 gap-y-8' : null}  mt-6`}>
            {
                products.map(product => (
                    <ProductCard product={product} view={view} key={product.id}/>
                ))
            }
        </section>
    )
}