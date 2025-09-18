export default function FooterLink({heading, links}){
    return (
        <section className="col-span-3">
            <h2 className="text-lg font-medium capitalize">{heading}</h2>
            <ul className="mt-4">
                {
                    links.map(link => (
                        <li key={link.label}><a className="font-normal text-sm capitalize" href={link.href}>{link.label}</a></li>
                    ))
                }
            </ul>
        </section>
    )
}