import img from '../../assets/hero_img.png'

export default function ProductCard(){
    return (
        <article className='text-center shadow relative'>
            <img className='bg-gray-100 px-6 py-12' src={img} alt="" />
            <div className='mt-2 mb-4 px-8'>
                <h2 className='text-lg font-bold'>Nike Air Max 270 React</h2>
                <p className='mt-1'>rating</p>
                <div className='mt-1 flex items-center justify-between'>
                    <span className='font-bold text-lg text-blue-400'>&#36;299.43</span>
                    <div>
                        <span className='text-sm font-normal line-through'>&#36;542.22</span>
                        <span className='ml-2 text-red-400 text-sm font-bold'>24&#37; off</span>
                    </div>
                </div>
            </div>
            <span className='uppercase bg-red-400 font-normal text-lg text-white px-4 py-1 absolute top-0 left-0'>hot</span>
        </article>
    )
}