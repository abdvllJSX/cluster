import MaxContainer from "../components/common/maxcontainer";
import NavBar from "../components/common/navbar";
import Breadcrumbs from "../components/common/Breadcrumbs";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { StatusIndicator } from "../components/common/statusIndicator";
import useFormatToNaira from "../hooks/formatToNaira";
import { useState } from "react";

const TransactionAttempt = () => {
    const { id, trxID } = useParams();
    const [activeAttemptIndex, setActiveAttemptIndex] = useState(0);
    
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
        },
        {
            label: 'Attempts',
            path: `/gateway-details/${id}/${trxID}/attempts`,
            active: true
        }
    ]

    const attempts = [
        {
            amount: "5000",
            status: "Successful",
            date: "2024 - 10/11 - 05:50:32",
            info: {
                'IP Address': '106.114.83.214',
                'Device': 'Desktop',
                'Transaction Time': '00.04 Seconds',
                'created at': '2024 - 10/11 - 05:50:32',
                'Dispute': 'None',
            },
            isActive: true
        },
        {
            amount: "5000",
            status: "Failed",
            date: "2024 - 10/11 - 05:50:32",
            info: {
                'IP Address': '106.114.83.214',
                'Device': 'Mobile',
                'Transaction Time': '00.04 Seconds',
                'created at': '2024 - 10/11 - 05:50:32',
                'Dispute': 'None',
            },
            isActive: false
        },
        {
            amount: "5000",
            status: "Abandoned",
            date: "2024 - 10/11 - 05:50:32",
            info: {
                'IP Address': '106.114.83.214',
                'Device': 'Tablet',
                'Transaction Time': '00.04 Seconds',
                'created at': '2024 - 10/11 - 05:50:32',
                'Dispute': 'None',
            },
            isActive: false
        }
    ]

    const handleAttemptClick = (index) => {
        setActiveAttemptIndex(index);
    };

    return (
        <section>
            <NavBar />
            <MaxContainer>
                <div className="container py-[10rem]">
                    <Button asChild className="hidden sm:flex sm:w-fit sm:text-[#000000] p-[0] text-[1.4rem] font-[500] gap-[.5rem]" variant={'ghost'}>
                        <Link to={`/gateway-details/${id}/${trxID}`}>
                            <ChevronLeft className="w-[2rem] h-auto" />
                            Transaction details
                        </Link>
                    </Button>
                    <div className="mt-[3rem] sm:mt-[0]">
                        <Breadcrumbs className={'sm:hidden'} items={breadcrumbItems} />
                    </div>
                    <h1 className="text-[3rem] sm:text-[2rem] sm:mb-[2rem] sm:mt-[3rem] mb-[4rem] mt-[5.5rem] font-[600] text-[#000000]">{`Attempts (${attempts.length})`}</h1>

                    <div className="flex sm:flex-col gap-[5rem] justify-between">
                        <div className="flex flex-1 flex-col gap-[2rem] sm:gap-[2rem]">
                            {attempts.map((attempt, index) => (
                                <AttemptCard 
                                    key={index} 
                                    attempt={attempt} 
                                    isActive={index === activeAttemptIndex}
                                    onClick={() => handleAttemptClick(index)}
                                />
                            ))}
                        </div>

                        <div className="flex-1 border-[#E9EAEB] flex flex-col gap-[2rem] border rounded-[1rem] p-[3rem]">
                            {Object.entries(attempts[activeAttemptIndex].info).map(([key, value], index) => (
                                <div key={index} className="flex flex-col gap-[.5rem]">
                                    <p className="text-[1.4rem] text-[#535862] font-[400]">{key}</p>
                                    <p className="font-[500] text-[1.6rem] text-[#000000]">{value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </MaxContainer>
        </section>
    );
}

const AttemptCard = ({ attempt, isActive, onClick }) => {
    const formatToNaira = useFormatToNaira();
    const formattedAmount = formatToNaira(attempt.amount);
    
    return (
        <button 
            onClick={onClick}
            className={`flex p-[2.5rem] hover:bg-[#FBF0FF] transition-all duration-300 ease-in-out hover:mix-blend-multiply rounded-[1rem] border-[#E9EAEB] border justify-between items-center ${
                isActive ? 'bg-[#FBF0FF]' : ''
            }`}
        >
            <div className="text-start">
                <p className="text-[1.7rem] mb-[.5rem] font-[600]">{formattedAmount}</p>
                <p className="text-[1.5rem] text-[#000000] font-[400]">{attempt.date}</p>
            </div>
            <StatusIndicator status={attempt.status} />
        </button>
    );
}

export default TransactionAttempt;