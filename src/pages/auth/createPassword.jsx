import MaxContainer from "../../components/common/maxcontainer";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { useState } from "react";
import { EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { Eye } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Mail } from "lucide-react";

const CreatePassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (formData.password.length < 8) {
            setError("Password must be at least 8 characters long");
            return;
        }
        
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        // Add your password reset logic here
        console.log("Password reset successful");
        setError("");
    };

    return (
        <section>
            <MaxContainer>
                <div className="w-[100%] h-[100vh] px-[5rem]">
                    <img src="/nav/cluster_logo.svg" alt="logo" className="w-[10rem] h-[10rem]" />
                    <div className="w-[100%] h-[75%] grid place-items-center">
                        <div className="w-[50rem] mx-auto">
                            <h1 className="font-[700] text-center text-[4rem] mb-[2rem]">Create new password</h1>
                            <p className="text-center text-[#535862]">Enter your new password to complete the reset</p>
                            <form onSubmit={handleSubmit} className="mt-[2rem] flex flex-col gap-[2.5rem]">
                                <div className="">
                                    <Label className="text-[1.6rem] text-[#000000] font-[400]">Create new password</Label>
                                    <div className="relative">
                                        <Input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Create new password"
                                            className="border-[#E0E0E0] pl-[1.2rem] placeholder:text-[#979797] mt-[.5rem] rounded-[.7rem] py-[2rem] text-[1.6rem] font-[400] pr-[4rem]"
                                            value={formData.password}
                                            onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                        >
                                            {showPassword ? <EyeOff size={20} className="w-[2.3rem] h-[2.3rem]" strokeWidth={2} /> : <Eye size={20} className="w-[2.3rem] h-[2.3rem]" strokeWidth={2} />}
                                        </button>
                                    </div>
                                </div>
                                <div className="">
                                    <Label className="text-[1.6rem] text-[#000000] font-[400]">Confirm new password</Label>
                                    <div className="relative">
                                        <Input
                                            type={showConfirmPassword ? "text" : "password"}
                                            placeholder="Confirm new password"
                                            className="border-[#E0E0E0] pl-[1.2rem] placeholder:text-[#979797] mt-[.5rem] rounded-[.7rem] py-[2rem] text-[1.6rem] font-[400] pr-[4rem]"
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
                                {error && <p className="text-red-500 text-[1.4rem]">{error}</p>}
                                <Button type="submit" className="bg-[#FF9100] text-[1.4rem] w-full mt-[2rem] py-[1.8rem] rounded-[.6rem]">
                                    Reset Password
                                </Button>
                            </form>
                            <p className="text-[1.4rem] font-[600] text-center mt-[3rem] text-[#535862]">
                                Remember your password? <Link to="/login" className="text-[#AF47D2]">Login</Link>
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
}

export default CreatePassword;