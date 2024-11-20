import { ChevronLeft } from "lucide-react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Breadcrumbs from "../components/common/Breadcrumbs";
import MaxContainer from "../components/common/maxcontainer";
import NavBar from "../components/common/navbar";
import { StatusIndicator } from "../components/common/statusIndicator";
import { Button } from "../components/ui/button";

const TransactionDetails = () => {
  const { id, trxID } = useParams();
  const breadcrumbItems = [
    {
      label: "Overview",
      path: `/dashboard`,
    },
    {
      label: `${id}`,
      path: `/gateway-details/${id}`,
    },
    {
      label: "See full details",
      path: `/gateway-details/${id}/${trxID}`,
      active: true,
    },
  ];

  const content = [
    {
      title: "Transaction ref",
      value: "TRXPLN5MHVDVI7YUYR8",
    },
    {
      title: "Customer name",
      value: "Oluwatobi Akanni",
    },
    {
      title: "Customer Email",
      value: "oluwatobiakanni@gmail.com",
    },
    {
      title: "Gateway ref",
      value: "ngisgd78hhdjb867",
    },
    {
      title: "Payment target",
      value: "Wallet",
    },
    {
      title: "Total amount",
      value: "100,000",
    },
    {
      title: "Paid amount",
      value: "100,000",
    },
    {
      title: "Created at",
      value: "2024 - 10/11 - 05:50:32",
    },
    {
      title: "Payment status",
      value: "Success",
    },
    {
      title: "Transaction time",
      value: "00.04",
    },
    {
      title: "Device type",
      value: "Phone",
    },
    {
      title: "Attempts",
      value: "30 attempts",
    },
    {
      title: "Errors",
      value: "0 errors",
    },
  ];
  return (
    <section>
      <NavBar />
      <MaxContainer>
        <div className="container py-[10rem]">
          <Button
            asChild
            className="hidden sm:flex mb-[2rem] sm:w-fit sm:text-[#000000] p-[0] text-[1.4rem] font-[500] gap-[.5rem]"
            variant={"ghost"}
          >
            <Link to={`/gateway-details/${id}`}>
              <ChevronLeft className="w-[2rem] h-auto" />
              Transaction details
            </Link>
          </Button>
          <div className="flex justify-between sm:hidden items-center mt-[2rem]">
            <Breadcrumbs items={breadcrumbItems} className="sm:hidden" />
            <Button
              variant={"outline"}
              asChild
              className="px-[2rem] py-[1.7rem] rounded-[0.5rem] text-[#AF47D2] border-[#AF47D2] hover:bg-[#AF47D2] hover:text-white font-[600] text-[1.6rem]"
            >
              <Link to={`/gateway-details/${id}/${trxID}/attempts`}>
                View all attempts
              </Link>
            </Button>
          </div>
          <div className="mt-[5rem] sm:mt-[0]">
            <h1 className="text-[2.8rem] sm:text-[2rem] font-[600] text-[#000000]">
              Transaction Details
            </h1>
            <Breadcrumbs items={breadcrumbItems} className="sm:hidden" />
            <Button
              variant={"outline"}
              asChild
              className="px-[2rem] sm:w-full hidden sm:flex my-[2rem] py-[1.7rem] rounded-[0.5rem] text-[#AF47D2] border-[#AF47D2] hover:bg-[#AF47D2] hover:text-white font-[600] text-[1.6rem]"
            >
              <Link to={`/gateway-details/${id}/${trxID}/attempts`}>
                View all attempts
              </Link>
            </Button>
            <div className="grid w-[90%] mt-[4rem] sm:mt-[2rem] grid-cols-2 sm:grid-cols-1 gap-[2rem]">
              <div className="flex flex-col sm:gap-[2.5rem] gap-[3rem]">
                {content.slice(0, 9).map((item, index) => (
                  <Content content={item} key={index} />
                ))}
              </div>
              <div className="flex flex-col sm:gap-[2.5rem] gap-[2rem]">
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
};

const Content = ({ content }) => {
  return (
    <div className="flex flex-col gap-[1rem]">
      <p className="text-[1.4rem] font-[400] text-[#535862]">{content.title}</p>
      {content.title === "Payment status" ? (
        <StatusIndicator status={content.value} />
      ) : (
        <p
          className={`text-[1.6rem] font-[500] ${["Attempts", "Errors"].includes(content.title) ? "text-[#FF0000]" : "text-[#000000]"}`}
        >
          {content.value}
        </p>
      )}
    </div>
  );
};
export default TransactionDetails;
