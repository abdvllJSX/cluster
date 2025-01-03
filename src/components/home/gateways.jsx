import {
  ArrowPathIcon,
  ExclamationTriangleIcon,
  InboxIcon,
} from "@heroicons/react/24/outline/index.js";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import MaxContainer from "../common/maxcontainer";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Gateways = ({ error, gateways, isError, loading }) => {
  return (
    <section className="mt-[3rem]">
      <MaxContainer>
        <div className="container pb-[8rem]">
          <div className="flex sm:flex-col items-center justify-between">
            <h1 className="header_i sm:self-start sm:mb-[1.5rem] sm:text-[2rem]">
              Manage Payment Gateways
            </h1>
            <div className="flex items-center sm:justify-between sm:w-full gap-[1rem]">
              <div className="relative">
                <Search className="absolute left-[1rem] top-1/2 transform -translate-y-1/2 text-gray-500 w-[1.9rem]" />
                <Input
                  type="text"
                  placeholder="Search"
                  className="pl-[3.5rem] placeholder:font-[400]  rounded-[0.5rem] max-w-[35rem] sm:w-[100%] w-[350px] py-[1.8rem] text-[1.5rem]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-[2rem] gap-[2rem]">
            {!loading && gateways && (
              <>
                {gateways.length > 0 &&
                  formatGatewayList(gateways).map((gateway, index) => (
                    <GatewayCard gateway={gateway} key={index} />
                  ))}
                {gateways.length === 0 && (
                  <div className="flex flex-col self-center items-center text-2xl p-4">
                    <InboxIcon className="w-[2.3rem] h-[2.3rem]" />
                    No gateways found...
                  </div>
                )}
              </>
            )}

            {loading && (
              <div className="flex flex-col self-center items-center text-2xl p-4">
                <ArrowPathIcon className="animate-spin w-[2.3rem] h-[2.3rem]" />
                Loading gateways...
              </div>
            )}

            {!loading && isError && (
              <div className="flex flex-col self-center items-center text-2xl p-4">
                <ExclamationTriangleIcon className="w-[2.3rem] h-[2.3rem]" />
                {error.message}
              </div>
            )}
          </div>
        </div>
      </MaxContainer>
    </section>
  );
};

const GatewayCard = ({ gateway }) => {
  return (
    <Link to={`/gateway-details/${gateway.id}`} className=" rounded-[1rem]">
      <div className="bg-white rounded-[1rem] hover:bg-[#EFDAF6] transition-all duration-300 p-[2rem] border overflow-hidden border-[#EFDAF6]">
        <div className="flex sm:flex-col items-center justify-between">
          <div className="sm:self-start sm:mb-[1rem]">
            <div className="flex items-center gap-[1rem]">
              <img
                src={gateway.image}
                alt={gateway.name}
                className={`${gateway.imagestyle ?? `w-[3rem]`} h-auto`}
              />
              {!gateway.withoutText && (
                <p className="text-[2.5rem] sm:text-[2rem] text-black font-[600]">
                  {gateway.name}
                </p>
              )}
            </div>
            <Link
              to={gateway.link}
              className="text-[1.5rem] inline-block mt-[1rem] text-[#414651] font-[400]"
            >
              {gateway.link}
            </Link>

            <div className="flex gap-[1rem] mt-[1.5rem]">
              {gateway.status.map((status, index) => (
                <Status status={status} key={index} />
              ))}
            </div>
          </div>
          <div className="flex justify-between sm:w-full w-[60%] gap-[2rem]">
            <div className="sm:flex sm:justify-between sm:w-full w-[20%] sm:items-center">
              <div className="sm:w-[70%] w-[100%]">
                <div className="pb-[1.5rem] border-b h-[6rem] border-[#9B9B9B]">
                  <p className="gateway_card_p">API uptime:</p>
                  <p className="gateway_card_p_value">{`${gateway.apiUpTime}%`}</p>
                </div>
                <div className="pt-[1.5rem]">
                  <p className="gateway_card_p">API Response time:</p>
                  <p className="gateway_card_p_value">{`${gateway.apiResponseTime}ms`}</p>
                </div>
              </div>
              <Button
                variant="outline"
                className="bg-white hidden sm:flex text-[1.5rem] font-[600] text-[#414651] px-[1.3rem] rounded-[2rem] py-[1.5rem] border-[#FF9100]"
              >
                <Link to={gateway.link}>
                  <p className="text-[#FF9100] text-[1.2rem]">View all</p>
                </Link>
              </Button>
            </div>
            <div className="w-[40%] sm:hidden">
              <div className="pb-[1.5rem] justify-between flex gap-[2rem] border-b h-[6rem] border-[#9B9B9B]">
                <p className="gateway_card_p_value">
                  {Number(gateway.numberOfClicksOnTheGateway).toLocaleString()}
                </p>
                <p className="gateway_card_p">Number of clicks on gateway </p>
              </div>
              <div className="pt-[1.5rem] justify-between flex gap-[2rem]">
                <p className="gateway_card_p_value">
                  {Number(gateway.TotalTransactions).toLocaleString()}
                </p>
                <p className="gateway_card_p">Total transactions</p>
              </div>
            </div>
            <div className="w-[40] sm:hidden">
              <div className="pb-[1.5rem] justify-between flex gap-[2rem] border-b h-[6rem] border-[#9B9B9B]">
                <p className="gateway_card_p_value">
                  {Number(gateway.numberOfFailedTransactions).toLocaleString()}
                </p>
                <p className="gateway_card_p">Number of fail transactions</p>
              </div>
              <div className="pt-[1.5rem] justify-between flex gap-[2rem]">
                <p className="gateway_card_p_value">
                  {Number(
                    gateway.numberOfSuccessfulTransactions,
                  ).toLocaleString()}
                </p>
                <p className="gateway_card_p">
                  Number of successful transactions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Status = ({ status }) => {
  return (
    <div
      className={`${status.style} rounded-[1.8rem] text-[1.2rem] font-[500] px-[1.5rem] py-[0.5rem]`}
    >
      {" "}
      {(status.name === "Active" && (
        <span
          className={`w-[.7rem] h-[.7rem] rounded-full inline-block bg-[#12B76A] mr-[0.5rem]`}
        ></span>
      )) ||
        (status.name === "Inactive" && (
          <span
            className={`w-[.7rem] h-[.7rem] rounded-full inline-block bg-[#8895A7] mr-[0.5rem]`}
          ></span>
        ))}{" "}
      {status.name}
    </div>
  );
};

const formatGatewayList = (gateways) =>
  gateways.map((row) => ({
    id: row.payment_gateway.name,
    name: row.payment_gateway.label,
    image: row.payment_gateway.logo_url,
    link: row.payment_gateway.home_page_url,
    status: [
      row.is_enabled && {
        name: "Active",
        style: "bg-[#ECFDF3] text-[#027A48]",
      },
      row.is_configured && {
        name: "Configured",
        style: "bg-[#EFDAF6] text-[#AF47D2]",
      },
    ],
    apiUpTime: "99.999",
    apiResponseTime: "278",
    numberOfClicksOnTheGateway: "32849",
    TotalTransactions: "18599",
    numberOfFailedTransactions: "200",
    numberOfSuccessfulTransactions: "1599",
  }));

export default Gateways;
