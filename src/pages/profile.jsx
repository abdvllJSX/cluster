import { ChevronLeft } from "lucide-react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Label } from "@radix-ui/react-label";
import Breadcrumbs from "../components/common/Breadcrumbs";
import MaxContainer from "../components/common/maxcontainer";
import Navbar from "../components/common/navbar";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "../components/ui/textarea";


const Settings = () => {
  const { id, trxID } = useParams();

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
                <TabsTrigger value="Profile" className="text-[1.3rem] font-[600] h-[100%] data-[state=active]:text-[#AF47D2] data-[state=active]:border-b-[#AF47D2] data-[state=active]:border-b-[2px] text-[#717680] w-[20rem] data-[state=active]:shadow-none data-[state=active]:bg-transparent">API secret and keys</TabsTrigger>
                <TabsTrigger value="keys" className="text-[1.3rem] h-[100%] data-[state=active]:text-[#AF47D2] data-[state=active]:border-b-[#AF47D2] data-[state=active]:border-b-[2px] font-[600] w-[20rem] text-[#717680] data-[state=active]:shadow-none data-[state=active]:bg-transparent">API secret and keys</TabsTrigger>
              </TabsList>
              <TabsContent value="Profile"><Profile /></TabsContent>
              <TabsContent value="keys"><Keys /></TabsContent>
            </Tabs>
          </div>
        </div>
      </MaxContainer>
    </section>
  );
};

export default Settings;


const Profile = () => {
  return (
    <div className="mt-[2rem]">
      <div className="flex sm:flex-col-reverse sm:gap-[3rem] items-center justify-between">
        <div className="flex items-center  sm:self-start gap-[1rem] sm:gap-[2rem]">
          <img
            src="/img/quotient.svg"
            alt="profile"
            className="w-[8rem] sm:w-[6rem] h-auto"
          />
          <div className="">
            <h3 className="text-[2rem] font-[600] text-[#000000]">
              DataSquid
            </h3>
            <p className="font-[400] text-[#535862]">
              dataquid@gmail.com
            </p>
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
        <p className="text-[1.8rem] font-[500] text-[#535862]">
          Business info
        </p>
        <div className="mt-[2.5rem] border-b py-[2rem] border-[#9B9B9B] border-t">
          <div className="flex mb-[3rem] items-center gap-[1rem]">
            <p className="text-[#535862] w-[28rem]">Business name</p>
            <p className="text-[#000000] font-[600]">DataSquid</p>
          </div>
          <div className="flex items-center gap-[1rem]">
            <p className="text-[#535862] w-[28rem]">
              Business phone number
            </p>
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
            <p className="text-[#000000] font-[600]">
              hello@richardibrahim.com
            </p>
          </div>
        </div>

        <Button
          asChild
          className="px-[3rem] mt-[5rem] sm:w-full rounded-[.5rem] text-[1.4rem] py-[2rem] text-white bg-[#FF9100]"
        >
          <Link to={"/profile/#"}>Reset password</Link>
        </Button>
      </div>
    </div>
  )
}


const Keys = () => {
  return (
    <div className="flex mt-[2rem] flex-col gap-[3rem] sm:gap-[2rem]">
      <KeyItem label={'API Key'} />
      <div className="">
        <KeyItem label={'Api Secret'} />
        <Link to={''} className="text-[1.2rem]">Generate new secret key</Link>
      </div>
      <KeyItem label={'Success Callback URL'} />
      <KeyItem label={'Failure Callback URL'} />
      <KeyItem label={'Webhook URL'} />

      <Button className="bg-[#FF9100] mt-[.5rem] px-[2.3rem] self-start text-[1.3rem] py-[1.8rem] rounded-[.5rem] shadow-sm hover:bg-[#FF9100]">Update changes</Button>
    </div>
  )
}

const KeyItem = ({ label }) => {
  return (
    <div className="">
      <Label
        className="mb-[.5rem] text-[1.3rem] block"
        htmlFor="liveCallbackUrl"
      >
        {label}
      </Label>
      <Textarea
        id=""
        value={''}
        onChange={''}
        className="placeholder:text-[#717680] shadow-sm placeholder:font-[400] rounded-[.7rem] h-[7rem] resize-none text-[1.4rem]"
        placeholder={label}
      />
    </div>
  )
}