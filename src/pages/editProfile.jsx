import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { apiUpdateProfile, apiGetMe } from "@/api/profile.ts"
import Breadcrumbs from "../components/common/Breadcrumbs";
import MaxContainer from "../components/common/maxcontainer";
import Navbar from "../components/common/navbar";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { LoaderCircle } from "lucide-react";
import { Textarea } from "../components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";

const EditProfile = () => {
  const {
    isPending: getMeLoading,
    data: profile,
    error: getMeLoadingError
  } = useQuery({
    queryKey: ["getMe"],
    queryFn: apiGetMe,
    retry: false,
    onError: (error) => {
      toast.error(`${error.message}`)
    }
  })

  const profileData = profile?.data
  console.log(profileData)
  const [formData, setFormData] = useState({
    name: "",
    label: "",
    description: "",
    businessPhone: "",
    firstName: "",
    lastName: "",
    phone: ""
  })

  useEffect(() => {
    if (!getMeLoadingError) {
      setFormData(prev => ({
        ...prev,
        name: profileData?.business_information.name,
        label: profileData?.business_information.label,
        description: profileData?.business_information.description,
        businessPhone: profileData?.business_information.business_phone,
        firstName: profileData?.personal_information?.fullname?.split(" ")[0],
        lastName: profileData?.personal_information?.fullname?.split(" ")[1],
        phone: profileData?.personal_information?.phone
      }))
    }
  }, [getMeLoading])

  const checkEmptyField = () => {
    const emptyfieldsArr = []
    Object.entries(formData).map((item) => {
      if (item[1]?.length) {
        emptyfieldsArr.push(item)
      }
    })
    return emptyfieldsArr?.length === 7
  }

  const {
    isPending: updatingProfile,
    mutate: updateProfileMutation
  } = useMutation({
    mutationFn: (payload) => apiUpdateProfile(payload),
    onSuccess: () => {
      toast.success("updated successfully")
    },
    onError: (error) => {
      toast.error(`${error.message}`)
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updateProfileMutation(formData)
  }

  const handleInputChange = (e) => {
    const { id, value } = e.target

    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
    checkEmptyField()
  }

  const breadcrumbItems = [
    {
      path: `/dashboard`,
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
          {/* <div className="flex  gap-[3rem]">
            <img src="/img/quotient.svg" alt="quotient" className="w-[9rem]" />

            <div className="border border-[#D5D7DA] rounded-[1rem] py-[1rem] sm:px-[2rem] px-[6rem]">
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
          </div> */}
          <div className="mt-[5rem]">
            <h2 className="text-[1.8rem] font-[400] mb-[2rem] text-[#000000]">
              Business info
            </h2>
            <div className="border-t pt-[3rem] border-t-[#9B9B9B] w-[100%] max-w-[55rem] flex flex-col gap-[2rem]">
              <div className="grid grid-cols-2 gap-[3rem]">
                <div className="max-w-[55rem] rounded-[1rem]">
                  <Label className="text-[1.6rem] font-[500] text-[#535862]">
                    Business name
                  </Label>
                 {getMeLoading ? <Skeleton className="w-[100%] max-w-[40rem] h-[4.5rem] rounded-[1rem]" /> :
                  <Input
                    id="name"
                    placeholder={formData.name}
                    onChange={handleInputChange}
                    className="max-w-[40rem] rounded-[1rem] py-[2rem] text-[1.5rem] mt-[.5rem] border-[#D5D7DA] shadow-[0px_1px_2px_0px_#0A0D120D]" />}
                </div>

                <div className="max-w-[55rem] rounded-[1rem]">
                  <Label className="text-[1.6rem] font-[500] text-[#535862]">
                    Label
                  </Label>
                  {getMeLoading ? <Skeleton className="w-[100%] max-w-[40rem] h-[4.5rem] rounded-[1rem]" /> : <Input
                    id="label"
                    placeholder={formData.label}
                    onChange={handleInputChange}
                    className="max-w-[40rem] rounded-[1rem] py-[2rem] text-[1.5rem] mt-[.5rem] border-[#D5D7DA] shadow-[0px_1px_2px_0px_#0A0D120D]" />}
                </div>
              </div>

              <div className="max-w-[55rem] rounded-[1rem]">
                <Label className="text-[1.6rem] font-[500] text-[#535862]">
                  Business phone number
                </Label>
               {getMeLoading ? <Skeleton className="w-[100%] max-w-[40rem] h-[4.5rem] rounded-[1rem]" /> : <Input
                  id="businessPhone"
                  onChange={handleInputChange}
                  placeholder={formData.businessPhone}
                  className="max-w-[40rem] rounded-[1rem] py-[2rem] text-[1.5rem] mt-[.5rem] border-[#D5D7DA] shadow-[0px_1px_2px_0px_#0A0D120D]" />}
              </div>

              <div className="max-w-[55rem] rounded-[1rem]">
                <Label className="text-[1.6rem] font-[500] text-[#535862]">
                  Description
                </Label>
                {getMeLoading ? <Skeleton className="w-[100%] max-w-[40rem] h-[10rem] rounded-[1rem]" /> : <Textarea
                  id="description"
                  onChange={handleInputChange}
                  placeholder={formData.description}
                  className="max-w-[40rem] h-[10rem] resize-none rounded-[1rem] py-[.5rem] text-[1.5rem] mt-[.5rem] border-[#D5D7DA] shadow-[0px_1px_2px_0px_#0A0D120D]" />}
              </div>
            </div>
          </div>
          <div className="mt-[4rem] max-w-[55rem]">
            <h2 className="text-[1.8rem] font-[400] mb-[2rem] text-[#000000]">
              Personal info
            </h2>
            <div className=" border-t pt-[3rem] border-t-[#9B9B9B] grid grid-cols-2 gap-[3rem]">
              <div className="max-w-[55rem] rounded-[1rem]">
                <Label className="text-[1.6rem] font-[500] text-[#535862]">
                  First name
                </Label>
               {getMeLoading ? <Skeleton className="w-[100%] max-w-[40rem] h-[4.5rem] rounded-[1rem]" /> : <Input
                  id="firstName"
                  onChange={handleInputChange}
                  placeholder={formData.firstName}
                  className="max-w-[40rem] rounded-[1rem] py-[2rem] text-[1.5rem] mt-[.5rem] border-[#D5D7DA] shadow-[0px_1px_2px_0px_#0A0D120D]" />}
              </div>
              <div className="max-w-[55rem] rounded-[1rem]">
                <Label className="text-[1.6rem] font-[500] text-[#535862]">
                  Last name
                </Label>
               {getMeLoading ? <Skeleton className="w-[100%] max-w-[40rem] h-[4.5rem] rounded-[1rem]" /> : <Input
                  id="lastName"
                  placeholder={formData.lastName}
                  onChange={handleInputChange}
                  className="max-w-[40rem] rounded-[1rem] py-[2rem] text-[1.5rem] mt-[.5rem] border-[#D5D7DA] shadow-[0px_1px_2px_0px_#0A0D120D]" />}
              </div>
            </div>
            <div className="max-w-[55rem] mt-[2rem] rounded-[1rem]">
              <Label className="text-[1.6rem] font-[500] text-[#535862]">
                Personal Phone Number
              </Label>
             {getMeLoading ? <Skeleton className="w-[100%] max-w-[40rem] h-[4.5rem] rounded-[1rem]" /> : <Input
                id="phone"
                placeholder={formData.phone}
                onChange={handleInputChange}
                className="max-w-[40rem] rounded-[1rem] py-[2rem] text-[1.5rem] mt-[.5rem] border-[#D5D7DA] shadow-[0px_1px_2px_0px_#0A0D120D]" />}
            </div>
          </div>

          <Button onClick={handleSubmit} disabled={!checkEmptyField() || getMeLoading} className="px-[3.5rem] bg-[#FF9100] py-[2rem] rounded-[1rem] text-[1.5rem] mt-[4rem]">
            {
              updatingProfile && (
                <LoaderCircle className="animate-spin" />
              )
            }
            Update profile
          </Button>
        </div>
      </MaxContainer>
    </section>
  );
};

export default EditProfile;
