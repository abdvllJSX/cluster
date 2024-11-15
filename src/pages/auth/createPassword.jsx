import { ALERT_STATES } from "@/lib/utils";
import {
  ArrowPathIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline/index.js";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import { apiCreatePassword } from "../../api/auth";
import MaxContainer from "../../components/common/maxcontainer";
import { Alert } from "../../components/ui/alert";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

const CreatePassword = () => {
  const [searchParams] = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm password is required";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Password do not match";
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
    mutate: createPasswordMutation,
  } = useMutation({
    mutationFn: (credentials) => apiCreatePassword(credentials),
    onSuccess: ({ data }) => {
      console.log(data);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const recoveryToken = searchParams.get("token");
      await createPasswordMutation({
        recoveryToken,
        password: formData.password,
      });
    }
  };

  return (
    <section>
      <MaxContainer>
        <div className="w-[100%] h-[100vh] px-[5rem]">
          <img
            src="/img/cluster_logo.svg"
            alt="logo"
            className="w-[10rem] h-[10rem]"
          />
          <div className="w-[100%] h-[75%] grid place-items-center">
            <div className="w-[50rem] mx-auto">
              <h1 className="font-[700] text-center text-[4rem] mb-[2rem]">
                Create new password
              </h1>
              <p className="text-center text-[#535862]">
                Enter your new password to complete the reset
              </p>
              <form
                onSubmit={handleSubmit}
                className="mt-[2rem] flex flex-col gap-[2.5rem]"
              >
                {isError ? (
                  <Alert
                    title={"Password Reset Failed"}
                    alertState={ALERT_STATES.ERROR}
                    message={error.message}
                  />
                ) : null}
                {isSuccess ? (
                  <Alert
                    title={"Password Reset Complete"}
                    alertState={ALERT_STATES.SUCCESS}
                    message={data.message}
                  />
                ) : null}
                <div className="">
                  <Label className="text-[1.6rem] text-[#000000] font-[400]">
                    Create new password
                  </Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Create new password"
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
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    >
                      {showPassword ? (
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
                <div className="">
                  <Label className="text-[1.6rem] text-[#000000] font-[400]">
                    Confirm new password
                  </Label>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm new password"
                      className="border-[#E0E0E0] pl-[1.2rem] placeholder:text-[#979797] mt-[.5rem] rounded-[.25rem] py-[2rem] text-[1.6rem] font-[400] pr-[4rem]"
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          confirmPassword: e.target.value,
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
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-[1.4rem] mt-1">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
                <Button
                  disabled={isPending}
                  type="submit"
                  className="bg-[#FF9100] text-[1.4rem] w-full mt-[2rem] py-[1.8rem] rounded-[.25rem]"
                >
                  {isPending && (
                    <ArrowPathIcon className="animate-spin w-[2.3rem] h-[2.3rem]" />
                  )}
                  Reset Password
                </Button>
              </form>
              <p className="text-[1.4rem] font-[600] text-center mt-[3rem] text-[#535862]">
                Remember your password?{" "}
                <Link to="/onboarding/login" className="text-[#AF47D2]">
                  Login
                </Link>
              </p>
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

export default CreatePassword;
