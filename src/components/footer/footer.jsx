import Description from "./description";
import footerLinks from '../../static/footerLinks.json'
import FooterLink from "./footer_links";
import Social from "./social";
import Contact from "./contact";
import Copyright from "./copyright";

export default function Footer(){
    return(
        <footer className=" md:grid grid-cols-12 gap-4 items-start bg-blue-200 py-24 px-16 md:px-28 gap-y-10">
            <Description/>
            <Social/>
            <Contact/>
            {
                footerLinks.map(link => (
                    <FooterLink key={link.heading} heading={link.heading} links={link.links}/>
                ))
            }
            <Copyright/>
        </footer>
    )
}