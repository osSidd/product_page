import Cart from "./cart";
import Logo from "./logo";
import Navbar from "./navbar";

export default function Header(){
    return(
        <header className="flex items-center justify-between px-6 py-3"> 
            <Logo/>
            <Navbar/>
            <Cart/>
        </header>
    )
}

