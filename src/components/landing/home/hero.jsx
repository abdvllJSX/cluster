import MaxContainer from "../../common/maxcontainer";    
import { Button } from "../../ui/button";

const Hero = () => {
    const brands = [
        {
            path: '/landing/_paystack.png',
            style: 'w-[9rem]',
            name: 'paystack'
        },
        {
            path: '/landing/_moniepoint.png',
            style: '',
            name: 'moniepoint'
        },
        {
            path: '/landing/_opay.png',
            style: 'w-[7rem]',
            name: 'opay'
        },
        {
            path: '/landing/_nomba.png',
            style: '',
            name: 'nomba'
        },
        {
            path: '/landing/_squad.png',
            style: 'w-[8rem]',
            name: 'squad'
        },
        {
            path: '/landing/_fern.png',
            style: 'w-[8rem]',
            name: 'fern'
        },
        {
            path: '/landing/_remita.png',
            style: 'w-[8rem]',
            name: 'remita'
        },
    ]
    return ( 
        <section className="py-[10rem]">
            <MaxContainer>
                <div className="container pt-[5rem] flex items-center justify-between">
                    <div className="">
                        <h1 className="text-[5.5rem] leading-[6rem] w-[55rem] font-[600]">Single point integration for online payment collection</h1>
                        <div className="mt-[4rem] flex gap-[1rem]">
                            <Button className="text-white rounded-[.5rem] font-[600] py-[1.7rem] bg-[#FF9100] px-[1.8rem] text-[1.4rem]">Create an account</Button>
                            <Button className="bg-transparent font-[600] text-[1.4rem] border-[.165rem] border-[#D5D7DA] text-[#AF47D2] rounded-[.5rem] py-[1.7rem] px-[1.7rem]" variant={'ghost'}>Contact Support</Button>
                        </div>
                        <div className="mt-[3rem]">
                            <p className="text-[1.5rem] font-[400] mb-[.7rem]">Connected Gateways</p>
                            <div className="flex items-center gap-[1.5rem]">
                                { brands.map((brand, index) => (<img src={brand.path} alt={brand.name} className={brand.style} key={index} />)) }
                            </div>
                        </div>
                    </div>
                    <img src="/landing/_hero_image.png" alt="hero" className="w-[45%] h-[48rem] object-contain" />
                </div>
            </MaxContainer>
        </section>
    );
}
 
export default Hero;