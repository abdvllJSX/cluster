import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const SecondStep = ({ onNext, onBack, initialData }) => {
    const [formData, setFormData] = useState({
        firstName: initialData.firstName || "",
        lastName: initialData.lastName || "",
        email: initialData.email || ""
    });
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "Invalid email format";
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
                    <Label className="text-[1.6rem] font-[400]">First name</Label>
                    <Input 
                        placeholder="Enter your first name" 
                        className="border-[#E0E0E0] placeholder:text-[#979797] placeholder:font-[400] mt-[.5rem] rounded-[.7rem] py-[2rem] text-[1.6rem] font-[400]"
                        value={formData.firstName}
                        onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                    />
                    {errors.firstName && <p className="text-red-500 text-[1.4rem] mt-1">{errors.firstName}</p>}
                </div>

                <div className="">
                    <Label className="text-[1.6rem] font-[400]">Last name</Label>
                    <Input 
                        placeholder="Enter your last name" 
                        className="border-[#E0E0E0] placeholder:text-[#979797] placeholder:font-[400] mt-[.5rem] rounded-[.7rem] py-[2rem] text-[1.6rem] font-[400]"
                        value={formData.lastName}
                        onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                    />
                    {errors.lastName && <p className="text-red-500 text-[1.4rem] mt-1">{errors.lastName}</p>}
                </div>

                <div className="">
                    <Label className="text-[1.6rem] font-[400]">Email</Label>
                    <Input 
                        placeholder="Enter your email" 
                        className="border-[#E0E0E0] placeholder:text-[#979797] placeholder:font-[400] mt-[.5rem] rounded-[.7rem] py-[2rem] text-[1.6rem] font-[400]"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    />
                    {errors.email && <p className="text-red-500 text-[1.4rem] mt-1">{errors.email}</p>}
                </div>
            </div>

            <div className="mt-[3rem] flex gap-[2rem] w-fit ml-auto justify-between">
                <Button 
                    type="button"
                    variant="outline" 
                    className="text-[1.6rem] font-[600] px-[2rem] rounded-[.7rem] py-[2rem] text-[#414651]"
                    onClick={(e) => {
                        e.preventDefault();
                        onBack();
                    }}
                >
                    <ChevronLeft size={16} strokeWidth={2} /> Back
                </Button>
                <Button 
                    type="submit"
                    className="text-[1.6rem] font-[600] bg-[#FF9100] px-[2rem] rounded-[.7rem] py-[2rem] text-white"
                >
                    Continue
                </Button>
            </div>
        </form>
    );
}

export default SecondStep;