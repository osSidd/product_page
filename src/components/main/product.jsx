import ProductCard from './product_card'

export default function Products({products, view, sidebarView}){

    if(!products || !products.length) return <div className='text-center text-2xl mt-32'>No products</div>

    return(
        <section className={`${view === 'grid' ? (sidebarView ? 'grid grid-cols-3' :  'grid grid-cols-4') : null} gap-x-12 gap-y-8 mt-6`}>
            {
                products.map(product => (
                    <ProductCard product={product} view={view} key={product.id}/>
                ))
            }
        </section>
    )
}