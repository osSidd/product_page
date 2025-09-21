import img from '../../assets/hero_img.png'

export default function ProductCard({product, view}){
    return (
        <article className={`text-center shadow relative cursor-pointer ${view === 'list' ? 'flex items-center mb-4' : null}`}>
            <img className={`bg-gray-100 px-6 py-12 ${view === 'list' ? 'w-64' : null}`} src={product.imageUrl ? product.imageUrl : img} alt="" />
            <div className='mt-2 mb-4 px-8'>
                <h2 className='text-lg font-bold'>{product.name}</h2>
                <p className='mt-1'>rating {product.ratingValue}</p>
                <div className='mt-1 flex items-center justify-between'>
                    <span className='font-bold text-lg text-blue-400'>&#36;{product.discountedPrice}</span>
                    <div>
                        <span className='text-sm font-normal line-through'>&#36;{product.price}</span>
                        <span className='ml-2 text-red-400 text-sm font-bold'>{product.discountPercent}&#37; off</span>
                    </div>
                </div>
                <div>
                    {
                        product.colors.map(color => (
                            <p key={color}>{color}</p>
                        ))
                    }
                </div>
            </div>
            {
                product.isHot ? 
                <span className='uppercase bg-red-400 font-normal text-lg text-white px-4 py-1 absolute top-0 left-0'>hot</span> :
                null
            }
        </article>
    )
}