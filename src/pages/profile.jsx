import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@radix-ui/react-label";
import { ChevronLeft } from "lucide-react";
import {
  ArrowPathIcon,
} from "@heroicons/react/24/outline/index.js";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import Breadcrumbs from "../components/common/Breadcrumbs";
import { useNavigate } from "react-router-dom";
import MaxContainer from "../components/common/maxcontainer";
import Navbar from "../components/common/navbar";
import { Button } from "../components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Textarea } from "../components/ui/textarea";
import { apiGetMe, apiSetSecretKey, apiGetSecretKey } from "@/api/profile.ts"
import { Skeleton } from "@/components/ui/skeleton"
import { useState, useEffect } from "react";
import { LoaderCircle } from "lucide-react";
import { toast } from "react-toastify";


const Settings = () => {
  const { id, trxID } = useParams();
  const navigate = useNavigate()
  const {
    isPending: updatingSecretKey,
    data: response,
    error: errorUpdatingSecretKey,
    mutate: createSecretKeyMutation
  } = useMutation({
    mutationFn: (payload) => apiSetSecretKey(payload),
    onSuccess: () => {
      console.log('i have updated sucessfully')
      navigate("/dashboard")
    },
    onError: () => {
      console.log('Error uploading secret key');
      toast.error(`${getSecretKeyLoadingError}`)
    }
  })

  const {
    isPending: getSecretKeyLoading,
    data: secretkeys,
    error: getSecretKeyLoadingError
  } = useQuery({
    queryKey: ["getSecretKey"],
    queryFn: apiGetSecretKey,
    retry: false,
    onError: () => {
      console.log('Error fetching secret key');
      toast.error(`${getSecretKeyLoadingError}`)
    }
  })

  const {
    isPending: getMeLoading,
    data: profile,
    error: getMeLoadingError
  } = useQuery({
    queryKey: ["getMe"],
    queryFn: apiGetMe,
    retry: false,
    onError: () => {
      console.log('Error fetching profile data');
      toast.error(`${getMeLoadingError}`)
    }
  })

  const [formData, setFormData] = useState({
    apiKey: "",
    apiSecret: "",
    webhookURL: "",
    successCallbackURL: "",
    failureCallbackURL: ""
  })

  const {
    isPending: generatingSecretKey,
    data: newSecretKey,
    mutate: generateSecretKeyMutation,
    error: errorGeneratingSecretKey
  } = useMutation({
    mutationFn: (payload) => apiSetSecretKey(payload),
    onSuccess: () => {
      toast.success("Secret Key Generated Successfully!")
    },
    onError: () => {
      console.log('Error generating secret key');
      toast.error(`${errorGeneratingSecretKey}`)
    }
  })

  useEffect(() => {
    if (!getSecretKeyLoading) {
      setFormData((prev) => ({ ...prev, apiSecret: secretkeys?.data?.api_secret, apiKey: secretkeys?.data?.api_key }))
    }
  }, [getSecretKeyLoading])

  useEffect(() => {
    if (!generatingSecretKey) {
      setFormData(prev => ({ ...prev, apiSecret: newSecretKey?.data?.api_secret, apiKey: secretkeys?.data?.api_key }))
    }
  }, [generatingSecretKey])

  console.log(newSecretKey)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createSecretKeyMutation({
      ...formData
    })
  }

  const generateNewSecretKey = async (e) => {
    console.log("generating")
    e.preventDefault()
    await generateSecretKeyMutation({
      apiSecret: 1,
      apiKey: "",
      webhookURL: "",
      successCallbackURL: "",
      failureCallbackURL: ""
    })
  }

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }))
  }

  const breadcrumbItems = [
    {
      label: "Overview",
      path: `/dashboard`,
    },
    {
      label: "Profile",
      path: `/profile`,
      active: true,
    },
  ];

  return (
    <section>
      <Navbar />
      <MaxContainer>
        <div className="container py-[10rem]">
          <Button
            variant={"ghost"}
            asChild
            className="p-[0] hidden w-fit sm:flex mb-[3.5rem] text-[#000000]"
          >
            <Link to={"/dashboard"}>
              <ChevronLeft size={20} className="text-[1.8rem]" />
              <p className="text-[1.8rem]">Profile</p>
            </Link>
          </Button>

          <h1 className="text-[2.5rem] hidden sm:block font-[600]">Profile</h1>
          <div className="mt-[2rem] sm:hidden sm:mt-[1rem] flex justify-between items-center">
            <div className="sm:hidden">
              <Breadcrumbs items={breadcrumbItems} />
            </div>
          </div>
          <div className="my-[4rem] sm:mt-[.7rem]">
            <h1 className="text-[3rem] sm:hidden font-[600] text-[#000000]">
              Settings
            </h1>
            <Tabs defaultValue="Profile" className="w-[100%] mt-[3rem] sm:mt-[0rem]">
              <TabsList className="bg-transparent border-b border-b-[#E9EAEB] pb-[.07rem] h-[5rem] w-[100%] justify-start">
                <TabsTrigger
                  value="Profile"
                  className="text-[1.3rem] font-[600] h-[100%] data-[state=active]:text-[#AF47D2] data-[state=active]:border-b-[#AF47D2] data-[state=active]:border-b-[2px] text-[#717680] w-[20rem] data-[state=active]:shadow-none data-[state=active]:bg-transparent"
                >
                  Profile
                </TabsTrigger>
                <TabsTrigger
                  value="keys"
                  className="text-[1.3rem] h-[100%] data-[state=active]:text-[#AF47D2] data-[state=active]:border-b-[#AF47D2] data-[state=active]:border-b-[2px] font-[600] w-[20rem] text-[#717680] data-[state=active]:shadow-none data-[state=active]:bg-transparent"
                >
                  API secret and keys
                </TabsTrigger>
              </TabsList>
              <TabsContent value="Profile">
                <Profile profile={profile} loading={getMeLoading} />
              </TabsContent>
              <TabsContent value="keys">
                <Keys
                  handleSubmit={handleSubmit}
                  getSecretKeyLoading={getSecretKeyLoading}
                  secretkeys={secretkeys}
                  generateNewSecretKey={generateNewSecretKey}
                  handleInputChange={handleInputChange}
                  loading={updatingSecretKey}
                  generatingSecretKey={generatingSecretKey}
                  formData={formData} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </MaxContainer>
    </section>
  );
};

