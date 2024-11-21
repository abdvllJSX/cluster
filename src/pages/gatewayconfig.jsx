import { apiCreateGateway, apiGetGatewayByName } from "@/api/gateway.ts";
import ConfigForm from "@/components/gettwayDetails/config-form/index.jsx";
import { Alert } from "@/components/ui/alert.tsx";
import { ALERT_STATES } from "@/lib/utils";
import {
  ArrowPathIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline/index.js";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Breadcrumbs from "../components/common/Breadcrumbs";
import MaxContainer from "../components/common/maxcontainer";
import Navbar from "../components/common/navbar";
import { Button } from "../components/ui/button";

const GatewayConfig = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [selectedOption, setSelectedOption] = useState({});
  const [formData, setFormData] = useState({});

  const {
    isPending: gatewayLoading,
    isError: gatewayLoadingIsError,
    data: response,
    error: gatewayLoadingError,
  } = useQuery({
    queryKey: ["getGatewayByName"],
    queryFn: () => apiGetGatewayByName(id),
    retry: false,
  });

  const { data: gatewayDetail } = response ?? {};

  const options = [
    {
      idx: 1,
      title: (name) => `No, i don’t have an account with ${name}?`,
      description:
        "Click on the link below to create an account and get your configuration details (payment live keys, test keys and turn on/off payment gateway)",
      check: true,
    },
    {
      idx: 2,
      title: (name) => `Yes, I have an account with ${name}`,
      description:
        "Complete your configuration by adding your payment live keys, test keys and turn on/off payment gateway below",
      check: false,
    },
  ];

  const handleOptionClick = (index) => {
    const option = options.find((entry) => entry.idx === index);
    setSelectedOption(option);
    if (option.idx === 2) {
      const data = gatewayDetail.config_options.configKeys.reduce(
        (obj, row) => ({ ...obj, [row.key]: "" }),
        {},
      );
      setFormData(data);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    for (const key of Object.keys(formData)) {
      const value = formData[key];
      if (!value) {
        const { label } = gatewayDetail.config_options.configKeys.find(
          (row) => row.key === key,
        );
        newErrors[key] = `${label} is required`;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const {
    isPending,
    isError,
    isSuccess,
    data,
    error,
    mutate: createGatewayMutation,
  } = useMutation({
    mutationFn: (payload) => apiCreateGateway(payload),
    onSuccess: () => {
      navigate("/dashboard");
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      await createGatewayMutation({
        paymentGatewayId: gatewayDetail.id,
        gatewayConfig: formData,
      });
    }
  };

  const breadcrumbItems = [
    { label: "Overview", path: "/dashboard" },
    { label: "Add Payment Gateway", path: "/add-gateway" },
    { label: "Configure payment gateway", path: `/add-gateway/${id}` },
  ];

  return (
    <section>
      <Navbar />
      <MaxContainer>
        <div className="container pt-[12rem] pb-[15rem] sm:pt-[9rem]">
          <Button
            variant={"ghost"}
            asChild
            className="p-[0] hidden w-fit sm:flex mb-[3.5rem] text-[#000000]"
          >
            <Link to={"/add-gateway"}>
              <ChevronLeft size={20} className="text-[1.8rem]" />
              <p className="text-[1.8rem]">Configure payment gateway</p>
            </Link>
          </Button>
          <Breadcrumbs items={breadcrumbItems} className="sm:hidden" />
          {gatewayLoading && (
            <div className="flex flex-col self-center items-center text-2xl p-4">
              <ArrowPathIcon className="animate-spin w-[2.3rem] h-[2.3rem]" />
              Loading gateway details...
            </div>
          )}

          {!gatewayLoading && gatewayLoadingIsError && (
            <div className="flex flex-col self-center items-center text-2xl p-4">
              <ExclamationTriangleIcon className="w-[2.3rem] h-[2.3rem]" />
              {gatewayLoadingError.message}
            </div>
          )}

          {!gatewayLoading && gatewayDetail && (
            <div className="">
              <h1 className="header_i sm:text-[2.3rem] my-[4rem] sm:mb-[2rem]">
                Add {gatewayDetail.label}
              </h1>
              <div className="">
                <h2 className="text-[1.8rem] mb-[.5rem] text-[#000000] font-[600]">
                  Do you have an account with {gatewayDetail.label}?
                </h2>
                <p className="font-[400] text-[#414651]">
                  Select either yes or no
                </p>

                <div className="flex sm:flex-col gap-6 max-w-[109rem] mt-[3rem]">
                  {options.map((option, index) => (
                    <label
                      htmlFor={"select-gateway-option-" + index}
                      key={index}
                      className={`
                          flex-1 flex rounded-[.7rem] gap-[1.5rem] items-start bg-transparent border-2 cursor-pointer
                          border-[#DFB5ED] p-8 hover:border-purple-500
                          ${selectedOption.idx === option.idx ? "bg-[#FBF0FF] sm:bg-[#FBF0FF]" : "bg-white sm:bg-white"}
                          transition-colors duration-200
                      `}
                    >
                      <input
                        type="radio"
                        id={"select-gateway-option-" + index}
                        name="select-gateway-option"
                        onChange={() => handleOptionClick(option.idx)}
                        checked={selectedOption.idx === option.idx}
                        className="border block w-[2rem] mt-[.5rem] h-[2rem] accent-[#AF47D2]"
                      />
                      <div className="text-left align-top h-full flex w-[90%] flex-col gap-4">
                        <h3 className="text-[1.7rem] font-[600]">
                          {option.title(gatewayDetail.label)}
                        </h3>
                        <p className="font-[400] text-[1.6rem] text-[#535862]">
                          {option.description}
                        </p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              {selectedOption.idx === 1 && (
                <div className="">
                  <p className="text-[1.6rem] decoration-2 text-[#535862] mt-[3rem]">
                    Click the link below to sign up on {gatewayDetail.label}
                  </p>
                  <Link
                    to={"/"}
                    className="text-[1.6rem] underline text-[#3504FA] mt-[.9rem] block"
                  >
                    {gatewayDetail.home_page_url}
                  </Link>
                </div>
              )}

              {selectedOption.idx === 2 && (
                <div className="mt-[3rem]">
                  {isError ? (
                    <Alert
                      title={"Authentication Failed"}
                      alertState={ALERT_STATES.ERROR}
                      message={error.message}
                    />
                  ) : null}
                  {isSuccess ? (
                    <Alert
                      title={"Authentication Complete"}
                      alertState={ALERT_STATES.SUCCESS}
                      message={data.message}
                    />
                  ) : null}
                  <form onSubmit={handleSubmit} className="w-[100%] h-[78%]">
                    <div className="">
                      <h4 className="text-[1.7rem] font-[500]">
                        Gateway Credentials
                      </h4>

                      <div className="mt-[2rem] sm:ml-[1rem] ml-[4rem] flex flex-col gap-[2rem]">
                        <ConfigForm
                          errors={errors}
                          formData={formData}
                          handleInputChange={handleInputChange}
                          config={gatewayDetail.config_options.configKeys}
                        />
                      </div>
                    </div>

                    <div className="mt-[3rem] sm:w-full sm:flex-col gap-[2rem] flex items-center">
                      <Button
                        disabled={isPending}
                        className="w-fit px-[3.8rem] py-[2rem] sm:w-full rounded-[.7rem] bg-[#FF9100] text-[1.6rem] font-[600]"
                      >
                        {isPending && (
                          <ArrowPathIcon className="animate-spin w-[2.3rem] h-[2.3rem]" />
                        )}
                        Save settings
                      </Button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          )}
        </div>
      </MaxContainer>
    </section>
  );
};

export default GatewayConfig;
