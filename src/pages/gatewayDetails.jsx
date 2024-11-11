import { ListFilter } from "lucide-react";
import { Search } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Breadcrumbs from "../components/common/Breadcrumbs";
import MaxContainer from "../components/common/maxcontainer";
import Navbar from "../components/common/navbar";
import { columns } from "../components/gettwayDetails/table/column";
import DataTable from "../components/gettwayDetails/table/data-table";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";

const GatewayDetails = () => {
  const data = [
    {
      trxID: "TRXPLN5MHVDVI7YUYR8",
      customer: {
        name: "John Doe",
        email: "john.doe@example.com",
        image: "/img/Avatar.png",
      },
      gatewayRef: "#ngisgd78hhdjb867",
      paymentTarget: "Wallet",
      totalAmount: "5000.00",
      paidAmount: "0",
      status: "Confirmed",
    },
    {
      trxID: "TRXPLN5MHVDVI7YUYR8",
      customer: {
        name: "John Doe",
        email: "john.doe@example.com",
        image: "/img/Avatar.png",
      },
      gatewayRef: "#ngisgd78hhdjb867",
      paymentTarget: "Wallet",
      totalAmount: "5000.00",
      paidAmount: "0",
      status: "Confirmed",
    },
    {
      trxID: "TRXPLN5MHVDVI7YUYR8",
      customer: {
        name: "John Doe",
        email: "john.doe@example.com",
        image: "/img/Avatar.png",
      },
      gatewayRef: "#ngisgd78hhdjb867",
      paymentTarget: "Wallet",
      totalAmount: "5000.00",
      paidAmount: "0",
      status: "Cancelled",
    },
    {
      trxID: "TRXPLN5MHVDVI7YUYR8",
      customer: {
        name: "Oluwatobi Akanni",
        email: "oluwatobi@example.com",
        image: "/img/Avatar.png",
      },
      gatewayRef: "#ngisgd78hhdjb867",
      paymentTarget: "Wallet",
      totalAmount: "5000.00",
      paidAmount: "0",
      status: "Confirmed",
    },
    {
      trxID: "TRXPLN5MHVDVI7YUYR8",
      customer: {
        name: "John Doe",
        email: "john.doe@example.com",
        image: "/img/Avatar.png",
      },
      gatewayRef: "#ngisgd78hhdjb867",
      paymentTarget: "Wallet",
      totalAmount: "5000.00",
      paidAmount: "0",
      status: "Confirmed",
    },
  ];
  const { id } = useParams();

  const findGateway = () => {
    return gatewayList.find(
      (gateway) => gateway.name.toLocaleLowerCase() === id.toLocaleLowerCase(),
    );
  };

  const gatewayList = [
    {
      name: "Paystack",
      image: "/img/paystack.svg",
      link: "https://paystack.com",
    },
    {
      name: "Flutterwave",
      image: "/img/flutter_wave.svg",
      imageSize: "w-[15rem] h-auto",
      link: "https://flutterwave.com",
      withtext: true,
    },
    {
      name: "Alat",
      image: "/img/alat.svg",
      link: "https://alat.com",
    },
    {
      name: "GtBank",
      image: "/img/gt.png",
      link: "https://gt.com",
    },
  ];

  const Cards = [
    {
      title: "Total clicks on payment gateway",
      value: "1250",
      increament: false,
    },
    {
      title: "Total number of transactions",
      value: "432520",
      increament: true,
    },
    {
      title: "Total number of pending transactions",
      value: "86",
      increament: true,
    },
    {
      title: "Total number of failed transactions",
      value: "10",
      increament: false,
    },
    {
      title: "Total number of successful transactions",
      value: "309783",
      increament: true,
    },
  ];

  const breadcrumbItems = [
    { label: "Overview", path: "/" },
    { label: id, path: `/gateway-details/${id}`, active: true },
  ];

  return (
    <section>
      <MaxContainer>
        <Navbar />
        <div className="container pt-[10rem] sm:pt-[9rem]">
          <Button
            variant={"ghost"}
            asChild
            className="p-[0] hidden w-fit sm:flex mb-[3.5rem] text-[#000000]"
          >
            <Link to={"/"}>
              <ChevronLeft size={20} className="text-[1.8rem]" />
              <p className="text-[1.5rem]">{findGateway()?.name}</p>
            </Link>
          </Button>
          <div className="sm:flex hidden gap-[2rem] sm:gap-[1rem] items-center">
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
          <Dialog>
            <div className="flex items-center sm:w-full justify-between mt-[2rem] mb-[4rem]">
              <Breadcrumbs items={breadcrumbItems} className="sm:hidden" />
              <div className="flex sm:flex-col sm:mt-[1rem] sm:w-full items-center gap-[2rem]">
                <DialogTrigger asChild>
                  <Button
                    variant={"outline"}
                    className="text-[1.4rem] sm:w-full border-[#AF47D2] hover:bg-[#AF47D2] hover:text-white rounded-[.5rem] px-[2rem] py-[1.7rem] text-[#AF47D2]"
                  >
                    Remove payment gateway
                  </Button>
                </DialogTrigger>
                <Button
                  variant={"outline"}
                  asChild
                  className="text-[1.4rem] sm:w-full rounded-[.5rem] hover:bg-[#AF47D2] hover:text-white px-[2rem] py-[1.7rem] border-[#AF47D2] text-[#AF47D2]"
                >
                  <Link to={`/gateway-details/${id}/edit`}>
                    Edit payment gateway
                  </Link>
                </Button>
              </div>
            </div>
            <DialogContent className="rounded-[1rem] sm:mt-[20vh] sm:rounded-[.8rem] p-[2rem]">
              <DialogHeader className="text-start">
                <img
                  src="/img/warn.svg"
                  alt="warning"
                  className="w-[4rem] mb-[1rem] h-auto"
                />
                <DialogTitle className="text-[1.5rem]">
                  Remove payment gateway!
                </DialogTitle>
                <DialogDescription className="text-[1.3rem]">
                  Are you sure you want to remove paystack from the list of
                  payment gateway?.
                </DialogDescription>
              </DialogHeader>
              <div className="flex sm:flex-col-reverse sm:items-start sm:gap-[1.5rem] sm:w-full mt-[2rem] items-center justify-end gap-[1rem]">
                <DialogClose asChild>
                  <Button
                    variant={"outline"}
                    className="text-[1.4rem] rounded-[.5rem] sm:w-full px-[2rem] py-[1.8rem] border-[#D5D7DA] text-[#414651]"
                  >
                    Cancel
                  </Button>
                </DialogClose>
                <Button className="text-[1.4rem] rounded-[.5rem] px-[2rem] py-[1.8rem] sm:w-full bg-[#D62F4B] border-[#D5D7DA] text-white">
                  Yes, remove gateway
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          <div className="flex sm:hidden gap-[2rem] items-center">
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
          <div className="mt-[3rem] pb-[10rem]  sm:pb-[0]">
            <div className="flex sm:flex-col sm:w-full sm:items-start sm:gap-[1rem] justify-between items-center">
              <p className="text-[#181D27] text-[1.65rem] font-[600]">
                <span className="font-[400]">
                  API uptime for the last 90 days:
                </span>{" "}
                {`${99.999}%`}{" "}
              </p>
              <Link
                to={`/gateway-details/${id}/config-details`}
                className="text-[#FF9100] text-[1.65rem] font-[400]"
              >
                See configuration details
              </Link>
            </div>
            <div
              style={{ width: `${99.999}%` }}
              className="w-full mt-[2rem] h-[4rem] bg-[#27C079]"
            ></div>

            <p className="text-[#181D27] text-[1.65rem] sm:text-[1.2rem] font-[500] mt-[2rem]">
              API status:
              <span className="sm:block my-[.5rem] hidden"></span>
              <span className="">
                {" "}
                <span className="text-[2rem] sm:text-[1.2rem]">·</span>{" "}
                Operational
              </span>
              <span className="">
                {" "}
                <span className="text-[2rem] sm:text-[1.2rem]">·</span> Partial
                degradation
              </span>
              <span className="">
                {" "}
                <span className="text-[2rem] sm:text-[1.2rem]">·</span> Severe
                degradation
              </span>
            </p>

            <div className="flex items-center mt-[3rem] mb-[4rem] sm:mb-[2rem] sm:justify-between sm:w-full gap-[1rem] sm:gap-[.5rem]">
              <Button
                variant="ghost"
                className="bg-white text-[1.5rem] font-[600] text-[#414651] px-[1.3rem] rounded-[0.5rem] py-[1.8rem] border-[#D5D7DA]"
              >
                <ListFilter size={20} className="w-[1.8rem] mr-[.5rem]" />
                Filter
              </Button>
              <div className="relative">
                <Search className="absolute left-[1rem] top-1/2 transform -translate-y-1/2 text-gray-500 w-[1.9rem]" />
                <Input
                  type="text"
                  placeholder="Search"
                  className="pl-[3.5rem] placeholder:font-[400] rounded-[0.5rem] max-w-[35rem] sm:w-[100%] w-[350px] py-[1.8rem] text-[1.5rem]"
                />
              </div>
            </div>
            <div className="sm:hidden">
              <DataTable data={data} columns={columns} />
            </div>
          </div>
        </div>
        <div className="sm:block hidden sm:pb-[5rem]">
          <DataTable data={data} columns={columns} />
        </div>
      </MaxContainer>
    </section>
  );
};

const Card = ({ title, value, increament }) => {
  return (
    <div className="bg-[#fff] border-[#E9EAEB] border rounded-[1rem] p-[2rem] shadow-[0px_1px_2px_0px_#0A0D120D]">
      <h2 className="text-[#181D27] text-[1.65rem] mb-[2rem] font-[600]">
        {title}
      </h2>
      <div className="flex items-center justify-between">
        <p className="text-[#181D27] text-[3.3rem] font-[600]">
          {Number(value).toLocaleString()}
        </p>
        {increament ? (
          <img
            src={"/img/increase.svg"}
            className="w-[10rem] h-auto"
            alt="increase"
          />
        ) : (
          <img
            src={"/img/decrease.svg"}
            className="w-[10rem] h-auto"
            alt="decrease"
          />
        )}
      </div>
    </div>
  );
};

export default GatewayDetails;
