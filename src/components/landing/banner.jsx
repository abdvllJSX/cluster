import MaxContainer from "../common/maxcontainer";
import { Button } from "../ui/button";

const Banner = () => {
    return (
        <section className="mt-[10rem] mb-[2rem]">
            <MaxContainer>
                <div style={{ backgroundPositionX: '100%',backgroundSize: '35% 100%, 100% 100%' }} className="container bg-contain rounded-[3rem] bg-banner bg-no-repeat text-white flex justify-center items-center py-[13rem]">
                    <div className="">
                        <h4 className="text-center text-[5rem]">Ready to get started?</h4>
                        <p className="max-w-[58rem] text-[2rem] font-[400] mt-[1.5rem] text-center">Create an account and instantly start accepting payments, selling your beautiful products online and building financial tools.</p>
                        <div className="flex gap-[1.5rem] mt-[3rem] justify-center">
                            <Button className="px-[2rem] bg-[#FF9100] text-[1.4rem] py-[1.8rem] rounded-[.5rem]">Create an account</Button>
                            <Button className="px-[2rem] bg-[#FFFFFF] text-[#AF47D2] text-[1.4rem] py-[1.8rem] rounded-[.5rem]">Contact Support</Button>
                        </div>
                    </div>
                </div>
            </MaxContainer>
        </section>
    );
}

export default Banner;