import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const FirstStep = ({ onNext, initialData }) => {
  const [formData, setFormData] = useState({
    businessName: initialData.businessName || "",
    businessPhone: initialData.businessPhone || "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.businessName.trim()) {
      newErrors.businessName = "Business name is required";
    }
    if (!formData.businessPhone.trim()) {
      newErrors.businessPhone = "Phone number is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onNext(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-[3rem]">
      <div className="flex flex-col gap-[2rem]">
        <div className="">
          <Label className="text-[1.6rem] font-[400]">
            What is your business name?
          </Label>
          <Input
            placeholder="Enter your business name"
            className="border-[#E0E0E0] placeholder:text-[#979797] placeholder:font-[400] mt-[.5rem] rounded-[.25rem] py-[2rem] text-[1.6rem] font-[400]"
            value={formData.businessName}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, businessName: e.target.value }))
            }
          />
          {errors.businessName && (
            <p className="text-red-500 text-[1.4rem] mt-1">
              {errors.businessName}
            </p>
          )}
        </div>

        <div className="">
          <Label className="text-[1.6rem] font-[400]">
            What is your phone number?
          </Label>
          <Input
            placeholder="Enter your phone number"
            className="border-[#E0E0E0] placeholder:text-[#979797] placeholder:font-[400] mt-[.5rem] rounded-[.25rem] py-[2rem] text-[1.6rem] font-[400]"
            value={formData.businessPhone}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                businessPhone: e.target.value,
              }))
            }
          />
          {errors.businessPhone && (
            <p className="text-red-500 text-[1.4rem] mt-1">
              {errors.businessPhone}
            </p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        className="w-full mt-[3rem] text-[1.6rem] font-[600] bg-[#FF9100] rounded-[.25rem] py-[2rem] text-white"
      >
        Continue
      </Button>
    </form>
  );
};

export default FirstStep;
