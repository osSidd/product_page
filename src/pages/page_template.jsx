import Footer from "../components/footer/footer"
import Header from "../components/header/header"

export default function PageTemplate({children, cart}){
    return(
        <>
            <Header cart={cart}/>
                {children}
            <Footer/>
        </>
    )
}

export function PageHeading({heading}){
    return (
        <div className="min-h-screen flex items-center justify-center">
            <h2 className="text-4xl capitalize font-semibold">{heading}</h2>
        </div>
    )
}