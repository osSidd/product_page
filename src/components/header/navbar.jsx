export default function Navbar(){

    const navLinks = ['home', 'bag', 'sneakers', 'belt', 'contact']

    return(
        <nav className="w-7/12">
            <ul className=" text-xl font-medium uppercase flex items-center justify-between">
                {
                    navLinks.map(link => (
                        <li key={link}>
                            {link}
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}