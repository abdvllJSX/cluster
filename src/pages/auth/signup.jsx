import FinalStep from "@/components/auth/signup/finalStep.jsx";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import FirstStep from "../../components/auth/signup/firstStep";
import SecondStep from "../../components/auth/signup/secondStep";
import ThirdStep from "../../components/auth/signup/thirdStep";
import MaxContainer from "../../components/common/maxcontainer";
import { Button } from "../../components/ui/button";

const Signup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // First step - business info
    businessName: "",
    businessPhone: "",
    // Second step - personal info
    firstName: "",
    lastName: "",
    email: "",
    // Third step - security
    password: "",
    confirmPassword: "",
  });

  const handleStepComplete = (stepData) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <FirstStep onNext={handleStepComplete} initialData={formData} />;
      case 2:
        return (
          <SecondStep
            onNext={handleStepComplete}
            onBack={handleBack}
            initialData={formData}
          />
        );
      case 3:
        return (
          <ThirdStep
            onNext={handleStepComplete}
            onBack={handleBack}
            initialData={formData}
          />
        );
      default:
        return <FinalStep message={formData.message} />;
    }
  };

  return (
    <section className="">
      <MaxContainer>
        <div className="flex sm:flex-col sm:w-[90%] sm:mx-auto">
          <div
            style={{ height: "min(100vh, 70rem)" }}
            className="pl-[3rem] sm:h-[100vh] sm:pl-[0] h-[100%] sm:w-full flex flex-col flex-1 pt-[3rem]"
          >
            <img
              src="/img/cluster_logo.svg"
              alt="cluster"
              className="w-[14rem]"
            />
            <div className="mx-auto sm:mx-[0] flex self-center justify-self-center sm:mt-[4rem] flex-col w-[50rem] sm:w-full justify-center">
              <h1 className="text-[4rem] sm:text-[3rem] text-center sm:text-start font-[600]">
                Sign Up
              </h1>
              <p className="text-[1.6rem] font-[400] sm:mt-[1.8rem] sm:text-start text-center mt-[2.4rem]">
                Simplify payment options for your business with Cluster
              </p>
              <div className="mt-[3.2rem]">
                <div className="relative w-[48rem] sm:w-full h-[.7rem] overflow-hidden rounded-[.4rem] bg-[#F5F5F5]">
                  <div
                    style={{ width: `calc(100% * ${currentStep} / 3)` }}
                    className="absolute transition-all ease-linear inset-0 bg-[#AF47D2]"
                  ></div>
                </div>
                <p className="mt-[.8rem] text-[1.4rem] font-[400]">
                  Step {currentStep}/4
                </p>
              </div>
              {renderStep()}
              {currentStep < 4 && (
                <p className="text-center text-[#535862]">
                  Already have an account?{" "}
                  <Link to="/login" className="text-[#AF47D2]">
                    Log in
                  </Link>
                </p>
              )}
            </div>

            <div className="flex justify-between mt-[7rem] sm:absolute sm:bottom-[2rem] sm:w-full sm:justify-center text-[#535862] font-[400] pr-[3.5rem] sm:pr-[2rem]">
              <p className="sm:hidden">© Untitled UI 2077</p>
              <p className="sm:self-center">help@cluster.com</p>
            </div>
          </div>
          <div className="flex-[1] bg-auth-bg sm:hidden bg-cover bg-center pb-[5rem] bg-no-repeat  pl-[5rem] flex lg:min-h-[60rem] overflow-hidden rounded-l-[4rem]">
            <div className="mt-auto h-fit self-end text-white">
              <p className="font-[400] text-[2.3rem] mb-[2rem] w-[80%]">
                "Cluster expertise and support have been instrumental in our
                business growth. Payment processing has never been easier!"
              </p>
              <div className="">
                <h2 className="font-[600] text-[2.3rem] mb-[.8rem]">
                  Cynthia Williams
                </h2>
                <div className="flex justify-between pr-[5rem] gap-[2rem]">
                  <p className="">Skin Essence </p>
                  <div className="flex gap-[2rem]">
                    <Button className="bg-transparent border w-[5rem] h-[5rem] hover:bg-white hover:text-black rounded-full border-[#FFFFFF80]">
                      <ArrowLeft size={20} strokeWidth={0.75} />
                    </Button>
                    <Button className="bg-transparent border w-[5rem] h-[5rem] rounded-full hover:bg-white hover:text-black border-[#FFFFFF80]">
                      <ArrowRight size={20} strokeWidth={0.75} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxContainer>
    </section>
  );
};

export default Signup;
