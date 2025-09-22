export default function Copyright(){
    return(
        <section className=" col-span-12  md:flex items-center justify-between border-t border-t-white pt-8">
            <p className=" text-sm font-normal">&copy; 2018 Ecommerce theme by www.bisenbaev.com</p>
            <div className="flex items-center justify-between gap-x-4 mt-4 md:mt-0">
                <img src="./western_union.svg" alt="western union" />
                <img src="./master_card.svg" alt="master card" />
                <img src="./paypal.svg" alt="paypal" />
                <img src="./visa.svg" alt="visa" />
            </div>
        </section>
    )
}