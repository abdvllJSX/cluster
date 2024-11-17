import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

import MaxContainer from "../common/maxcontainer";
import { Button } from "../ui/button";
import { apiGetPaymentGateways } from "../../api/gateway";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";

const Overview = () => {

  /* const { data, error, mutate } = useMutation({
     mutationFn: () => apiGetPaymentGateways(),
     onSuccess: ({ data }) => {
       console.log('success')
     },
     onError: ({ error }) => {
       console.log('error:', error)
     }
   })
 
   useEffect(() => {
     mutate()
   }, [])
 */

  const Cards = [
    {
      title: "All payment gateway",
      value: "9",
      increament: true,
    },
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
  return (
    <section className="pt-[10rem] sm:pt-[9rem]">
      <MaxContainer>
        <div className="container">
          <div className="flex sm:flex-col justify-between items-center">
            <div className="mt-[2rem] sm:mt-[0] sm:mb-[1.5rem]">
              <h1 className="header_i sm:mb-[.8rem]">Overview</h1>
              <p className="text-[#535862] font-[400]">
                Simplify payment options for your business with cluster
              </p>
            </div>

            <Button
              asChild
              className="bg-[#FF9100] sm:self-center  sm:w-full px-[2rem] py-[2rem] rounded-[1rem] text-[1.4rem] font-[600] text-white"
            >
              <Link to={"/add-gateway"}>
                <Plus className="w-[2rem]" /> Add payment gateway
              </Link>
            </Button>
          </div>
          <div className="grid sm:grid-cols-1 grid-cols-3 mt-[3rem] gap-[2rem]">
            {Cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
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

export default Overview;
