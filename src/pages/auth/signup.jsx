import { Link } from "react-router-dom";
import { useState } from "react";
import FirstStep from "../../components/auth/signup/firstStep";
import SecondStep from "../../components/auth/signup/secondStep";
import ThirdStep from "../../components/auth/signup/thirdStep";
import MaxContainer from "../../components/common/maxcontainer";

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
                    <div className="pl-[3rem] min-h-[100vh] lg:min-h-[60rem] flex-1 pt-[3rem]">
                        <img src="/nav/cluster_logo.svg" alt="cluster" className="w-[14rem]" />
                        <div className="mx-auto flex flex-col w-[50rem] justify-center py-[5rem]">
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
                            <div className="h-[38rem]">
                                {renderStep()}
                            </div>
                            <p className="text-center text-[#535862]">Already have an account? <Link to="/login" className="text-[#AF47D2]">Log in</Link></p>
                        </div>
                        <div className="flex justify-between mb-[5rem] text-[#535862] font-[400] pr-[3.5rem]">
                            <p className="">© Untitled UI 2077</p>
                            <p className="">help@cluster.com</p>
                        </div>
                    </div>
                    <div className="flex-[1] bg-auth-bg bg-cover bg-center bg-no-repeat min-h-[100vh] lg:min-h-[60rem] lg:min-h-[60rem rounded-l-[4rem]">
                    </div>
                </div>
            </MaxContainer>
        </section>
    );
}

export default Signup;