import { ChevronLeft, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ThirdStep = ({ onNext, onBack, initialData }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        password: initialData.password || "",
        confirmPassword: initialData.confirmPassword || ""
    });
    const [passwordError, setPasswordError] = useState("");

    const validatePassword = (value) => {
        setFormData(prev => ({ ...prev, password: value }));
        if (value.length < 8) {
            setPasswordError("Password must be at least 8 characters long");
            return false;
        } else {
            setPasswordError("");
            return true;
        }
    };

    const handleSubmit = () => {
        if (validatePassword(formData.password) && formData.password === formData.confirmPassword) {
            console.log({...initialData, ...formData})
        }
    };

    return (
        <div className="my-[3rem]">
            <div className="flex flex-col gap-[2rem]">
                {/* Password Field */}
                <div className="relative">
                    <Label className="text-[1.6rem] font-[400]">Create Password</Label>
                    <div className="relative">
                        <Input 
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="border-[#E0E0E0] placeholder:text-[#979797] placeholder:font-[400] mt-[.5rem] rounded-[.7rem] py-[2rem] text-[1.6rem] font-[400] pr-[4rem]"
                            value={formData.password}
                            onChange={(e) => validatePassword(e.target.value)}
                        />
                        <button 
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        >
                            {showPassword ? <EyeOff size={20} className="w-[2.3rem] h-[2.3rem]" strokeWidth={2} /> : <Eye size={20} className="w-[2.3rem] h-[2.3rem]" strokeWidth={2} />}
                        </button>
                    </div>
                    {passwordError && <p className="text-red-500 text-[1.4rem] mt-1">{passwordError}</p>}
                </div>

                {/* Confirm Password Field */}
                <div className="relative">
                    <Label className="text-[1.6rem] font-[400]">Confirm Password</Label>
                    <div className="relative">
                        <Input 
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm your password"
                            className="border-[#E0E0E0] placeholder:text-[#979797] placeholder:font-[400] mt-[.5rem] rounded-[.7rem] py-[2rem] text-[1.6rem] font-[400] pr-[4rem]"
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                        />
                        <button 
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        >
                            {showConfirmPassword ? <EyeOff size={20} className="w-[2.3rem] h-[2.3rem]" strokeWidth={2} /> : <Eye size={20} className="w-[2.3rem] h-[2.3rem]" strokeWidth={2} />}
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-[3rem] flex gap-[2rem] ml-auto w-fit">
                <Button 
                    variant="outline" 
                    className="text-[1.6rem] font-[600] px-[2rem] rounded-[.7rem] py-[2rem] text-[#414651]"
                    onClick={onBack}
                >
                    <ChevronLeft size={16} strokeWidth={2} /> Back
                </Button>
                <Button 
                    className="text-[1.6rem] font-[600] bg-[#FF9100] px-[2rem] rounded-[.7rem] py-[2rem] text-white"
                    onClick={handleSubmit}
                >
                    Continue
                </Button>
            </div>
        </div>
    );
}

export default ThirdStep;