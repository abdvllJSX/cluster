import MaxContainer from "../../common/maxcontainer";
import { Button } from "../../ui/button";

const Hero = () => {
  const brands = [
    {
      path: "/img/_paystack.png",
      style: "w-[9rem] sm:w-[11rem]",
      name: "paystack",
    },
    {
      path: "/img/_moniepoint.png",
      style: "w-[7rem] sm:w-[11rem]",
      name: "moniepoint",
    },
    {
      path: "/img/_opay.png",
      style: "w-[7rem] sm:w-[6rem]",
      name: "opay",
    },
    {
      path: "/img/_nomba.png",
      style: "w-[8rem] sm:w-[10rem]",
      name: "nomba",
    },
    {
      path: "/img/_squad.png",
      style: "w-[8rem] sm:w-[6rem]",
      name: "squad",
    },
    {
      path: "/img/_fern.png",
      style: "w-[8rem] sm:w-[6rem]",
      name: "fern",
    },
    {
      path: "/img/_remita.png",
      style: "w-[8rem] sm:w-[6rem]",
      name: "remita",
    },
  ];
  return (
    <section className="py-[10rem] sm:pt-[7rem] sm:pb-[5rem]">
      <MaxContainer>
        <div className="container pt-[5rem] flex sm:flex-col items-center justify-between">
          <div className="">
            <h1 className="text-[5.5rem] sm:text-[3.5rem] sm:leading-[4.5rem] leading-[6rem] max-w-[55rem] font-[600]">
              Single point integration for online payment collection
            </h1>
            <div className="mt-[4rem] flex sm:flex-col gap-[1rem]">
              <Button className="text-white rounded-[.5rem] sm:w-full font-[600] py-[1.7rem] bg-[#FF9100] px-[1.8rem] text-[1.4rem]">
                Create an account
              </Button>
              <Button
                className="bg-transparent font-[600] text-[1.4rem] sm:w-full border-[.165rem] border-[#D5D7DA] text-[#AF47D2] rounded-[.5rem] py-[1.7rem] px-[1.7rem]"
                variant={"ghost"}
              >
                Contact Support
              </Button>
            </div>
            <div className="mt-[3rem]">
              <p className="text-[1.5rem] sm:text-[1.6rem] font-[400] mb-[.7rem]">
                Connected Gateways
              </p>
              <div className="flex sm:flex-wrap items-center gap-[1.5rem]">
                {brands.map((brand, index) => (
                  <img
                    src={brand.path}
                    alt={brand.name}
                    className={brand.style}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
          <img
            src="/img/_hero_image.png"
            alt="hero"
            className="w-[45%] h-[48rem] sm:w-full sm:h-auto sm:mt-[5rem] object-contain"
          />
        </div>
      </MaxContainer>
    </section>
  );
};

export default Hero;
