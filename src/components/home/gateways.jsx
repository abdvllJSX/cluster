import MaxContainer from "../common/maxcontainer";
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Link } from "react-router-dom";
import { Search } from "lucide-react"

const Gateways = () => {
    const paymentGateways = [
        {
            name: "Paystack",
            image: "/home/paystack.svg",
            link: 'https://paystack.com',
            status: [
                {
                    name: "Active",
                    style: "bg-[#ECFDF3] text-[#027A48]"
                },
                {
                    name: "Configured",
                    style: "bg-[#EFDAF6] text-[#AF47D2]"
                }
            ],
            apiUpTime: '99.999',
            apiResponseTime: '278',
            numberOfClicksOnTheGateway: '32849',
            TotalTransactions: '18599',
            numberOfFailedTransactions: '200',
            numberOfSuccessfulTransactions: '1599',
        },
        {
            name: <span className="text-[#2A3362]">flutterwave</span>,
            image: "/home/flutter_wave.svg",
            link: 'https://flutterwave.com',
            status: [
                {
                    name: "Inactive",
                    style: "bg-[#E7EAED] text-[#525964]"
                },
                {
                    name: "Configured",
                    style: "bg-[#EFDAF6] text-[#AF47D2]"
                }
            ],
            apiUpTime: '99.999',
            apiResponseTime: '278',
            numberOfClicksOnTheGateway: '32849',
            TotalTransactions: '18599',
            numberOfFailedTransactions: '200',
            numberOfSuccessfulTransactions: '1599',
            withoutText: true,
            imagestyle: 'w-[20rem]'
        },
        {
            name: "ALAT",
            image: "/home/alat.svg",
            link: 'https://online.alat.ng',
            status: [
                {
                    name: "Active",
                    style: "bg-[#ECFDF3] text-[#027A48]"
                },
                {
                    name: "Configured",
                    style: "bg-[#EFDAF6] text-[#AF47D2]"
                }
            ],
            apiUpTime: '99.999',
            apiResponseTime: '278',
            numberOfClicksOnTheGateway: '32849',
            TotalTransactions: '18599',
            numberOfFailedTransactions: '200',
            numberOfSuccessfulTransactions: '1599',
        },
        {
            name: "GTBank",
            image: "/home/gt.png",
            link: 'https://gtbank.com',
            status: [
                {
                    name: "Active",
                    style: "bg-[#ECFDF3] text-[#027A48]"
                },
                {
                    name: "Configured",
                    style: "bg-[#EFDAF6] text-[#AF47D2]"
                }
            ],
            apiUpTime: '99.999',
            apiResponseTime: '278',
            numberOfClicksOnTheGateway: '32849',
            TotalTransactions: '18599',
            numberOfFailedTransactions: '200',
            numberOfSuccessfulTransactions: '1599',
        },
        
    ]
    return (
        <section className="mt-[3rem]">
            <MaxContainer>
                <div className="container">
                    <div className="flex items-center justify-between">
                        <h1 className="header_i">Manage Payment Gateways</h1>
                        <div className="flex items-center gap-[1rem]">
                            <Button variant="ghost" className="bg-white text-[1.4rem] font-[600] text-[#414651] px-[1.9rem] rounded-[0.5rem] py-[1.8rem] border-[#D5D7DA]">Filter</Button>
                            <div className="relative">
                                <Search className="absolute left-[1rem] top-1/2 transform -translate-y-1/2 text-gray-500 w-[1.9rem]" />
                                <Input
                                    type="text"
                                    placeholder="Search"
                                    className="pl-[3.5rem] placeholder:font-[400]  rounded-[0.5rem] w-[250px] py-[1.8rem] text-[1.5rem]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-[2rem] gap-[2rem]">
                        {paymentGateways.map((gateway, index) => (
                            <GatewayCard gateway={gateway} key={index} />
                        ))}
                    </div>
                </div>
            </MaxContainer>
        </section>
    )
}

const GatewayCard = ({ gateway }) => {
    return (
        <div className="bg-white rounded-[1rem] p-[2rem] border border-[#EFDAF6]">
            <div className="flex items-center justify-between">
                <div className="">
                    <div className="flex items-center gap-[1rem]">
                        <img src={gateway.image} alt={gateway.name} className={`${gateway.imagestyle ?? `w-[3rem]`} h-auto`} />
                        {!gateway.withoutText && <p className="text-[2.5rem] text-black font-[600]">{gateway.name}</p>}
                    </div>
                    <Link to={gateway.link} className="text-[1.5rem] inline-block mt-[1rem] text-[#414651] font-[400]">{gateway.link}</Link>

                    <div className="flex gap-[1rem] mt-[1.5rem]">
                        {gateway.status.map((status, index) => (
                            <Status status={status} key={index} />
                        ))}
                    </div>
                </div>
                <div className="flex justify-between w-[60%] gap-[2rem]">
                    <div className="w-[20%]">
                        <div className="pb-[1.5rem] border-b h-[6rem] border-[#9B9B9B]">
                            <p className="gateway_card_p">API uptime:</p>
                            <p className="gateway_card_p_value">{`${gateway.apiUpTime}%`}</p>
                        </div>
                        <div className="pt-[1.5rem]">
                            <p className="gateway_card_p">API Response time:</p>
                            <p className="gateway_card_p_value">{`${gateway.apiResponseTime}ms`}</p>
                        </div>
                    </div>
                    <div className="w-[40%]">
                        <div className="pb-[1.5rem] justify-between flex gap-[2rem] border-b h-[6rem] border-[#9B9B9B]">
                            <p className="gateway_card_p_value">{Number(gateway.numberOfClicksOnTheGateway).toLocaleString()}</p>
                            <p className="gateway_card_p">Number of clicks on gateway </p>
                        </div>
                        <div className="pt-[1.5rem] justify-between flex gap-[2rem]">
                            <p className="gateway_card_p_value">{Number(gateway.TotalTransactions).toLocaleString()}</p>
                            <p className="gateway_card_p">Total transactions</p>
                        </div>
                    </div>
                    <div className="w-[40]">
                        <div className="pb-[1.5rem] justify-between flex gap-[2rem] border-b h-[6rem] border-[#9B9B9B]">
                            <p className="gateway_card_p_value">{Number(gateway.numberOfFailedTransactions).toLocaleString()}</p>
                            <p className="gateway_card_p">Number of fail transactions</p>
                        </div>
                        <div className="pt-[1.5rem] justify-between flex gap-[2rem]">
                            <p className="gateway_card_p_value">{Number(gateway.numberOfSuccessfulTransactions).toLocaleString()}</p>
                            <p className="gateway_card_p">Number of sucessful transactions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Status = ({ status }) => {
    return (
        <div className={`${status.style} rounded-[1rem] text-[1.2rem] font-[500] px-[1rem] py-[0.5rem]`}> {(status.name == "Active" && <span className={`w-[.7rem] h-[.7rem] rounded-full inline-block bg-[#12B76A] mr-[0.5rem]`}></span>) || (status.name == "Inactive" && <span className={`w-[.7rem] h-[.7rem] rounded-full inline-block bg-[#8895A7] mr-[0.5rem]`}></span>)} {status.name}</div>
    )
}

export default Gateways