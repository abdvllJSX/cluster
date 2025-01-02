import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Breadcrumbs from "../components/common/Breadcrumbs";
import MaxContainer from "../components/common/maxcontainer";
import NavBar from "../components/common/navbar";
import { Button } from "../components/ui/button";
import { Loader2 } from "lucide-react"
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "../components/ui/label";
import { Switch } from "../components/ui/switch";
import { Textarea } from "../components/ui/textarea";
import { apiGetGatewayByName, apiCreateGateway } from "@/api/gateway.ts";

const EditGateway = () => {
  const { id } = useParams();

  const {
    isPending: gatewayLoading,
    isError: gatewayLoadingIsError,
    data: response,
    error: gatewayLoadingError,
  } = useQuery({
    queryKey: ["getGatewayByName"],
    queryFn: () => apiGetGatewayByName(id),
    retry: false,
    refetchOnWindowFocus: false,
  });

  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (!gatewayLoadingError) {
      setFormData(prev => ({
        ...prev,
        ...response?.data?.config_options?.configKeys.reduce((obj, row) => ({ ...obj, [row.key]: "" }), {})
      }))
    }
  }, [gatewayLoading])
  
  const { data: gatewayDetail } = response ?? {};

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
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
      toast.success("Payment gateway updated successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createGatewayMutation({
      paymentGatewayId: gatewayDetail.id,
      gatewayConfig: formData,
    });
  };

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
      label: "Edit payment gateway",
      path: `/gateway-details/${id}/edit`,
      active: true,
    },
  ];
  return (
    <section>
      <NavBar />
      <MaxContainer>
        <div className="container py-[10rem]">
          <Button
            asChild
            className="hidden sm:flex sm:w-fit sm:text-[#000000] p-[0] text-[1.4rem] font-[500] gap-[.5rem]"
            variant={"ghost"}
          >
            <Link to={`/gateway-details/${id}`}>
              <ChevronLeft className="w-[2rem] h-auto" />
              Edit paystack gateway
            </Link>
          </Button>
          <div className="mt-[3rem] sm:mt-[3.5rem]">
            <Breadcrumbs items={breadcrumbItems} className="sm:hidden" />

            <h1 className="text-[3rem] sm:text-[2rem] sm:my-[2rem] my-[4rem] font-[600] text-[#000000]">
              Edit payment gateway
            </h1>

            <div className="mt-[3rem] sm:mt-[2rem]">
              {/* <div className="">
                <h4 className="text-[1.7rem] font-[500]">Payment live keys</h4>

                <div className="mt-[2rem] ml-[4rem] sm:ml-[0] flex flex-col gap-[2rem]">
                  <div className="text-[1.3rem]">
                    <Label
                      className="mb-[.5rem] block text-[1.3rem] text-[#414651]"
                      htmlFor="liveSecretKey"
                    >
                      Live secret key
                    </Label>
                    <Textarea
                      id="liveSecretKey"
                      value={formData.liveSecretKey}
                      onChange={handleInputChange}
                      className="placeholder:text-[#717680] placeholder:text-[400] rounded-[.7rem] h-[7rem] resize-none text-[1.4rem]"
                      placeholder="Live secret key"
                    />
                  </div>
                  <div className="text-[1.3rem]">
                    <Label
                      className="mb-[.5rem] block text-[1.3rem] text-[#414651]"
                      htmlFor="liveCallbackUrl"
                    >
                      Live call back url
                    </Label>
                    <Textarea
                      id="liveCallbackUrl"
                      value={formData.liveCallbackUrl}
                      onChange={handleInputChange}
                      className="placeholder:text-[#717680] placeholder:text-[400] rounded-[.7rem] h-[7rem] resize-none text-[1.4rem]"
                      placeholder="Live call back url"
                    />
                  </div>
                  <div className="text-[1.3rem]">
                    <Label
                      className="mb-[.5rem] block text-[1.3rem] text-[#414651]"
                      htmlFor="liveWebhookUrl"
                    >
                      Live webhook url
                    </Label>
                    <Textarea
                      id="liveWebhookUrl"
                      value={formData.liveWebhookUrl}
                      onChange={handleInputChange}
                      className="placeholder:text-[#717680] placeholder:text-[400] rounded-[.7rem] h-[7rem] resize-none text-[1.4rem]"
                      placeholder="Live webhook url"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-[4rem]">
                <h4 className="text-[1.7rem] font-[500]">Payment test keys</h4>
                <div className="mt-[2.5rem] ml-[4rem] sm:ml-[0] flex flex-col gap-[2rem]">
                  <div className="text-[1.3rem]">
                    <Label
                      className="mb-[.5rem] block text-[1.3rem] text-[#414651]"
                      htmlFor="testSecretKey"
                    >
                      Test secret key
                    </Label>
                    <Textarea
                      id="testSecretKey"
                      value={formData.testSecretKey}
                      onChange={handleInputChange}
                      className="placeholder:text-[#717680] placeholder:text-[400] rounded-[.7rem] h-[7rem] resize-none text-[1.4rem]"
                      placeholder="Test secret key"
                    />
                  </div>
                  <div className="text-[1.3rem]">
                    <Label
                      className="mb-[.5rem] block text-[1.3rem] text-[#414651]"
                      htmlFor="testPublicKey"
                    >
                      Test public key
                    </Label>
                    <Textarea
                      id="testPublicKey"
                      value={formData.testPublicKey}
                      onChange={handleInputChange}
                      className="placeholder:text-[#717680] placeholder:text-[400] rounded-[.7rem] h-[7rem] resize-none text-[1.4rem]"
                      placeholder="Test public key"
                    />
                  </div>
                </div>
              </div> */}
              {
                gatewayLoading ? (
                  <>
                    <Loader2 className="animate-spin mx-auto w-[2.3rem] h-[2.3rem]" />
                  </>
                ) : (
                  <form onSubmit={handleSubmit} action="" className="flex flex-col gap-[2rem]">
                    {
                      response?.data?.config_options?.configKeys?.map((item, index) => (
                        <div key={index} className="flex flex-col gap-[1rem]">
                          <label
                            htmlFor={item.key}
                            className="text-[1.6rem] font-[500] text-[#535862]">{item.label}</label>
                          {
                            item?.options ? (
                              <Select
                                value={formData[item.key]}
                                defaultValue={item?.options[0]}
                                required
                                onValueChange={(value) => {
                                  setFormData(prevFormData => ({ ...prevFormData, [item.key]: value }));
                                }}>
                                <SelectTrigger className="w-[30rem] max-w-[100%] rounded-[.7rem] h-[4rem] text-[1.4rem] font-[400] capitalize text-[#535862] px-[1.5rem] py-[.5rem]">
                                  <SelectValue placeholder={"select"} />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    {
                                      item?.options.map((option, idx) => (
                                        <SelectItem
                                          className="text-[1.4rem] font-[400] capitalize text-[#535862]"
                                          id={option}
                                          key={idx}
                                          value={option}>{option}</SelectItem>
                                      ))
                                    }
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            ) : (<Textarea
                              key={index}
                              id={item.key}
                              required
                              value={formData[item.key]}
                              onChange={handleInputChange}
                              className="placeholder:text-[#717680] placeholder:text-[400] rounded-[.7rem] h-[7rem] resize-none text-[1.4rem]"
                              placeholder={item.label}
                            />)
                          }

                        </div>
                      ))
                    }

                    <div className="mt-[3rem]">
                      <Button
                        type="submit"
                        className="w-fit sm:w-full px-[3.8rem] py-[2rem] rounded-[.7rem] bg-[#FF9100] text-[1.6rem] font-[600]">
                        {isPending && (<Loader2 className="animate-spin w-[2.3rem] h-[2.3rem]" />)}
                        Update settings
                      </Button>
                    </div>
                  </form>
                )
              }
            </div>
          </div>
        </div>
      </MaxContainer>
    </section>
  );
};

export default EditGateway;
