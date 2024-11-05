import { Link } from "react-router-dom";
import { useState } from "react";
import FirstStep from "../../components/auth/signup/firstStep";
import SecondStep from "../../components/auth/signup/secondStep";
import ThirdStep from "../../components/auth/signup/thirdStep";
import MaxContainer from "../../components/common/maxcontainer";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../../components/ui/button";

const Signup = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // First step - business info
        businessName: "",
        businessType: "",
        // Second step - personal info
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        // Third step - security
        password: "",
        confirmPassword: ""
    });

    const handleStepComplete = (stepData) => {
        setFormData(prev => ({ ...prev, ...stepData }));
        setCurrentStep(prev => prev + 1);
    };

    const handleBack = () => {
        setCurrentStep(currentStep - 1);
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <FirstStep onNext={handleStepComplete} initialData={formData} />;
            case 2:
                return <SecondStep onNext={handleStepComplete} onBack={handleBack} initialData={formData} />;
            case 3:
                return <ThirdStep onNext={handleStepComplete} onBack={handleBack} initialData={formData} />;
            default:
                return null;
        }
    };

    return (
        <section className="">
            <MaxContainer>
                <div className="flex">
                    <div style={{ height: 'min(100vh, 70rem)' }} className="pl-[3rem] h-[100%] flex flex-col flex-1 pt-[3rem]">
                        <img src="/nav/cluster_logo.svg" alt="cluster" className="w-[14rem]" />
                        <div className="mx-auto flex self-center justify-self-center flex-col w-[50rem] justify-center">
                            <h1 className="text-[4rem] text-center font-[600]">Sign Up</h1>
                            <p className="text-[1.6rem] font-[400] text-center mt-[2.4rem]">Simplify payment options for your business with Cluster</p>
                            <div className="mt-[3.2rem]">
                                <div className="relative w-[48rem] h-[.7rem] overflow-hidden rounded-[.4rem] bg-[#F5F5F5]">
                                    <div
                                        style={{ width: `calc(100% * ${currentStep} / 3)` }}
                                        className="absolute transition-all ease-linear inset-0 bg-[#AF47D2]"
                                    ></div>
                                </div>
                                <p className="mt-[.8rem] text-[1.4rem] font-[400]">Step {currentStep}/3</p>
                            </div>
                            {renderStep()}
                            <p className="text-center text-[#535862]">Already have an account? <Link to="/login" className="text-[#AF47D2]">Log in</Link></p>
                        </div>

                        <div className="flex justify-between mt-[7rem] text-[#535862] font-[400] pr-[3.5rem]">
                            <p className="">© Untitled UI 2077</p>
                            <p className="">help@cluster.com</p>
                        </div>
                    </div>
                    <div className="flex-[1] bg-auth-bg bg-cover bg-center pb-[5rem] bg-no-repeat  pl-[5rem] flex lg:min-h-[60rem] overflow-hidden rounded-l-[4rem]">
                        <div className="mt-auto h-fit self-end text-white">
                            <p className="font-[400] text-[2.3rem] mb-[2rem] w-[80%]">"Cluster expertise and support have been instrumental in our business growth. Payment processing has never been easier!"</p>
                            <div className="">
                                <h2 className="font-[600] text-[2.3rem] mb-[.8rem]">Cynthia Williams</h2>
                                <div className="flex justify-between pr-[5rem] gap-[2rem]">
                                    <p className="">Skin Essence </p>
                                    <div className="flex gap-[2rem]">
                                            <Button className="bg-transparent border w-[5rem] h-[5rem] hover:bg-white hover:text-black rounded-full border-[#FFFFFF80]"><ArrowLeft size={20} strokeWidth={0.75} /></Button>
                                            <Button className="bg-transparent border w-[5rem] h-[5rem] rounded-full hover:bg-white hover:text-black border-[#FFFFFF80]"><ArrowRight size={20} strokeWidth={0.75} /></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MaxContainer>
        </section>
    );
}

export default Signup;