export default Settings;

const Profile = ({ profile, loading }) => {
  const profileInfo = profile?.data
  const firstName = profileInfo?.personal_information?.fullname.split(" ")[0]
  const lastName = profileInfo?.personal_information?.fullname.split(" ")[1]
  return (
    <div className="mt-[2rem]">
      <div className="flex sm:flex-col-reverse sm:gap-[3rem] items-center justify-between">
        <div className="flex items-center  sm:self-start gap-[1rem] sm:gap-[2rem]">
          <img
            src="/img/quotient.svg"
            alt="profile"
            className="w-[8rem] sm:w-[6rem] h-auto"
          />
          <div className={`flex flex-col ${loading ? "gap-[1rem]" : "gap-[0]"}`}>
            {loading ? <TextSkeleton width={"w-[16rem]"} /> : <h3 className="text-[2rem] font-[600] text-[#000000]">{profileInfo?.business_information?.name}</h3>}
            {loading ? <TextSkeleton width={"w-[18rem]"} /> : <p className="font-[400] text-[#535862]"> {profileInfo?.personal_information?.email}</p>}
          </div>
        </div>
        <Button
          variant="outline"
          asChild
          className="px-[2rem] sm:w-full rounded-[.5rem] text-[1.4rem] sm:text-[1.6rem] sm:py-[1.8rem] py-[1.5rem] text-[#AF47D2] border-[#AF47D2]"
        >
          <Link to={"/profile/edit"}>Edit profile</Link>
        </Button>
      </div>
      <div className="mt-[3rem]">
        <p className="text-[1.8rem] font-[500] text-[#535862]">Business info</p>
        <div className="mt-[2.5rem] border-b py-[2rem] border-[#9B9B9B] border-t">
          <div className="flex mb-[3rem] items-center gap-[1rem]">
            <p className="text-[#535862] w-[28rem]">Business name</p>
            {loading ? <TextSkeleton width={"w-[15rem]"} /> : <p className="text-[#000000] sm:text-nowrap font-[600]">{profileInfo?.business_information?.name}</p>}
          </div>
          <div className="flex items-center gap-[1rem]">
            <p className="text-[#535862] w-[28rem]">Business phone number</p>
            {loading ? <TextSkeleton width={"w-[15rem]"} /> : <p className="text-[#000000] font-[600]">{profileInfo?.personal_information?.phone}</p>}
          </div>

          <p className="font-[400] text-[#535862] text-[1.8rem] mt-[5rem]">
            Personal info
          </p>
        </div>
        <div className="flex flex-col w-[50%] sm:w-full gap-[3rem] mt-[1rem]">
          <div className="flex w-[100%] items-center gap-[1rem]">
            <p className="text-[#535862] w-[28rem]">First name</p>
            {loading ? <TextSkeleton width={"w-[12rem]"} /> : <p className="text-[#000000] font-[600]">{firstName}</p>}
          </div>
          <div className="flex items-center gap-[1rem]">
            <p className="text-[#535862] w-[28rem]">Last name</p>
            {loading ? <TextSkeleton width={"w-[12rem]"} /> : <p className="text-[#000000] font-[600]">{lastName}</p>}
          </div>
          <div className="flex items-center gap-[1rem]">
            <p className="text-[#535862] w-[28rem]">Email address</p>
            {loading ? <TextSkeleton width={"w-[17rem]"} /> : <p className="text-[#000000] font-[600]">
              {profileInfo?.personal_information?.email}
            </p>}
          </div>
        </div>

        <Button
          asChild
          className="px-[3rem] mt-[5rem] hover:bg-[#CC7400] transition-all duration-500 hover:text-[white] sm:w-full rounded-[.5rem] text-[1.4rem] py-[2rem] text-white bg-[#FF9100]"
        >
          <Link to={"/onboarding/reset-password"}>Reset password</Link>
        </Button>
      </div>
    </div>
  );
}

