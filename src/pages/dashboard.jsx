import { apiListGateway } from "@/api/gateway.ts";
import { useQuery } from "@tanstack/react-query";

import Navbar from "../components/common/navbar";
import Gateways from "../components/home/gateways";
import Overview from "../components/home/overview";

const Dashboard = () => {
  const {
    isPending: gatewaysLoading,
    isError,
    isSuccess,
    data: gateways,
    error: gatewayLoadingError,
  } = useQuery({
    queryKey: ["gateways"],
    queryFn: apiListGateway,
    retry: false,
  });

  return (
    <>
      <Navbar />
      <Overview />
      <Gateways
        isError={isError}
        isSuccess={isSuccess}
        error={gatewayLoadingError}
        loading={gatewaysLoading}
        gateways={gateways}
      />
    </>
  );
};

export default Dashboard;
