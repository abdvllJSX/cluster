import { ALERT_STATES } from "@/lib/utils";
import {
  ArrowPathIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline/index.js";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

const ResetPassword = () => {
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: ""
    });
    return (
        <section>
            <MaxContainer>
                <div className="w-[100%] h-[100vh] px-[5rem] sm:px-[2rem]">
                    <Link to={'/'}>
                        <img src="/nav/cluster_logo.svg" alt="logo" className="w-[10rem] h-[10rem]" />
                    </Link>
                    <div className="w-[100%] h-[75%] grid place-items-center">
                        <div className="w-[50rem] sm:w-[100%] sm:self-start sm:mt-[5rem] mx-auto">
                            <h1 className="font-[700] text-center sm:text-start text-[4rem] sm:text-[2rem] mb-[1rem]">Reset password</h1>
                            <p className="text-center sm:text-start text-[#535862]">Enter your email address to reset password.</p>
                            <div className="mt-[3rem] flex flex-col gap-[2.5rem]">
                                <div className="flex flex-col gap-[.5rem]">
                                    <Label className="text-[1.6rem] text-[#000000] font-[400]">Email</Label>
                                    <div className="relative">
                                        <Input
                                            className="py-[1.7rem] text-[1.6rem] font-[400] placeholder:text-[1.6rem] placeholder:font-[400] rounded-[.4rem] border-[#E0E0E0] border-[.1rem] placeholder:text-[#979797] pl-[4.2rem]"
                                            placeholder="Enter your email"
                                        />
                                        <Mail className="w-[2rem] h-[2rem] absolute left-[1.3rem] top-1/2 transform -translate-y-1/2 text-gray-500" strokeWidth={2} />
                                    </div>
                                </div>
                            </div>
                            <Button className="bg-[#FF9100] text-[1.4rem] w-full mt-[2rem] py-[1.8rem] rounded-[.6rem]">Send reset link</Button>
                            <p className="text-[1.4rem] font-[600] text-center mt-[3rem] text-[#535862]">Remember your password? <Link to={'/onboarding/login'} className="text-[#AF47D2]">Log in</Link></p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <p className="">©cluster Inc.</p>

            <p className="">help@cluster.com</p>
          </div>
        </div>
      </MaxContainer>
    </section>
  );
};

export default ResetPassword;