const Keys = ({
  handleInputChange,
  formData,
  handleSubmit,
  loading,
  generatingSecretKey,
  generateNewSecretKey }) => {
  // Check if any field in formData is empty
  const isFormEmpty = Object.values(formData).some(value => value?.trim() === "");

  return (
    <div className="flex mt-[2rem] flex-col gap-[3rem] sm:gap-[2rem]">
      <KeyItem
        handleInputChange={handleInputChange}
        formData={formData}
        id={'apiKey'}
        readOnly={true}
        label={'API Key'} />
      <div className="">
        <KeyItem
          handleInputChange={handleInputChange}
          label={"Api Secret"}
          formData={formData}
          readOnly={true}
          id={'apiSecret'} />

        <Button variant={'ghost'} disabled={generatingSecretKey} onClick={generateNewSecretKey} className="text-[1.2rem] bg-transparent px-[0] disabled:opacity-[.4] border-none text-[blue]">
          Generate new secret key
          {generatingSecretKey && <LoaderCircle className="animate-spin w-[1.2rem] h-[1.2rem]" />}
        </Button>
      </div>
      <KeyItem
        handleInputChange={handleInputChange}
        id={'webhookURL'}
        formData={formData}
        label={"Success Callback URL"} />
      <KeyItem
        handleInputChange={handleInputChange}
        id={'successCallbackURL'}
        formData={formData}
        label={"Failure Callback URL"} />
      <KeyItem
        handleInputChange={handleInputChange}
        id={'failureCallbackURL'}
        formData={formData}
        label={"Webhook URL"} />

      <Button
        onClick={handleSubmit}
        className="bg-[#FF9100] mt-[.5rem] disabled:opacity-[.3] px-[2.3rem] self-start text-[1.3rem] py-[1.8rem] rounded-[.5rem] shadow-sm hover:bg-[#FF9100]"
        disabled={isFormEmpty}
      >
        {loading && (
          <ArrowPathIcon className="animate-spin w-[2.3rem] h-[2.3rem]" />
        )}
        Update changes
      </Button>
    </div>
  );
};

const KeyItem = ({ label, handleInputChange, id, formData, readOnly = false }) => {
  return (
    <div className="">
      <Label
        className={`mb-[.5rem] text-[1.3rem] ${readOnly ? "opacity-[.5]" : "opacity-[1]"} block`}
        htmlFor={id}
      >
        {label}
      </Label>
      <Textarea
        id={id}
        value={formData[id]}
        onChange={handleInputChange}
        className="placeholder:text-[#717680] placeholder:text-[1.2rem]  read-only:opacity-[.6]  read-only:focus-visible:outline-none read-only:focus-visible:ring-0b shadow-sm placeholder:font-[400] rounded-[.7rem] h-[7rem] resize-none text-[1.4rem]"
        readOnly={readOnly}
        placeholder={label}
      />
    </div>
  );
};


const TextSkeleton = ({ width }) => {
  return (
    <Skeleton className={`${width} h-[2.2rem] rounded-[2rem]`} />
  )
}