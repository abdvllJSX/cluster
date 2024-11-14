import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import MaxContainer from "../common/maxcontainer";
import { useState, useEffect } from "react";
import Hamburger from "./hambuger";


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [open, setOpen] = useState(false)

    const toggleNav = () => {
        setOpen(prevOpen => !prevOpen)
    }

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
        <nav className={`fixed top-[0] left-0 right-0 pt-[3rem] sm:pt-[2rem] pb-[2rem] transition-colors sm:bg-white  sm:z-[15] duration-300 ${isScrolled ? 'bg-white' : 'bg-transparent sm:bg-white'}`}>
            <MaxContainer>
                <div className="container flex items-center justify-between">
                    <Link to={'/'}>
                        <img src="/nav/cluster_logo.svg" alt="logo" className="w-[10rem] sm:bg-white h-[4rem]" />
                    </Link>

                    <ul className={`flex sm:flex-col sm:fixed sm:top-0 sm:left-0 border sm:right-0 sm:bg-white sm:pt-[9rem] sm:pb-[3rem] sm:items-start sm:px-[2rem] ${open ? 'sm:translate-y-0' : 'sm:translate-y-[-100%]'} transition-all duration-300 items-center gap-4 
                    sm:shadow-md`}>
                        {navLinks.map((link, index) => (
                            <>
                                <NavItem key={index} name={link.name} path={link.path} />
                            </>
                        ))}

                        <li className="hidden sm:block w-full mt-[1.5rem]">
                            <Button className="text-white rounded-[.5rem] bg-[#FF9100] w-full font-[600]  py-[1.8rem] px-[1.3rem] text-[1.3rem]" asChild><Link to={'/onboarding/signup'}>Sign Up</Link></Button>
                        </li>
                        <li className="hidden sm:block mt-[1rem] w-full">
                            <Button className="bg-transparent rounded-[.5rem] w-full border py-[1.8rem] shadow-sm border-[#D5D7DA] text-black font-[600] text-[1.3rem]" asChild variant={'ghost'}><Link to={'/onboarding/login'}>Log in</Link></Button>
                        </li>
                    </ul>

                    <div className="flex items-center gap-4 sm:hidden">
                        <Button className="bg-transparent  text-black font-[600] text-[1.3rem]" asChild variant={'ghost'}><Link to={'/onboarding/login'}>Log in</Link></Button>
                        <Button className="text-white rounded-[.5rem] bg-[#FF9100] font-[600] py-[1.5rem] px-[1.3rem] text-[1.3rem]" asChild><Link to={'/onboarding/signup'}>Sign Up</Link></Button>
                    </div>
                    <Hamburger open={open} toggleNav={toggleNav} />
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
