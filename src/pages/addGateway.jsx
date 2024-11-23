import { apiListAllGateway } from "@/api/gateway.ts";
import {
  ArrowPathIcon,
  ExclamationTriangleIcon,
  InboxIcon,
} from "@heroicons/react/24/outline/index.js";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

import BreadcrumbNav from "../components/common/Breadcrumbs";
import MaxContainer from "../components/common/maxcontainer";
import Navbar from "../components/common/navbar";

const AddGateway = () => {
  const {
    isPending: gatewaysLoading,
    isError,
    data: response,
    error: gatewayLoadingError,
  } = useQuery({
    queryKey: ["allGateways"],
    queryFn: apiListAllGateway,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const { data: gatewayList = [] } = response ?? {};

  const breadcrumbItems = [
    { path: "/dashboard", label: "Overview" },
    { path: "/add-gateway", label: "Add Payment Gateway", active: true },
  ];

  return (
    <section className="">
      <Navbar />
      <MaxContainer>
        <div className="container pt-[12rem] pb-[15rem] sm:pt-[9rem]">
          <BreadcrumbNav items={breadcrumbItems} />
          <h1 className="header_i sm:text-[2.3rem] mt-[3rem]">
            Add Payment Gateway
          </h1>
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
              {!gatewaysLoading && response && (
                <>
                  {gatewayList.length > 0 &&
                    formatGatewayList(gatewayList).map((gateway, index) => (
                      <GatewayCard key={index} {...gateway} index={index} />
                    ))}
                  {gatewayList.length === 0 && (
                    <div className="flex flex-col self-center items-center text-2xl p-4">
                      <InboxIcon className="w-[2.3rem] h-[2.3rem]" />
                      No gateways found...
                    </div>
                  )}
                </>
              )}

              {gatewaysLoading && (
                <div className="flex flex-col self-center items-center text-2xl p-4">
                  <ArrowPathIcon className="animate-spin w-[2.3rem] h-[2.3rem]" />
                  Loading all gateways...
                </div>
              )}

              {!gatewaysLoading && isError && (
                <div className="flex flex-col self-center items-center text-2xl p-4">
                  <ExclamationTriangleIcon className="w-[2.3rem] h-[2.3rem]" />
                  {gatewayLoadingError.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </MaxContainer>
    </section>
  );
};

const formatGatewayList = (gateways) =>
  gateways.map((row) => ({
    id: row.name,
    name: row.label,
    image: row.logo_url,
    link: row.home_page_url,
    description: row.description,
  }));

const GatewayCard = ({ id, name, image, link, withText, imageSize }) => {
  return (
    <div className="p-[2rem] rounded-[.8rem] hover:bg-[#FBF0FF] overflow-hidden border-b border-gray-300">
      <Link to={`/add-gateway/${id}`} className="hover:bg-[]">
        <div className="flex gap-[1rem] mb-[1.2rem] items-center">
          <img
            src={image}
            className={`${imageSize ?? "w-[3rem]"}`}
            alt={name}
          />
          {!withText && (
            <p className="text-[#000000] text-[2rem] font-[600]">{name}</p>
          )}
        </div>
      </Link>
      <Link to={link} className="text-[#2A3362] text-[1.65rem] font-[400]">
        {link}
      </Link>
    </div>
  );
};

export default AddGateway;
