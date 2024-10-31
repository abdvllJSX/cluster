import Navbar from "../components/common/navbar";
import MaxContainer from "../components/common/maxcontainer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbList } from "../components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const AddGateway = () => {
    const gatewayList = [
        {
            name: "Paystack",
            image: "/common/paystack.svg",
            link: "https://paystack.com",
        },
        {
            name: "Flutterwave",
            image: "/common/flutter_wave.svg",
            imageSize: "w-[15rem] h-auto",
            link: "https://flutterwave.com",
            withtext: true,
        },
        {
            name: 'Alat',
            image: "/common/alat.svg",
            link: "https://alat.com",
        },
        {
            name: "GtBank",
            image: "/common/gt.png",
            link: "https://gt.com",
        }
    ]
    return (
        <section className="">
            <Navbar />
            <MaxContainer>
                <div className="container pt-[12rem] pb-[15rem] sm:pt-[9rem]">
                    <Breadcrumb className="sm:hidden">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to={'/'} className="text-[#414651] text-[1.65rem] sm:text-[1.4rem] ">Overview</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="[&>svg]:w-[2rem] text-[#181D27] mx-[1rem] [&>svg]:h-auto" />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to={'/add-gateway'} className="text-[#000000] text-[1.65rem] sm:text-[1.4rem] ">Add Payment Gateway</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <h1 className="header_i sm:text-[2.3rem] mt-[3rem]">Add Payment Gateway</h1>
                    <div className="mt-[3rem] sm:mt-[2rem]">
                        <div className="relative">
                            <Search className="absolute w-[1.5rem] left-4 top-1/2 -translate-y-1/2 h-auto text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search payment gateway"
                                className="max-w-[40rem] sm:w-full w-[40rem] text-[1.5rem] placeholder:text-[#717680] placeholder:font-[400] pl-12 pr-4 py-[1rem] rounded-[1rem] border border-gray-300 focus:outline-none focus:ring-none focus:border-blue-500 shadow-[0px_1px_2px_0px_#0A0D120D]"
                            />
                        </div>
                        <div className="grid grid-cols-1 mt-[4.5rem] sm:mt-[3rem] gap-[5rem]">
                            {gatewayList.map((gateway, index) => (
                                <GatewayCard key={index} {...gateway} />
                            ))}
                        </div>
                    </div>
                </div>
            </MaxContainer>
        </section>
    );
}

const GatewayCard = ({ name, image, link, withtext, imageSize }) => {
    return (
        <div className="pb-[2rem] border-b border-gray-300">
            <div className="flex gap-[1rem] mb-[1.2rem] items-center">
                <img src={image} className={`${imageSize ?? 'w-[3rem]'}`} alt={name} />
                {!withtext && <p className="text-[#000000] text-[2rem] font-[600]">{name}</p>}
            </div>
            <Link to={link} className="text-[#2A3362] text-[1.65rem] font-[400]">{link}</Link>
        </div>
    );
}

export default AddGateway;