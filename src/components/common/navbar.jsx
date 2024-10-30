import MaxContainer from "./maxcontainer";

const Navbar = () => {
    return ( 
        <nav className="border-b bg-white fixed inset-x-0 top-0 z-50 py-[2rem] border-b-[#E0E0E0]">
            <MaxContainer>
                <div className="container flex justify-between items-center">
                    <img src="/nav/cluster_logo.svg" className="w-[13rem] h-auto" alt="logo" />
                    <div className="flex items-center gap-[1rem]">
                        <p className="font-[500]">DataSquid</p>
                        <img src="/nav/quotient.svg" className="w-[4rem] h-auto" alt="chevron_down" />
                    </div>
                </div>
            </MaxContainer>
        </nav>
    );
}
 
export default Navbar;