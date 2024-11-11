import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

import Breadcrumbs from "../components/common/Breadcrumbs";
import MaxContainer from "../components/common/maxcontainer";
import Navbar from "../components/common/navbar";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

const EditProfile = () => {
  const breadcrumbItems = [
    {
      path: `/`,
      label: "Overview",
    },
    {
      path: `/profile`,
      label: "Profile",
    },
    {
      path: `/profile/edit`,
      label: "Edit profile",
      active: true,
    },
  ];

  return (
    <section className="">
      <Navbar />
      <MaxContainer>
        <div className="container py-[10rem]">
          <div className="mt-[3rem] sm:hidden flex justify-between items-center">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
          <Button
            variant={"ghost"}
            asChild
            className="hidden sm:flex px-0 self-start w-fit mb-[4rem] text-black"
          >
            <Link to={"/profile"}>
              <ChevronLeft size={20} className="text-[1.8rem]" />
              <p className="text-[1.8rem]">Edit profile</p>
            </Link>
          </Button>
          <h1 className="text-[3rem] font-[600] sm:text-[2.2rem] text-[#000000] my-[4rem] sm:my-[1rem]">
            Edit profile
          </h1>
          <div className="flex  gap-[3rem]">
            <img src="/img/quotient.svg" alt="quotient" className="w-[9rem]" />

            <div className="border border-[#E0E0E0] rounded-[1rem] py-[1rem] sm:px-[2rem] px-[6rem]">
              <img
                src="/img/cloud.svg"
                alt="cloud"
                className="w-[5rem] sm:w-[6rem] mx-auto"
              />
              <div className="max-w-[30rem] text-center">
                <p className="text-[1.7rem] sm:text-[1.3rem] font-[400] text-[#535862]">
                  <span className="text-[#6941C6] font-[600]">
                    Click to upload
                  </span>{" "}
                  or drag and drop SVG, PNG, JPG or GIF (max. 800x400px)
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[5rem]">
            <h2 className="text-[1.8rem] font-[400] mb-[3rem] text-[#000000]">
              Business info
            </h2>
            <div className=" border-t pt-[3rem] border-[#E0E0E0] flex flex-col gap-[2rem]">
              <div className="max-w-[55rem] rounded-[1rem]">
                <Label className="text-[1.6rem] font-[500] text-[#535862]">
                  Business name
                </Label>
                <Input className="max-w-[40rem] rounded-[1rem] py-[2rem] text-[1.5rem] mt-[.5rem] border-[#E0E0E0] shadow-[0px_1px_2px_0px_#0A0D120D]" />
              </div>
              <div className="max-w-[55rem] rounded-[1rem]">
                <Label className="text-[1.6rem] font-[500] text-[#535862]">
                  Business phone number
                </Label>
                <Input className="max-w-[40rem] rounded-[1rem] py-[2rem] text-[1.5rem] mt-[.5rem] border-[#E0E0E0] shadow-[0px_1px_2px_0px_#0A0D120D]" />
              </div>
            </div>
          </div>
          <div className="mt-[4rem] max-w-[55rem]">
            <h2 className="text-[1.8rem] font-[400] mb-[3rem] text-[#000000]">
              Personal info
            </h2>
            <div className=" border-t pt-[3rem] border-[#E0E0E0] grid grid-cols-2 gap-[3rem]">
              <div className="max-w-[55rem] rounded-[1rem]">
                <Label className="text-[1.6rem] font-[500] text-[#535862]">
                  First name
                </Label>
                <Input className="max-w-[40rem] rounded-[1rem] py-[2rem] text-[1.5rem] mt-[.5rem] border-[#E0E0E0] shadow-[0px_1px_2px_0px_#0A0D120D]" />
              </div>
              <div className="max-w-[55rem] rounded-[1rem]">
                <Label className="text-[1.6rem] font-[500] text-[#535862]">
                  Last name
                </Label>
                <Input className="max-w-[40rem] rounded-[1rem] py-[2rem] text-[1.5rem] mt-[.5rem] border-[#E0E0E0] shadow-[0px_1px_2px_0px_#0A0D120D]" />
              </div>
            </div>
            <div className="max-w-[55rem] mt-[2rem] rounded-[1rem]">
              <Label className="text-[1.6rem] font-[500] text-[#535862]">
                Email
              </Label>
              <Input className="max-w-[40rem] rounded-[1rem] py-[2rem] text-[1.5rem] mt-[.5rem] border-[#E0E0E0] shadow-[0px_1px_2px_0px_#0A0D120D]" />
            </div>
          </div>

          <Button className="px-[3.5rem] bg-[#FF9100] py-[2rem] rounded-[1rem] text-[1.5rem] mt-[4rem]">
            Update profile
          </Button>
        </div>
      </MaxContainer>
    </section>
  );
};

export default EditProfile;
