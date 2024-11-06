import { useState } from "react";
import MaxContainer from "../components/common/maxcontainer";
import NavBar from "../components/common/navbar";
import Breadcrumbs from "../components/common/Breadcrumbs";
import { useParams, Link } from "react-router-dom";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Switch } from "../components/ui/switch";
import { Textarea } from "../components/ui/textarea";
import { ChevronLeft } from "lucide-react";

const EditGateway = () => {
    const { id, trxID } = useParams();

    const [formData, setFormData] = useState({
        liveSecretKey: "",
        liveCallbackUrl: "",
        liveWebhookUrl: "",
        testSecretKey: "",
        testPublicKey: "",
        isGatewayEnabled: false
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSwitchChange = (checked) => {
        setFormData(prev => ({
            ...prev,
            isGatewayEnabled: checked
        }));
    };

    const breadcrumbItems = [
        {
            label: "Overview",
            path: `/`
        },
        {
            label: `${id}`,
            path: `/gateway-details/${id}`
        },
        {
            label: 'Edit payment gateway',
            path: `/gateway-details/${id}/edit`,
            active: true
        }
    ]
    return (
        <section>
            <NavBar />
            <MaxContainer>
                <div className="container py-[10rem]">
                    <Button asChild className="hidden sm:flex sm:w-fit sm:text-[#000000] p-[0] text-[1.4rem] font-[500] gap-[.5rem]" variant={'ghost'}>
                        <Link to={`/gateway-details/${id}`}>
                            <ChevronLeft className="w-[2rem] h-auto" />
                            Edit paystack gateway
                        </Link>
                    </Button>
                    <div className="mt-[3rem] sm:mt-[3.5rem]">
                        <Breadcrumbs items={breadcrumbItems} className="sm:hidden" />

                        <h1 className="text-[3rem] sm:text-[2rem] sm:my-[2rem] my-[4rem] font-[600] text-[#000000]">Edit payment gateway</h1>

                        <div className="mt-[3rem] sm:mt-[2rem]">
                            <div className="">
                                <h4 className="text-[1.7rem] font-[500]">Payment live keys</h4>

                                <div className="mt-[2rem] ml-[4rem] sm:ml-[0] flex flex-col gap-[2rem]">
                                    <div className="text-[1.3rem]">
                                        <Label className="mb-[.5rem] block text-[1.3rem] text-[#414651]" htmlFor="liveSecretKey">Live secret key</Label>
                                        <Textarea
                                            id="liveSecretKey"
                                            value={formData.liveSecretKey}
                                            onChange={handleInputChange}
                                            className="placeholder:text-[#717680] placeholder:text-[400] rounded-[.7rem] h-[7rem] resize-none text-[1.4rem]"
                                            placeholder="Live secret key"
                                        />
                                    </div>
                                    <div className="text-[1.3rem]">
                                        <Label className="mb-[.5rem] block text-[1.3rem] text-[#414651]" htmlFor="liveCallbackUrl">Live call back url</Label>
                                        <Textarea
                                            id="liveCallbackUrl"
                                            value={formData.liveCallbackUrl}
                                            onChange={handleInputChange}
                                            className="placeholder:text-[#717680] placeholder:text-[400] rounded-[.7rem] h-[7rem] resize-none text-[1.4rem]"
                                            placeholder="Live call back url"
                                        />
                                    </div>
                                    <div className="text-[1.3rem]">
                                        <Label className="mb-[.5rem] block text-[1.3rem] text-[#414651]" htmlFor="liveWebhookUrl">Live webhook url</Label>
                                        <Textarea
                                            id="liveWebhookUrl"
                                            value={formData.liveWebhookUrl}
                                            onChange={handleInputChange}
                                            className="placeholder:text-[#717680] placeholder:text-[400] rounded-[.7rem] h-[7rem] resize-none text-[1.4rem]"
                                            placeholder="Live webhook url"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[4rem]">
                                <h4 className="text-[1.7rem] font-[500]">Payment test keys</h4>
                                <div className="mt-[2.5rem] ml-[4rem] sm:ml-[0] flex flex-col gap-[2rem]">
                                    <div className="text-[1.3rem]">
                                        <Label className="mb-[.5rem] block text-[1.3rem] text-[#414651]" htmlFor="testSecretKey">Test secret key</Label>
                                        <Textarea
                                            id="testSecretKey"
                                            value={formData.testSecretKey}
                                            onChange={handleInputChange}
                                            className="placeholder:text-[#717680] placeholder:text-[400] rounded-[.7rem] h-[7rem] resize-none text-[1.4rem]"
                                            placeholder="Test secret key"
                                        />
                                    </div>
                                    <div className="text-[1.3rem]">
                                        <Label className="mb-[.5rem] block text-[1.3rem] text-[#414651]" htmlFor="testPublicKey">Test public key</Label>
                                        <Textarea
                                            id="testPublicKey"
                                            value={formData.testPublicKey}
                                            onChange={handleInputChange}
                                            className="placeholder:text-[#717680] placeholder:text-[400] rounded-[.7rem] h-[7rem] resize-none text-[1.4rem]"
                                            placeholder="Test public key"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="my-[3rem] flex items-center gap-[2rem]">
                                <Switch
                                    checked={formData.isGatewayEnabled}
                                    onCheckedChange={handleSwitchChange}
                                    className="scale-[1.8] data-[state=checked]:bg-[#FF9100]"
                                />
                                <p className="text-[1.6rem] font-[500]">Turn On/Off Payment gateway</p>
                            </div>

                            <div className="mt-[3rem]">
                                <Button className="w-fit sm:w-full px-[3.8rem] py-[2rem] rounded-[.7rem] bg-[#FF9100] text-[1.6rem] font-[600]">Update settings</Button>

                            </div>
                        </div>
                    </div>
                </div>
            </MaxContainer>
        </section>
    )
}

export default EditGateway