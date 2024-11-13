import MaxContainer from "../common/maxcontainer";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="">
            <MaxContainer>
                <div className="container py-[5rem] pt-[7rem]">
                    <div className="flex justify-between w-[85%] mb-[8rem]">
                        <div className="">
                            <img src="/nav/cluster_logo.svg" alt="logo" className="w-[10rem] mb-[2rem]" />
                            <p className="w-[20rem] text-[#535862] font-[600]">A product of <br></br>
                                I-Bitron Technologies Ltd</p>
                        </div>
                        <div className="">
                            <p className="text-[1.5rem] font-[600] text-[#717680]">Comapny</p>
                            <ul className="flex flex-col gap-[.8rem] mt-[1rem]">
                                <li className="">
                                    <Link className="text-[#535862] text-[1.5rem] font-[600]" to={'#'}>Why Cluster?</Link>
                                </li>
                                <li className="">
                                    <Link className="text-[#535862] text-[1.5rem] font-[600]" to={'#'}>Partners</Link>
                                </li>
                                <li className="">
                                    <Link className="text-[#535862] text-[1.5rem] font-[600]" to={'#'}>Developers</Link>
                                </li>
                                <li className="">
                                    <Link className="text-[#535862] text-[1.5rem] font-[600]" to={'#'}>Support</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="">
                            <p className="text-[1.5rem] font-[500] text-[#717680]">Contact us</p>
                            <ul className="flex flex-col gap-[.8rem] mt-[1rem]">
                                <li className="">
                                    <Link className="font-[600] text-[1.5rem] text-[#535862]" to={'#'}>Support@cluster.ng</Link>
                                </li>
                                <li className="font-[600] text-[1.5rem] text-[#535862]">
                                    +2349020349843
                                </li>
                                <li className="">
                                    <Link to={'#'} className="font-[600] text-[1.5rem] text-[#535862]">X support</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="">
                            <p className="text-[1.5rem] font-[500] text-[#717680]">Social</p>
                            <ul className="flex flex-col gap-[.8rem] mt-[1rem]">
                                <li className="">
                                    <Link className="font-[600] text-[1.5rem] text-[#535862]" to={'#'}>Twitter</Link>
                                </li>
                                <li className="">
                                    <Link className="font-[600] text-[1.5rem] text-[#535862]" to={'#'}>LinkedIn</Link>
                                </li>
                                <li className="">
                                    <Link className="font-[600] text-[1.5rem] text-[#535862]" to={'#'}>Facebook</Link>
                                </li>
                                <li className="">
                                    <Link className="font-[600] text-[1.5rem] text-[#535862]" to={'#'}>Instagram</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-[1.4rem] font-[400] text-[#717680]">© 2024 Cluster.  All rights reserved.</p>
                        <div className="flex items-center gap-[3rem]">
                            <p className="text-[1.4rem]">
                                <Link className="text-[#717680] font-[400]" to={'#'}>Privacy</Link>
                            </p>
                            <p className="text-[1.4rem]">
                                <Link className="text-[#717680] font-[400]" to={'#'}>Terms & Condition</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </MaxContainer>
        </footer>
    );
}

export default Footer;