import { useParams } from "react-router-dom";
import Navbar from "../components/common/navbar";
import MaxContainer from "../components/common/maxcontainer";
import Breadcrumbs from "../components/common/Breadcrumbs";
import { Link } from "react-router-dom";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Switch } from "../components/ui/switch";
import { Textarea } from "../components/ui/textarea";

const GatewayConfig = () => {
    const { id } = useParams();

    const gatewayOptions = [
        {
            title: "No, i don’t have an account with paystack?",
            description: "Click on the link below to create an account and get your configuration details (payment live keys, test keys and turn on/off payment gateway)",
            check: true
        },
        {
            title: "Yes, I have an account with paystack",
            description: "Complete your configuration by adding your payment live keys, test keys and turn on/off payment gateway below",
            check: false
        }
    ];

    const [selectedOption, setSelectedOption] = useState(gatewayOptions);

    const [formData, setFormData] = useState({
        liveSecretKey: '',
        liveCallbackUrl: '',
        liveWebhookUrl: '',
        testSecretKey: '',
        testPublicKey: '',
        isGatewayEnabled: false
    });

    const handleOptionClick = (option) => {
        setSelectedOption(prevSelectedOption => prevSelectedOption.map((item, index) => index === option ? { ...item, check: true } : { ...item, check: false }));
    }

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
        { label: 'Overview', path: '/' },
        { label: 'Add Payment Gateway', path: '/add-gateway' },
        { label: 'Configure payment gateway', path: `/add-gateway/${id}` }
    ];

    return (
        <section>
            <Navbar />
            <MaxContainer>
                <div className="container pt-[12rem] pb-[15rem] sm:pt-[9rem]">
                    <Breadcrumbs items={breadcrumbItems} className="sm:hidden" />
                    <div className="">
                        <h1 className="header_i sm:text-[2.3rem] my-[4rem]">Add paystack gateway</h1>
                        <div className="">
                            <h2 className="text-[1.8rem] mb-[.5rem] text-[#000000] font-[600]">Do you have an account with paystack?</h2>
                            <p className="font-[400] text-[#414651]">Select either yes or no</p>

                            <div className="flex gap-6 max-w-[109rem] mt-[3rem]">
                                {selectedOption.map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleOptionClick(index)}
                                        className={`
                                            flex-1 flex rounded-[.7rem] gap-[1.5rem] items-start bg-transparent border-2
                                            border-[#DFB5ED] p-8 hover:border-purple-500
                                            ${option.check ? 'bg-[#FBF0FF]' : 'bg-white'}
                                            transition-colors duration-200
                                        `}
                                    >
                                        <input type="radio" checked={option.check} className="border block w-[2rem] mt-[.5rem] h-[2rem] accent-[#AF47D2]" />
                                        <div className="text-left align-top h-full flex w-[90%] flex-col gap-4">
                                            <h3 className="text-[1.7rem] font-[600]">{option.title}</h3>
                                            <p className="font-[400] text-[1.6rem] text-[#535862]">
                                                {option.description}
                                            </p>
                                        </div>
                                    </button>
                                ))}

                            </div>
                        </div>
                        {
                            selectedOption[0].check && (
                                <div className="">
                                    <p className="text-[1.6rem] decoration-2 text-[#535862] mt-[3rem]">Click the link below to sign up on paystack</p>
                                    <Link to={'/'} className="text-[1.6rem] underline text-[#3504FA] mt-[.9rem] block">https://paystack.com/signup</Link>
                                </div>
                            )
                        }

                        {
                            selectedOption[1].check && (
                                <div className="mt-[3rem]">
                                    <div className="">
                                        <h4 className="text-[1.7rem] font-[500]">Payment live keys</h4>

                                        <div className="mt-[2rem] ml-[4rem] flex flex-col gap-[2rem]">
                                            <div className="text-[1.3rem]">
                                                <Label className="mb-[.5rem] block" htmlFor="liveSecretKey">Live secret key</Label>
                                                <Textarea
                                                    id="liveSecretKey"
                                                    value={formData.liveSecretKey}
                                                    onChange={handleInputChange}
                                                    className="placeholder:text-[#717680] placeholder:text-[400] rounded-[.7rem] h-[7rem] resize-none text-[1.4rem]"
                                                    placeholder="Live secret key"
                                                />
                                            </div>
                                            <div className="text-[1.3rem]">
                                                <Label className="mb-[.5rem] block" htmlFor="liveCallbackUrl">Live call back url</Label>
                                                <Textarea
                                                    id="liveCallbackUrl"
                                                    value={formData.liveCallbackUrl}
                                                    onChange={handleInputChange}
                                                    className="placeholder:text-[#717680] placeholder:text-[400] rounded-[.7rem] h-[7rem] resize-none text-[1.4rem]"
                                                    placeholder="Live call back url"
                                                />
                                            </div>
                                            <div className="text-[1.3rem]">
                                                <Label className="mb-[.5rem] block" htmlFor="liveWebhookUrl">Live webhook url</Label>
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
                                        <div className="mt-[2.5rem] ml-[4rem] flex flex-col gap-[2rem]">
                                            <div className="text-[1.3rem]">
                                                <Label className="mb-[.5rem] block" htmlFor="testSecretKey">Test secret key</Label>
                                                <Textarea
                                                    id="testSecretKey"
                                                    value={formData.testSecretKey}
                                                    onChange={handleInputChange}
                                                    className="placeholder:text-[#717680] placeholder:text-[400] rounded-[.7rem] h-[7rem] resize-none text-[1.4rem]"
                                                    placeholder="Test secret key"
                                                />
                                            </div>
                                            <div className="text-[1.3rem]">
                                                <Label className="mb-[.5rem] block" htmlFor="testPublicKey">Test public key</Label>
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
                                            className="scale-[1.8]"
                                        />
                                        <p className="text-[1.6rem] font-[500]">Turn On/Off Payment gateway</p>
                                    </div>

                                    <div className="mt-[3rem] gap-[2rem] flex items-center">
                                        <Button className="w-fit px-[3.8rem] py-[2rem] rounded-[.7rem] bg-[#FF9100] text-[1.6rem] font-[600]">Save settings</Button>

                                        <Button variant={'outline'} className="w-fit border-[#D5D7DA] px-[2rem] py-[2rem] rounded-[.7rem] text-[1.6rem] font-[600] shadow-[0px_1px_2px_0px_#0A0D120D]">Skip configuration settings</Button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </MaxContainer>
        </section>
    );
}

export default GatewayConfig;