import img from '../../assets/hero_img.png'
import { getRatingArr } from '../../functions/functions'

export default function ProductCard({product, view, cart, addToCart}){

    const ratings = getRatingArr(product.ratingValue)

    return (
        <article className={`text-center shadow relative cursor-pointer ${view === 'list' ? 'flex items-center mb-4' : null}`}>
            <img className={`bg-gray-100 px-6 py-12 ${view === 'list' ? 'w-64' : null}`} src={product.imageUrl ? product.imageUrl : img} alt="" />
            <div className='mt-2 mb-4 px-8'>
                <h2 className='text-lg font-bold'>{product.name}</h2>
                <p className='mt-1 flex items-center justify-center'>
                    {
                        ratings.map(rate => (
                            rate > 4 && rate < 5 ? <img className='w-5 h-5' alt='rating' src='./half_star.svg'/> : <img className='w-5 h-5' key={rate} alt='rating' src='./star.svg'/>
                        ))
                    }
                </p>
                <div className='mt-1 flex items-center justify-between'>
                    <span className='font-bold text-lg text-blue-400'>&#36;{product.discountedPrice}</span>
                    <div>
                        <span className='text-sm font-normal line-through'>&#36;{product.price}</span>
                        <span className='ml-2 text-red-400 text-sm font-bold'>{product.discountPercent}&#37; off</span>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-x-2 mt-2'>
                    {
                        product.colors.map(color => (
                            <p key={color} style={{backgroundColor: color}} className='h-3 w-3 rounded-full'></p>
                        ))
                    }
                </div>
                <div className='flex items-center justify-center mt-4'>
                    <button onClick={() => addToCart(product.discountedPrice)} className='outline-none bg-yellow-200 hover:bg-yellow-100 rounded-2xl px-4 py-1 text-sm capitalize cursor-pointer'>add to cart</button>
                    {/* <button className='outline-none bg-teal-200 rounded-2xl px-2 py-1 text-sm capitalize cursor-pointer'>add to wishlist</button> */}
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