import ProductCard from './product_card'

export default function Products({products, view, sidebarView, cart, addToCart}){

    if(!products || !products.length) return <div className='text-center text-2xl mt-32'>No products</div>

    return(
        <section className={`${view === 'grid' ? (sidebarView ? 'grid md:grid-cols-3' :  'grid md:grid-cols-4') : null} gap-x-12 gap-y-8 mt-6`}>
            {
                products.map(product => (
                    <ProductCard 
                        product={product} 
                        view={view} key={product.id}
                        cart={cart}
                        addToCart={addToCart}
                    />
                ))
            }
        </section>
    )
}