import cart from '../../assets/cart.svg'

export default function Cart(){
    return(
        <a href="" className='w-2/12 flex items-center gap-1.5 justify-end'>
            <img className='w-6 h-auto' src={cart} alt="cart icon" />
            <div className='flex items-center gap-1'>
                <span className=' capitalize text-xl font-normal'>items</span>
                <span className=' capitalize text-xl font-normal'>&#36;0.00</span>  
            </div>
        </a>
    )
}