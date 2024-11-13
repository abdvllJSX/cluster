import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import MaxContainer from "../common/maxcontainer";
import { useState, useEffect } from "react";


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navLinks = [
        {
            name: "Why Cluster?",
            path: "/whyCluster"
        },
        {
            name: "Partners",
            path: "/partners"
        },
        {
            name: "Developers",
            path: "/"
        },
        {
            name: "Support",
            path: "/"
        }
    ]

    return (
        <nav className={`fixed top-[0] left-0 right-0 pt-[3rem] pb-[2rem] transition-colors duration-300 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
            <MaxContainer>
                <div className="container flex items-center justify-between">
                    <Link to={'/'}>
                        <img src="/nav/cluster_logo.svg" alt="logo" className="w-[10rem] h-[4rem]" />
                    </Link>

                    <ul className="flex items-center gap-4">
                        {navLinks.map((link, index) => (
                            <NavItem key={index} name={link.name} path={link.path} />
                        ))}
                    </ul>

                    <div className="flex items-center gap-4">
                        <Button className="bg-transparent text-black font-[600] text-[1.3rem]" asChild variant={'ghost'}><Link to={'/onboarding/login'}>Log in</Link></Button>
                        <Button className="text-white rounded-[.5rem] bg-[#FF9100] font-[600] py-[1.5rem] px-[1.3rem] text-[1.3rem]" asChild><Link to={'/onboarding/signup'}>Sign Up</Link></Button>
                    </div>
                </div>
            </MaxContainer>
        </nav>
    );
}

export default Navbar;


const NavItem = ({ name, path }) => {
    return (
        <li>
            <Button className="bg-transparent text-[1.3rem] font-[600] text-black" variant={'ghost'} asChild><Link to={path}>{name}</Link></Button>
        </li>
    );
}
