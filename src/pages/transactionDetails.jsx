import MaxContainer from "../components/common/maxcontainer";
import { useParams } from "react-router-dom";
import NavBar from "../components/common/navbar";
import Breadcrumbs from "../components/common/Breadcrumbs";
import { Button} from "../components/ui/button";
import { Link } from "react-router-dom";
import { StatusIndicator } from "../components/common/statusIndicator";

const TransactionDetails = () => {
    const { id, trxID } = useParams();
    const breadcrumbItems = [
        {
            label: "Overview",
            path: `/`
        },
        {
            label: `${id}`,
            path: `/gateway-details/${id}`
        },
        {
            label: 'See full details',
            path: `/gateway-details/${id}/${trxID}`,
            active: true
        }
    ]

    const content = [
        {
            title: "Transaction ref",
            value: "TRXPLN5MHVDVI7YUYR8"
        },
        {
            title: "Customer name",
            value: "Oluwatobi Akanni"
        },
        {
            title: "Customer Email",
            value: "oluwatobiakanni@gmail.com"
        },
        {
            title: "Gateway ref",
            value: "ngisgd78hhdjb867"
        },
        {
            title: "Payment target",
            value: "Wallet"
        },
        {
            title: "Total amount",
            value: "100,000"
        },
        {
            title: "Paid amount",
            value: "100,000"
        },
        {
            title: "Created at",
            value: "2024 - 10/11 - 05:50:32"
        },
        {
            title: "Payment status",
            value: "Success"
        },
        {
            title: "Transaction time",
            value: "00.04"
        },
        {
            title: "Device type",
            value: "Phone"
        },
        {
            title: "Attempts",
            value: "30 attempts"
        },
        {
            title: "Errors",
            value: "0 errors"
        }
    ]
    return (
        <section>
            <NavBar />
            <MaxContainer>
                <div className="container py-[10rem]">
                    <div className="flex justify-between items-center mt-[2rem]">
                        <Breadcrumbs items={breadcrumbItems} className="sm:hidden" />
                        <Button variant={'outline'} asChild className="px-[2rem] py-[1.7rem] rounded-[0.5rem] text-[#AF47D2] border-[#AF47D2] hover:bg-[#AF47D2] hover:text-white font-[600] text-[1.6rem]">
                            <Link to={`/gateway-details/${id}/${trxID}/attempts`}>View all attempts</Link>
                        </Button>
                    </div>
                    <div className="mt-[5rem]">
                        <h1 className="text-[2.8rem] font-[600] text-[#000000]">Transaction Details</h1>

                        <div className="grid w-[90%] mt-[4rem] grid-cols-2 gap-[2rem]">
                            <div className="flex flex-col gap-[3rem]">
                                {content.slice(0, 9).map((item, index) => (
                                    <Content content={item} key={index} />
                                ))}
                            </div>
                            <div className="flex flex-col gap-[2rem]">
                                {content.slice(9).map((item, index) => (
                                    <Content content={item} key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </MaxContainer>
        </section>
    );
}

const Content = ({content}) => {
    return (
        <div className="flex flex-col gap-[1rem]">
            <p className="text-[1.4rem] font-[400] text-[#535862]">{content.title}</p>
            {
                content.title === "Payment status" ? (
                    <StatusIndicator status={content.value} />
                ) : (
                    <p className={`text-[1.6rem] font-[500] ${['Attempts', 'Errors'].includes(content.title) ? 'text-[#FF0000]' : 'text-[#000000]'}`}>{content.value}</p>
                )
            }
        </div>
    );
}   
export default TransactionDetails;