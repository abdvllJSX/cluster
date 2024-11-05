import MaxContainer from "../../components/common/maxcontainer";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { useState } from "react";
import { EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { Eye } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Mail } from "lucide-react";

const Login = () => {
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: ""
    });
    return (
        <section>
            <MaxContainer>
                <div className="w-[100%] h-[100vh] px-[5rem]">
                    <img src="/nav/cluster_logo.svg" alt="logo" className="w-[10rem] h-[10rem]" />
                    <div className="w-[100%] h-[75%] grid place-items-center">
                        <div className="w-[50rem] mx-auto">
                            <h1 className="font-[700] text-center text-[4rem] mb-[2rem]">Log in to your account</h1>
                            <p className="text-center text-[#535862]">Welcome back! Please enter your details.</p>
                            <div className="mt-[2rem] flex flex-col gap-[2.5rem]">
                                <div className="">
                                    <Label className="text-[1.6rem] text-[#000000] font-[400]">Email</Label>
                                    <div className="relative">
                                        <Input
                                            className="py-[1.7rem] text-[1.6rem] font-[400] placeholder:text-[1.6rem] placeholder:font-[400] rounded-[.4rem] border-[#E0E0E0] border-[.1rem] placeholder:text-[#979797] pl-[4.2rem]"
                                            placeholder="Enter your email"
                                        />
                                        <Mail className="w-[2rem] h-[2rem] absolute left-[1.3rem] top-1/2 transform -translate-y-1/2 text-gray-500" strokeWidth={2} />
                                    </div>
                                </div>
                                <div className="">
                                    <Label className="text-[1.6rem] text-[#000000] font-[400]">Password</Label>
                                    <div className="relative">
                                        <Input
                                            type={showConfirmPassword ? "text" : "password"}
                                            placeholder="Enter your password"
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
                            </div>
                            <Button variant={'ghost'} asChild className="ml-auto mt-[1.5rem] w-fit flex text-[1.4rem] font-[600] text-[#FF9100] rounded-[1rem] py-[2rem]">
                                <Link to={'/reset-password'}>
                                    Forgot password
                                </Link>
                            </Button>
                            <Button className="bg-[#FF9100] text-[1.4rem] w-full mt-[2rem] py-[1.8rem] rounded-[.6rem]">Log in</Button>
                            <p className="text-[1.4rem] font-[600] text-center mt-[3rem] text-[#535862]">Don’t have an account? <Link to={'/signup'} className="text-[#AF47D2]">Sign up</Link></p>
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

export default Login;