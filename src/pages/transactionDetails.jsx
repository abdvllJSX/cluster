import { apiGetGateway } from "@/api/gateway.ts";
import { apiGetTransactionDetails } from "@/api/transaction.ts";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
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

  const {
    isPending: gatewayLoading,
    isError: gatewayError,
    isSuccess: gatewaySuccess,
    data: response,
    error: gatewayLoadingError,
  } = useQuery({
    queryKey: ["gateway"],
    queryFn: () => apiGetGateway(id),
    retry: false,
    refetchOnWindowFocus: false,
  });

  const {
    isPending: transactionDetailsLoading,
    isError: transactionDetailsError,
    isSuccess: transactionDetailsSuccess,
    data: transactionDetailsData,
    error: transactionDetailsLoadingError,
  } = useQuery({
    queryKey: ["transactionDetails"],
    queryFn: () => apiGetTransactionDetails(trxID),
    retry: false,
    refetchOnWindowFocus: false,
  });

  const { data: gateway } = response ?? {};
  const { data: transactionDetails = {} } = transactionDetailsData ?? [];

  const breadcrumbItems = [
    {
      label: "Overview",
      path: `/dashboard`,
    },
    {
      label: gateway?.label,
      path: `/gateway-details/${id}`,
    },
    {
      label: "See full details",
      path: `/gateway-details/${id}/transactions/${trxID}`,
      active: true,
    },
  ];

  const content = [
    {
      title: "Transaction Ref",
      value: transactionDetails?.trans_reference?.toUpperCase(),
    },
    {
      title: "Customer Name",
      value: transactionDetails?.customer?.fullname,
    },
    {
      title: "Customer Email",
      value: transactionDetails?.customer?.contact_email,
    },
    {
      title: "Gateway Ref",
      value: transactionDetails?.gateway_reference?.toUpperCase(),
    },
    {
      title: "Payment Target",
      value: transactionDetails?.entity_target_type?.toUpperCase(),
    },
    {
      title: "Total Amount",
      value: transactionDetails?.amount,
    },
    {
      title: "Paid Amount",
      value: transactionDetails?.total_paid,
    },
    {
      title: "Created At",
      value: transactionDetails?.created_at,
    },
    {
      title: "Payment Status",
      value: transactionDetails?.payment_status,
    },
    {
      title: "Transaction Time",
      value: "00.04",
    },
    {
      title: "Device Type",
      value: "NA",
    },
    {
      title: "Attempts",
      value: "NA",
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
              <Link
                to={`/gateway-details/${id}/transactions/${trxID}/attempts`}
              >
                View all attempts
              </Link>
            </Button>
          </div>
          <div className="mt-[5rem] sm:mt-[0]">
            <h1 className="text-[2.8rem] sm:text-[2rem] font-[600] text-[#000000]">
              Transaction Details
            </h1>
            {/*<Breadcrumbs items={breadcrumbItems} className="sm:hidden" />*/}
            <Button
              variant={"outline"}
              asChild
              className="px-[2rem] sm:w-full hidden sm:flex my-[2rem] py-[1.7rem] rounded-[0.5rem] text-[#AF47D2] border-[#AF47D2] hover:bg-[#AF47D2] hover:text-white font-[600] text-[1.6rem]"
            >
              <Link
                to={`/gateway-details/${id}/transactions/${trxID}/attempts`}
              >
                View all attempts
              </Link>
            </Button>
            <div className="grid w-[90%] mt-[4rem] sm:mt-[2rem] grid-cols-2 sm:grid-cols-1 gap-[2rem]">
              <div className="flex flex-col sm:gap-[2.5rem] gap-[3rem]">
                {content.slice(0, 9).map((item, index) => (
                  <Content
                    content={item}
                    key={index}
                    loading={transactionDetailsLoading}
                  />
                ))}
              </div>
              <div className="flex flex-col sm:gap-[2.5rem] gap-[2rem]">
                {content.slice(9).map((item, index) => (
                  <Content
                    content={item}
                    key={index}
                    loading={transactionDetailsLoading}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </MaxContainer>
    </section>
  );
};

const Content = ({ content, loading }) => {
  return (
    <div className="flex flex-col gap-[1rem]">
      <p className="text-[1.4rem] font-[400] text-[#535862]">{content.title}</p>
      {loading && <Skeleton className={`w-[8rem] h-[2rem] rounded-[2rem]`} />}
      {!loading && (
        <>
          {content.title === "Payment Status" ? (
            <StatusIndicator status={content.value} />
          ) : (
            <p
              className={`text-[1.6rem] font-[500] ${["Attempts", "Errors"].includes(content.title) ? "text-[#FF0000]" : "text-[#000000]"}`}
            >
              {content.value}
            </p>
          )}
        </>
      )}
    </div>
  );
};
export default TransactionDetails;
