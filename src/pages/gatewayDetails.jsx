import { useState } from "react";
import CustomCalendar from "../components/common/calender";
import { Input } from "../components/ui/input";
import { apiGetGateway } from "@/api/gateway.ts";
import { apiListGatewayTransactions } from "@/api/transaction.ts";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/common/Breadcrumbs";
import MaxContainer from "../components/common/maxcontainer";
import Navbar from "../components/common/navbar";
import { columns } from "../components/gatewayDetails/table/column";
import DataTable from "../components/gatewayDetails/table/data-table";
import { Button } from "../components/ui/button";
import { convertDateRange } from "../utilis/formatdate";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { toast } from "react-toastify";

const GatewayDetails = () => {
  const { id } = useParams();
  const [search, setSearch] = useState("");
  const [date, setDate] = useState({
    from: "",
    to: ""
  })

  const {
    isPending: gatewayLoading,
    data: response,
  } = useQuery({
    queryKey: ["gateway"],
    queryFn: () => apiGetGateway(id),
    retry: false,
    refetchOnWindowFocus: false,
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const {
    isPending: gatewayTransactionsLoading,
    data: gatewayTransactionsData,
    refetch: refetchGatewayTransactions,
    isRefetching: isGatewayTransactionsRefetching,
  } = useQuery({
    queryKey: ["gatewayTransactions"],
    queryFn: () => apiListGatewayTransactions(
      id,
      {
        ...(search && { trans_reference: search }),
        ...((date.from?.length !== 0 || date.to?.length !== 0) && { created_at: convertDateRange(date) })
      }
    ),
    retry: false,
    refetchOnWindowFocus: false,
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const { data: gateway } = response ?? {};
  const { data: gatewayTransactions = [] } = gatewayTransactionsData ?? [];

  const Cards = [
    {
      title: "Total clicks on payment gateway",
      value: "1250",
      increment: false,
    },
    {
      title: "Total number of transactions",
      value: "432520",
      increment: true,
    },
    {
      title: "Total number of pending transactions",
      value: "86",
      increment: true,
    },
    {
      title: "Total number of failed transactions",
      value: "10",
      increment: false,
    },
    {
      title: "Total number of successful transactions",
      value: "309783",
      increment: true,
    },
  ];

  const breadcrumbItems = [
    { label: "Overview", path: "/dashboard" },
    {
      loading: gatewayLoading,
      label: gateway?.label,
      path: `/gateway-details/${id}`,
      active: true,
    },
  ];

  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 21 || e.target.value.length === 0) {
      setTimeout(() => {
        refetchGatewayTransactions();
      }, 500);
    }
  };

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
              <p className="text-[1.5rem]">{gateway?.label}</p>
            </Link>
          </Button>
          <div className="sm:flex hidden gap-[2rem] sm:gap-[1rem] items-center">
            {gatewayLoading ? (
              <Skeleton className={`w-[8rem] h-[2rem] rounded-[2rem]`} />
            ) : (
              <>
                <img
                  src={gateway?.logo_url}
                  alt={gateway?.label}
                  className="w-[3rem] h-auto"
                />
                <p className="text-[2rem] font-[600] text-[#414651]">
                  {gateway?.label}
                </p>
              </>
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
            {gatewayLoading ? (
              <>
                <Skeleton className={`w-[3rem] h-[3rem] rounded`} />
                <Skeleton className={`w-[16rem] h-[1.5rem] rounded-[2rem]`} />
              </>
            ) : (
              <>
                <img
                  src={gateway?.logo_url}
                  alt={gateway?.label}
                  className="w-[3rem] h-auto"
                />
                <p className="text-[2rem] font-[600] text-[#414651]">
                  {gateway?.label}
                </p>
              </>
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
            <div className="sm:hidden">
              <div className="flex items-center mt-[3rem] mb-[4rem] sm:mb-[2rem] sm:justify-between sm:w-full gap-[1rem] sm:gap-[.5rem]">
                <div className="relative">
                  <Search className="absolute left-[1rem] top-1/2 transform -translate-y-1/2 text-gray-500 w-[1.9rem]" />
                  <Input
                    type="text"
                    placeholder="Search"
                    onChange={handleSearch}
                    value={search}
                    className="pl-[3.5rem] placeholder:font-[400] rounded-[0.5rem] max-w-[35rem] sm:w-[100%] w-[350px] py-[1.8rem] text-[1.5rem]"
                  />
                </div>
                <CustomCalendar
                  date={date}
                  setDate={setDate}
                  refetchFN={refetchGatewayTransactions}
                />
              </div>

              <DataTable
                loading={gatewayTransactionsLoading}
                refetchLoading={isGatewayTransactionsRefetching}
                data={transformTransactions(gatewayTransactions)}
                refetchFN={refetchGatewayTransactions}
                columns={columns}
              />
            </div>
          </div>
        </div>

        <div className="sm:block hidden sm:pb-[5rem]">
          <DataTable
            loading={gatewayTransactionsLoading}
            refetchLoading={isGatewayTransactionsRefetching}
            data={transformTransactions(gatewayTransactions)}
            refetchFN={refetchGatewayTransactions}
            columns={columns}
          />
        </div>
      </MaxContainer>
    </section>
  );
};

const Card = ({ title, value, increment }) => {
  return (
    <div className="bg-[#fff] border-[#E9EAEB] border rounded-[1rem] p-[2rem] shadow-[0px_1px_2px_0px_#0A0D120D]">
      <h2 className="text-[#181D27] text-[1.65rem] mb-[2rem] font-[600]">
        {title}
      </h2>
      <div className="flex items-center justify-between">
        <p className="text-[#181D27] text-[3.3rem] font-[600]">
          {Number(value).toLocaleString()}
        </p>
        {increment ? (
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

const transformTransactions = (transactions) => {
  return transactions.map((transaction) => {
    const { customer } = transaction;
    return {
      trxID: transaction.trans_reference,
      customer: {
        name: customer.fullname,
        email: customer.contact_email,
        image: "/img/Avatar.png",
      },
      gatewayRef: transaction.gateway_reference,
      paymentTarget: transaction.entity_target_type,
      totalAmount: transaction.amount,
      paidAmount: transaction.total_paid,
      status: transaction.payment_status,
    };
  });
};

export default GatewayDetails;
