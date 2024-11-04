import MaxContainer from "../../components/common/maxcontainer";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { useState } from "react";
import { EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { Eye } from "lucide-react";
import { Button } from "../../components/ui/button";

const Login = () => {
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: ""
    });
    return (
        <section>
            <MaxContainer>
                <div className="w-[100vw] h-[100vh] grid place-content-center">
                    <div className="">
                        <h1 className="font-[700] text-[4rem] mb-[2rem]">Log in to your account</h1>
                        <p className="text-center text-[#535862]">Welcome back! Please enter your details.</p>
                        <div className="mt-[2rem] flex flex-col gap-[2.5rem]">
                            <div className="">
                                <Label className="text-[1.6rem] text-[#000000] font-[400]">Email</Label>
                                <Input className="py-[1.7rem] text-[1.6rem] placeholder:text-[1.6rem] placeholder:font-[400] rounded-[.4rem] border-[#E0E0E0] border-[.1rem] placeholder:text-[#979797]" placeholder="Enter your email" />
                            </div>
                            <div className="">
                                <Label className="text-[1.6rem] text-[#000000] font-[400]">Password</Label>
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
                            <Button variant={'ghost'} asChild className="ml-auto flex text-[1.4rem] font-[600] text-[#FF9100] rounded-[1rem] py-[2rem]">
                                <Link to={''}>
                                    Forgot password
                                </Link>
                            </Button>
                        </div>
                        <Button className="bg-[#FF9100] text-[1.4rem] w-full mt-[2rem] py-[1.8rem] rounded-[.6rem]">Log in</Button>
                        <p className="text-[1.4rem] font-[600] text-center mt-[3rem] text-[#535862]">Don’t have an account? <Link to={''} className="text-[#AF47D2]">Sign up</Link></p>
                    </div>
                </div>
            </MaxContainer>
        </section>
    );
}

export default Login;