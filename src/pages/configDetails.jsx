import { useParams } from "react-router-dom";
import MaxContainer from "../components/common/maxcontainer";
import Navbar from "../components/common/navbar";
import Breadcrumbs from "../components/common/Breadcrumbs";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../components/ui/dialog"
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
const ConfigDetails = () => {
    const { id } = useParams();
    const findGateway = () => {
        return gatewayList.find(gateway => gateway.name === id);
    }
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
    const breadcrumbItems = [
        { label: 'Overview', path: '/' },
        { label: id, path: `/gateway-details/${id}` },
        { label: 'See full details', path: `/gateway-details/${id}/config-details`, active: true },
    ];

    const content = [
        {
            title: "Description",
            value: <p className="text-[#414651] max-w-[51rem] text-[1.6rem] font-[400]">Modern online and offline payments for Africa · Simple, easy payments · Trusted by 200,000 + businesses · Powering growth for amazing businesses · Backed by notable investors as well as some of the best payments companies on the planet.</p>  ,
        },
        {
            title: "API response time:",
            value: <p className="max-w-[53rem] text-[#000000] font-[600]">278ms</p>,
        },
        {
            title: "Payment gateway link:",
            value: <Link to={'#'} className="text-[#0000FF] text-[1.6rem] max-w-[53rem]">https://paystack.com</Link>,
        },
        {
            title: "Status:",
            value: <p className="px-[1.5rem] py-[.1rem] text-[1.4rem] bg-[#ECFDF3] text-[#027A48] rounded-[2rem]">Active</p>,
        }
    ]
    return (
        <section>
            <Navbar />
            <MaxContainer>
                <div className="container py-[10rem] sm:py-[9rem]">
                    <Dialog>
                        <div className="flex items-center justify-between mt-[2rem] mb-[4rem]">
                            <Breadcrumbs items={breadcrumbItems} className="sm:hidden" />
                            <div className="flex items-center gap-[2rem]">
                                <DialogTrigger asChild>
                                    <Button variant={'outline'} className="text-[1.4rem] border-[#AF47D2] hover:bg-[#AF47D2] hover:text-white rounded-[.5rem] px-[2rem] py-[1.7rem] text-[#AF47D2]">
                                        Remove payment gateway
                                    </Button>
                                </DialogTrigger>
                                <Button variant={'outline'} asChild className="text-[1.4rem] rounded-[.5rem] hover:bg-[#AF47D2] hover:text-white px-[2rem] py-[1.7rem] border-[#AF47D2] text-[#AF47D2]">
                                    <Link to={`/gateway-details/${id}/config-details`}>
                                        Edit payment gateway
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        <DialogContent className="rounded-[1rem] p-[2rem]">
                            <DialogHeader className="text-start">
                                <img src="/common/warn.svg" alt="warning" className="w-[4rem] mb-[1rem] h-auto" />
                                <DialogTitle className="text-[1.5rem]">Remove payment gateway!</DialogTitle>
                                <DialogDescription className="text-[1.3rem]">Are you sure you want to remove paystack from the list of payment gateway?.</DialogDescription>
                            </DialogHeader>
                            <div className="flex mt-[2rem] items-center justify-end gap-[1rem]">
                                <DialogClose asChild>
                                    <Button variant={'outline'} className="text-[1.4rem] rounded-[.5rem] px-[2rem] py-[1.8rem] border-[#D5D7DA] text-[#414651]">
                                        Cancel
                                    </Button>
                                </DialogClose>
                                <Button className="text-[1.4rem] rounded-[.5rem] px-[2rem] py-[1.8rem] bg-[#D62F4B] border-[#D5D7DA] text-white">
                                    Yes, remove gateway
                                </Button>
                            </div>
                        </DialogContent>
                    </Dialog>
                    <div className="flex gap-[2rem] items-center">
                        <img
                            src={findGateway()?.image}
                            alt={findGateway()?.name}
                            className={findGateway()?.imageSize}
                        />
                        {!findGateway()?.withtext && (
                            <p className="text-[2rem] font-[600] text-[#414651]">
                                {findGateway()?.name}
                            </p>
                        )}
                    </div>
                    <div className="mt-[3.5rem]">
                        <p className="text-[#181D27] text-[1.65rem] font-[600]"><span className="font-[400]">API uptime for the last 90 days:</span> {`${99.999}%`} </p>
                        <div style={{ width: `${99.999}%` }} className="w-full mt-[2rem] h-[4rem] bg-[#27C079]"></div>
                        <p className="text-[#181D27] text-[1.65rem] font-[400] mt-[2rem]">
                            API status:
                            <span className=""> <span className="text-[2rem]">·</span> Operational</span>
                            <span className=""> <span className="text-[2rem]">·</span> Partial degradation</span>
                            <span className=""> <span className="text-[2rem]">·</span> Severe degradation</span>
                        </p>
                    </div>

                    <div className="mt-[3rem] border-t border-[#E0E0E0]">
                        {content.map((item, index) => (
                            <Content key={index} content={item} />
                        ))}
                    </div>
                </div>
            </MaxContainer>
        </section>
    );
}

const Content = ({ content }) => {
    return (
        <div className="flex gap-[5rem] py-[2rem] border-b border-[#E0E0E0]">
            <p className="text-[#717680] w-[18rem] text-[1.65rem] font-[400]">{content.title}</p>
            {content.value}
        </div>
    )
}

export default ConfigDetails;