import { ALERT_STATES } from "@/lib/utils";
import {
    ArrowPathIcon,
    EnvelopeIcon,
} from "@heroicons/react/24/outline/index.js";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";

import { apiRequestResetPassword } from "../../api/auth";
import MaxContainer from "../../components/common/maxcontainer";
import { Alert } from "../../components/ui/alert";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

const ResetPassword = () => {
    const [formData, setFormData] = useState({
        email: "",
    });
    const [errors, setErrors] = useState({});

    const {
        isPending,
        isError,
        isSuccess,
        data,
        error,
        mutate: resetPasswordMutation,
    } = useMutation({
        mutationFn: (credentials) => apiRequestResetPassword(credentials),
        onSuccess: (data) => {
            console.log(data);
        },
    });

    const validate = () => {
        const newErrors = {};
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            await resetPasswordMutation(formData);
        }
    };

    return (
        <section>
            <MaxContainer>
                <div className="w-[100%] h-[100vh] px-[5rem] sm:px-[2rem]">
                    <Link to={'/'}>
                        <img
                            src="/img/cluster_logo.svg"
                            alt="logo"
                            className="w-[10rem] h-[10rem]"
                        />
                    </Link>
                    <form onSubmit={handleSubmit} className="w-[100%] h-[77%]">
                        <div className="w-[100%] h-[100%] grid place-items-center">
                            <div className="w-[50rem] sm:w-[100%] sm:self-start sm:mt-[5rem] mx-auto">
                                <h1 className="font-[700] text-center sm:text-start text-[4rem] sm:text-[2rem] mb-[1rem]">
                                    Reset password
                                </h1>
                                <p className="text-center sm:text-start text-[#535862]">
                                    Enter your email address to reset password.
                                </p>
                                <div className="mt-[3rem] flex flex-col gap-[2.5rem]">
                                    {isError ? (
                                        <Alert
                                            title={"Password Reset Request Failed"}
                                            alertState={ALERT_STATES.ERROR}
                                            message={error.message}
                                        />
                                    ) : null}
                                    {isSuccess ? (
                                        <Alert
                                            title={"Password Reset Requested"}
                                            alertState={ALERT_STATES.SUCCESS}
                                            message={data.message}
                                        />
                                    ) : null}
                                    <div className="flex flex-col gap-[.5rem]">
                                        <Label className="text-[1.6rem] text-[#000000] font-[400]">
                                            Email
                                        </Label>
                                        <div className="relative">
                                            <Input
                                                className="py-[2rem] text-[1.6rem] font-[400] placeholder:text-[1.6rem] placeholder:font-[400] rounded-[.25rem] border-[#E0E0E0] border-[.1rem] placeholder:text-[#979797] pl-[4.2rem]"
                                                placeholder="Enter your email"
                                                value={formData.email}
                                                onChange={(e) =>
                                                    setFormData((prev) => ({
                                                        ...prev,
                                                        email: e.target.value,
                                                    }))
                                                }
                                            />
                                            <EnvelopeIcon className="w-[2rem] h-[2rem] absolute left-[1.3rem] top-1/2 transform -translate-y-1/2 text-gray-500" />
                                        </div>
                                        {errors.email && (
                                            <p className="text-red-500 text-[1.4rem] mt-1">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <Button
                                    disabled={isPending}
                                    type="submit"
                                    className="bg-[#FF9100] text-[1.4rem] w-full mt-[2rem] py-[1.8rem] rounded-[.25rem]"
                                >
                                    {isPending && (
                                        <ArrowPathIcon className="animate-spin w-[2.3rem] h-[2.3rem]" />
                                    )}
                                    Send reset link
                                </Button>
                                <p className="text-[1.4rem] font-[600] text-center mt-[3rem] text-[#535862]">
                                    Remember your password?{" "}
                                    <Link to={"/onboarding/login"} className="text-[#AF47D2]">
                                        Log in
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </form>
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
