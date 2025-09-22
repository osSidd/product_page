import { Link } from "react-router-dom"

export default function Navbar(){

    const navLinks = [
        {label: 'home', href: '/'},
        {label: 'bag', href: '/bag'},
        {label: 'sneakers', href: '/sneakers'},
        {label: 'belt', href: '/belt'},
        {label: 'contact', href: '/contact'},
    ]

    return(
        <nav className="w-7/12">
            <ul className="hidden md:flex text-xl font-medium uppercase items-center justify-between">
                {
                    navLinks.map(link => (
                        <li key={link.label}>
                            <Link to={link.href}>{link.label}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}