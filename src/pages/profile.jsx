import MaxContainer from "../components/common/maxcontainer";
import Navbar from "../components/common/navbar";
import Breadcrumbs from "../components/common/Breadcrumbs";
import { useParams } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const Profile = () => {
    const { id, trxID } = useParams();

    const breadcrumbItems = [
        {
            label: "Overview",
            path: `/`
        },
        {
            label: 'Profile',
            path: `/profile`,
            active: true
        }
    ]

    return (
        <section>
            <Navbar />
            <MaxContainer>
                <div className="container py-[10rem]">
                    <Button variant={'ghost'} asChild className="p-[0] hidden w-fit sm:flex mb-[3.5rem] text-[#000000]">
                        <Link to={'/'}>
                            <ChevronLeft size={20} className="text-[1.8rem]" />
                            <p className="text-[1.8rem]">Profile</p>
                        </Link>
                    </Button>

                    <h1 className="text-[2.5rem] hidden sm:block font-[600]">Profile</h1>
                    <div className="mt-[2rem] sm:mt-[1rem] flex justify-between items-center">
                        <div className="sm:hidden">
                            <Breadcrumbs items={breadcrumbItems} />
                        </div>
                        <Button variant="outline" asChild className="px-[2rem] sm:w-full rounded-[.5rem] text-[1.4rem] sm:text-[1.6rem] sm:py-[1.8rem] py-[1.5rem] text-[#AF47D2] border-[#AF47D2]">
                            <Link to={'/profile/edit'}>
                                Edit profile
                            </Link>
                        </Button>
                    </div>
                    <div className="my-[4rem]">
                        <h1 className="text-[3rem] sm:hidden font-[600] text-[#000000]">Profile</h1>
                        <div className="mt-[3rem]">
                            <div className="flex items-center gap-[1rem] sm:gap-[2rem]">
                                <img src="/nav/quotient.svg" alt="profile" className="w-[8rem] sm:w-[6rem] h-auto" />
                                <div className="">
                                    <h3 className="text-[2rem] font-[600] text-[#000000]">DataSquid</h3>
                                    <p className="font-[400] text-[#535862]">dataquid@gmail.com</p>
                                </div>
                            </div>
                            <div className="mt-[3rem]">
                                <p className="text-[1.8rem] font-[500] text-[#535862]">Business info</p>
                                <div className="mt-[2.5rem] border-b py-[2rem] border-[#9B9B9B] border-t">
                                    <div className="flex mb-[3rem] items-center gap-[1rem]">
                                        <p className="text-[#535862] w-[28rem]">Business name</p>
                                        <p className="text-[#000000] font-[600]">DataSquid</p>
                                    </div>
                                    <div className="flex items-center gap-[1rem]">
                                        <p className="text-[#535862] w-[28rem]">Business phone number</p>
                                        <p className="text-[#000000] font-[600]">+2349020349843</p>
                                    </div>

                                    <p className="font-[400] text-[#535862] text-[1.8rem] mt-[5rem]">
                                        Personal info
                                    </p>
                                </div>
                                <div className="flex flex-col w-[50%] sm:w-full gap-[3rem] mt-[1rem]">
                                    <div className="flex w-[100%] items-center gap-[1rem]">
                                        <p className="text-[#535862] w-[28rem]">First name</p>
                                        <p className="text-[#000000] font-[600]">Richard</p>
                                    </div>
                                    <div className="flex items-center gap-[1rem]">
                                        <p className="text-[#535862] w-[28rem]">Last name</p>
                                        <p className="text-[#000000] font-[600]">Ibrahim</p>
                                    </div>
                                    <div className="flex items-center gap-[1rem]">
                                        <p className="text-[#535862] w-[28rem]">Email address</p>
                                        <p className="text-[#000000] font-[600]">hello@richardibrahim.com</p>
                                    </div>
                                </div>

                                <Button asChild className="px-[3rem] mt-[5rem] sm:w-full rounded-[.5rem] text-[1.4rem] py-[2rem] text-white bg-[#FF9100]">
                                    <Link to={'/profile/#'}>
                                        Reset password
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </MaxContainer>
        </section>
    );
}

export default Profile;