import heroImg from '../../assets/hero_img.png'

export default function HeroBanner(){
    return (
        <section className='flex items-center justify-between bg-blue-400 pr-6 pl-14 pb-6 pt-24'>
            <div className='w-5/12'>
                <h2 className=' text-3xl font-medium text-white'>Adidas Men Running Sneakers</h2>
                <p className=' text-sm font-normal text-white'>Performance and design. Taken right to the edge.</p>
                <a className='uppercase text-sm text-white font-semibold block mt-10' href="">shop now</a>
            </div>
            <img className=' w-6/12' src={heroImg} alt="hero image running sneakers" />
        </section>
    )
}