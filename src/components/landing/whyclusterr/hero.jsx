import MaxContainer from "../../common/maxcontainer";
import Navbar from "../nav";

const Hero = () => {
  return (
    <section className="bg-[#FBF0FF] pt-[10rem]">
      <Navbar />
      <MaxContainer>
        <div className="container pb-[10rem] sm:pb-[4rem] sm:pt-[2rem] pt-[8rem]">
          <p className="text-center bg-[#f7d8ff] mb-[1.5rem] w-fit mx-auto px-[1rem] rounded-[1.3rem] text-[#AF47D2]">
            Why Cluster?
          </p>

          <h1 className="font-[600] text-[4rem] sm:text-[3.5rem] max-w-[80rem] text-center mb-[2rem] mx-auto">
            Why choose cluster payment gateway management services?
          </h1>
          <p className="text-[1.8rem] max-w-[70rem] text-center mx-auto  text-[#535862]">
            Our payment gateway management services provide your business with
            the tools, expertise, and security needed to handle payments
            smoothly, scale effortlessly, and provide exceptional experiences to
            your customers.
          </p>
        </div>
      </MaxContainer>
    </section>
  );
};

export default Hero;
