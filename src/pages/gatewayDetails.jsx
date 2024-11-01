import MaxContainer from "../components/common/maxcontainer";
import { useParams } from "react-router-dom";
import Navbar from "../components/common/navbar";
import Breadcrumbs from "../components/common/Breadcrumbs";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { Input } from "../components/ui/input";
import { ListFilter } from "lucide-react";
import { Search } from "lucide-react";
import DataTable from "../components/gettwayDetails/table/data-table";
import { columns } from "../components/gettwayDetails/table/column";
const GatewayDetails = () => {
    const data = [
        {
            transactionRef: "#TRXPLN5MHVDVI7YUYR8",
            customer: {
                name: "John Doe",
                email: "john.doe@example.com",
                image: "/common/Avatar.png"
            },
            gatewayRef: "#ngisgd78hhdjb867",
            paymentTarget: "Wallet",
            totalAmount: "5000.00",
            paidAmount: "0",
            status: "Confirmed"
        },
        {
            transactionRef: "#TRXPLN5MHVDVI7YUYR8",
            customer: {
                name: "John Doe",
                email: "john.doe@example.com",
                image: "/common/Avatar.png"
            },
            gatewayRef: "#ngisgd78hhdjb867",
            paymentTarget: "Wallet",
            totalAmount: "5000.00",
            paidAmount: "0",
            status: "Confirmed"
        },
        {
            transactionRef: "#TRXPLN5MHVDVI7YUYR8",
            customer: {
                name: "John Doe",
                email: "john.doe@example.com",
                image: "/common/Avatar.png"
            },
            gatewayRef: "#ngisgd78hhdjb867",
            paymentTarget: "Wallet",
            totalAmount: "5000.00",
            paidAmount: "0",
            status: "Confirmed"
        },
        {
            transactionRef: "#TRXPLN5MHVDVI7YUYR8",
            customer: {
                name: "Oluwatobi Akanni",
                email: "oluwatobi@example.com",
                image: "/common/Avatar.png"
            },
            gatewayRef: "#ngisgd78hhdjb867",
            paymentTarget: "Wallet",
            totalAmount: "5000.00",
            paidAmount: "0",
            status: "Confirmed"
        },
        {
            transactionRef: "#TRXPLN5MHVDVI7YUYR8",
            customer: {
                name: "John Doe",
                email: "john.doe@example.com",
                image: "/common/Avatar.png"
            },
            gatewayRef: "#ngisgd78hhdjb867",
            paymentTarget: "Wallet",
            totalAmount: "5000.00",
            paidAmount: "0",
            status: "Confirmed"
        },
    ]
    const { id } = useParams();

    const findGateway = () => {
        return gatewayList.find(gateway => gateway.name.toLocaleLowerCase() === id.toLocaleLowerCase());
    };

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

    const Cards = [
        {
            title: "Total clicks on payment gateway",
            value: "1250",
            increament: false
        },
        {
            title: "Total number of transactions",
            value: "432520",
            increament: true
        },
        {
            title: "Total number of pending transactions",
            value: "86",
            increament: true
        },
        {
            title: "Total number of failed transactions",
            value: "10",
            increament: false
        },
        {
            title: "Total number of successful transactions",
            value: "309783",
            increament: true
        }
    ]

    const breadcrumbItems = [
        { label: 'Overview', path: '/' },
        { label: id, path: `/gateway-details/${id}`, active: true },
    ];

    return (
        <section>
            <MaxContainer>
                <Navbar />
                <div className="container pt-[10rem] sm:pt-[9rem]">
                    <div className="flex items-center justify-between mb-[4rem]">
                        <Breadcrumbs items={breadcrumbItems} className="sm:hidden" />
                        <div className="flex items-center gap-[2rem]">
                            <Button variant={'outline'} className="text-[1.4rem] border-[#AF47D2] rounded-[.5rem] px-[2rem] py-[1.5rem] text-[#AF47D2]">
                                Remove payment gateway
                            </Button>
                            <Button variant={'outline'} className="text-[1.4rem] rounded-[.5rem] px-[2rem] py-[1.5rem] border-[#AF47D2] text-[#AF47D2]">
                                Edit payment gateway
                            </Button>
                        </div>

                    </div>
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
                    <div className="grid grid-cols-5 sm:grid-cols-1 mt-[3rem] gap-[1.5rem] justify-between">
                        {Cards.map((card, index) => (
                            <Card key={index} {...card} />
                        ))}
                    </div>
                    <div className="mt-[3rem] pb-[10rem]">
                        <div className="flex justify-between items-center">
                            <p className="text-[#181D27] text-[1.65rem] font-[600]"><span className="font-[400]">API uptime for the last 90 days:</span> {`${99.999}%`} </p>
                            <Link to={'/'} className="text-[#FF9100] text-[1.65rem] font-[400]">
                                See configuration details
                            </Link>
                        </div>
                        <div style={{ width: `${99.999}%` }} className="w-full mt-[2rem] h-[4rem] bg-[#27C079]"></div>

                        <p className="text-[#181D27] text-[1.65rem] font-[400] mt-[2rem]">
                            API status:
                            <span className=""> <span className="text-[2rem]">·</span> Operational</span>
                            <span className=""> <span className="text-[2rem]">·</span> Partial degradation</span>
                            <span className=""> <span className="text-[2rem]">·</span> Severe degradation</span>
                        </p>

                        <div className="flex items-center mt-[3rem] mb-[4rem] sm:justify-between sm:w-full gap-[1rem]">
                            <Button
                                variant="ghost"
                                className="bg-white text-[1.5rem] font-[600] text-[#414651] px-[1.3rem] rounded-[0.5rem] py-[1.8rem] border-[#D5D7DA]">
                                <ListFilter size={20} className="w-[1.8rem] mr-[.5rem]" />
                                Filter
                            </Button>
                            <div className="relative">
                                <Search className="absolute left-[1rem] top-1/2 transform -translate-y-1/2 text-gray-500 w-[1.9rem]" />
                                <Input
                                    type="text"
                                    placeholder="Search"
                                    className="pl-[3.5rem] placeholder:font-[400]  rounded-[0.5rem] max-w-[35rem] sm:w-[100%] w-[350px] py-[1.8rem] text-[1.5rem]"
                                />
                            </div>
                        </div>
                        <DataTable data={data} columns={columns} />
                    </div>
                </div>
            </MaxContainer>
        </section>
    );
}


const Card = ({ title, value, increament }) => {
    return (
        <div className="bg-[#fff] border-[#E9EAEB] border rounded-[1rem] p-[2rem] shadow-[0px_1px_2px_0px_#0A0D120D]">
            <h2 className="text-[#181D27] text-[1.65rem] mb-[2rem] font-[600]">{title}</h2>
            <div className="flex items-center justify-between">
                <p className="text-[#181D27] text-[3.3rem] font-[600]">
                    {Number(value).toLocaleString()}
                </p>
                {increament ? <img src={'/home/increase.svg'} className="w-[10rem] h-auto" alt="increase" /> : <img src={'/home/decrease.svg'} className="w-[10rem] h-auto" alt="decrease" />}
            </div>
        </div>
    );
}

export default GatewayDetails;