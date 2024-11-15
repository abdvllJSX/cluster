import { ALERT_STATES } from "@/lib/utils";
import {
  ArrowPathIcon,
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline/index.js";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";

import { apiLogin } from "../../api/auth.ts";
import MaxContainer from "../../components/common/maxcontainer";
import { Alert } from "../../components/ui/alert";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

const Login = () => {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = "Email is required";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
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
    mutate: loginMutation,
  } = useMutation({
    mutationFn: (credentials) => apiLogin(credentials),
    onSuccess: ({ data }) => {
      const { sessionData } = data;
      localStorage.setItem("ctx", JSON.stringify(sessionData));
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      await loginMutation(formData);
    }
  };

  return (
    <section>
      <MaxContainer>
        <div className="w-[100%] h-[100vh] px-[5rem] sm:px-[2rem]">
          <img
            src="/img/cluster_logo.svg"
            alt="logo"
            className="w-[10rem] h-[10rem]"
          />
          <form onSubmit={handleSubmit}>
            <div className="w-[100%] h-[75%] grid place-items-center">
              <div className="w-[50rem] sm:w-[100%] mx-auto sm:self-start sm:mt-[4rem] sm:justify-self-start">
                <h1 className="font-[700] sm:text-start text-center text-[4rem] sm:text-[2.2rem] sm:mb-[1rem] mb-[2rem]">
                  Log in to your accounts
                </h1>
                <p className="text-center sm:text-start text-[#535862]">
                  Welcome back! Please enter your details.
                </p>
                <div className="mt-[2rem] flex flex-col gap-[2.5rem]">
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
                  <div className="">
                    <Label className="text-[1.6rem] text-[#000000] font-[400]">
                      Email
                    </Label>
                    <div className="relative">
                      <Input
                        className="py-[2rem] text-[1.6rem] font-[400] placeholder:text-[1.6rem] placeholder:font-[400] rounded-[.25rem] border-[#E0E0E0] border-[.1rem] placeholder:text-[#979797] pl-[4.2rem]"
                        placeholder="Enter your email"
                        value={formData.username}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            username: e.target.value,
                          }))
                        }
                      />
                      <EnvelopeIcon className="w-[2rem] h-[2rem] absolute left-[1.3rem] top-1/2 transform -translate-y-1/2 text-gray-500" />
                    </div>
                    {errors.username && (
                      <p className="text-red-500 text-[1.4rem] mt-1">
                        {errors.username}
                      </p>
                    )}
                  </div>
                  <div className="">
                    <Label className="text-[1.6rem] text-[#000000] font-[400]">
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="border-[#E0E0E0] pl-[1.2rem] placeholder:text-[#979797] mt-[.5rem] rounded-[.25rem] py-[2rem] text-[1.6rem] font-[400] pr-[4rem]"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            password: e.target.value,
                          }))
                        }
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                      >
                        {showConfirmPassword ? (
                          <EyeSlashIcon className="w-[2.3rem] h-[2.3rem]" />
                        ) : (
                          <EyeIcon className="w-[2.3rem] h-[2.3rem]" />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-red-500 text-[1.4rem] mt-1">
                        {errors.password}
                      </p>
                    )}
                  </div>
                </div>
                <Button
                  variant={"ghost"}
                  asChild
                  className="ml-auto sm:hidden mt-[1.5rem] w-fit flex text-[1.4rem] font-[600] text-[#FF9100] rounded-[1rem] py-[2rem]"
                >
                  <Link to={"/onboarding/reset-password"}>Forgot password</Link>
                </Button>
                <Button
                  disabled={isPending}
                  type="submit"
                  className="bg-[#FF9100] text-[1.4rem] w-full mt-[2rem] py-[1.8rem] rounded-[.25rem]"
                >
                  {isPending && (
                    <ArrowPathIcon className="animate-spin w-[2.3rem] h-[2.3rem]" />
                  )}
                  Log in
                </Button>
                <Button
                  variant={"ghost"}
                  asChild
                  className="mx-auto hidden mt-[1.5rem] w-fit sm:flex text-[1.4rem] font-[600] text-[#FF9100] rounded-[.25rem] py-[2rem]"
                >
                  <Link to={"/onboarding/reset-password"}>Forgot password</Link>
                </Button>
                <p className="text-[1.4rem] font-[600] text-center mt-[3rem] text-[#535862]">
                  Don’t have an account?{" "}
                  <Link to={"/onboarding/signup"} className="text-[#AF47D2]">
                    Sign up
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

export default Login;
