import MaxContainer from "../../common/maxcontainer";
import Navbar from "../nav";

const Hero = () => {
    return (  
        <section className="bg-[#FBF0FF] pt-[10rem]">
            <Navbar />
            <MaxContainer>
                <div className="container pb-[10rem] pt-[8rem]">
                    <p className="text-center bg-[#f7d8ff] mb-[1.5rem] w-fit mx-auto px-[1rem] rounded-[1.3rem] text-[#AF47D2]">Partners</p>

                    <h1 className="font-[600] text-[4rem] w-[80rem] text-center mb-[2rem] mx-auto">Payment gateway service partner directory</h1>
                    <p className="text-[1.8rem] w-[70rem] text-center mx-auto  text-[#535862]">Find payment gateway services.</p>
                </div>
            </MaxContainer>
        </section>
    );
}
 
export default Hero;