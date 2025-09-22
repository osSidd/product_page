import { Link } from 'react-router-dom'

export default function Cart({cart}){
    return(
        <Link to='/cart' href="" className='w-2/12 flex items-center gap-1.5 justify-end'>
            <img className='w-6 h-auto' src='./cart.svg' alt="cart icon" />
            <div className='flex items-center gap-1'>
                <span className=' capitalize text-xl font-normal'>items</span>
                <span className=' capitalize text-xl font-normal'>&#36;{cart}</span>  
            </div>
        </Link>
    )
}