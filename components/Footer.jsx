import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram ,FaLinkedin,FaGithub,FaTelegram} from "react-icons/fa";
import Wrapper from "./Wrapper";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-14 pb-3 ">
            <Wrapper className="mx-auto py-5 px-4 sm:px-6 lg:px-8 flex md:flex-row flex-col items-center justify-center border-b border-opacity-20 border-[rgba(209,213,219,0.2)]">
                <div className="w-[96px] h-[96px] mr-[16px] hidden lg:block">
                    <img src="/asset 32.gif" alt="start learning" />
                </div>
                <div className="font-extrabold tracking-tight text-gray-900">
                    <div className="block text-white text-[24px] font-semibold"> Get Started</div>
                    <div className="block text-[#FFDB66] text-ms-16 font-semibold">Join the Program</div>
                </div>
                <div className="inline-flex items-center mt-4 md:mt-0 md:ml-4 justify-center px-5 py-2.5 text-base font-medium rounded-md text-white bg-red-500">
                    Start learning
                </div>
            </Wrapper>
            <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0  border-b border-opacity-20 border-[rgba(209,213,219,0.2)]" >
            <div className="w-full justify-between py-5 px-2 xs:hidden lg:flex">
                        <Link href="/">
                            <img src="logo.png" alt="Page not Found" className="max-w-[96px] max-h-[32px] md:max-w-[105px] md:max-h-[47px] flex items-center"/>
                        </Link>
                    <div className="flex gap-4 justify-center md:justify-start">
                        <div className="text-base leading-6 text-gray-400 font-normal mt-2">FOLLOW US-</div>
                    <div onClick={()=>window.open('https://facebook.com','_blank')}className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaFacebookF size={20} />
                    </div>
                    <Link href="https://twitter.com/" target="_blank" className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaTwitter size={20} />
                    </Link>
                    <div onClick={()=>window.open('https://youtube.com','_blank')} className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaYoutube size={20} />
                    </div>
                    <div onClick={()=>window.open('https://instagram.com','_blank')} className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaInstagram size={20} />
                    </div>
                    <div onClick={()=>window.open('https://linkedin.com','_blank')} className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaLinkedin size={20} />
                    </div>
                    <div onClick={()=>window.open('https://github.com','_blank')} className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaGithub size={20} />
                    </div>
                </div>
                    </div>
            </Wrapper>
            <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0 border-b border-opacity-20 border-[rgba(209,213,219,0.2)] py-5 mt-5">
                {/* LEFT START */}
                <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
                    {/* MENU START */}
                    <div className="flex flex-col gap-3 shrink-0">
                        <div className="min-h-[35px] md:py-[4px] md:px-[12px] rounded-[100px] bg-[#F3F2F2] xl:w-max flex justify-center items-center py-[5px] px-[8px]">
                            <div className="text-black font-oswald font-medium uppercase text-sm">
                            SoftWare Development - Full Time
                                </div> 
                        </div>
                        <div className="text-base font-bold text-white/[0.5] hover:text-white cursor-pointer">
                                ColgStack Alumni
                            </div>
                            <div className="text-base font-bold text-white/[0.5] hover:text-white cursor-pointer">
                                Our Team
                            </div>
                            <div className="text-base font-bold text-white/[0.5] hover:text-white cursor-pointer">
                                Careers
                            </div>
                            <div className="text-base font-bold text-white/[0.5] hover:text-white cursor-pointer">
                                Referral Program
                            </div>
                            <div className="text-base font-bold text-white/[0.5] hover:text-white cursor-pointer">
                                ColgStack Learn
                            </div>
                            <div className="text-base font-bold text-white/[0.5] hover:text-white cursor-pointer">
                                Industry Mentors
                            </div>
                    </div>
                    {/* MENU END */}

                    {/* NORMAL MENU START */}
                    <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
                        {/* MENU START */}
                        <div className="flex flex-col gap-3 mb-8">
                        <div className="min-h-[35px] md:py-[4px] md:px-[12px] rounded-[100px] bg-[#F3F2F2] xl:w-max flex justify-center items-center py-[5px] px-[8px]">
                            <div className="text-black font-oswald font-medium uppercase text-sm">
                                Software Development - Part Time
                                </div>
                            </div>
                            <div className="text-base font-bold text-white/[0.5] hover:text-white cursor-pointer">
                                Hire From Us
                            </div>
                            <div className="text-base font-bold text-white/[0.5] hover:text-white cursor-pointer">
                                Our Investors
                            </div>
                            <div className="text-base font-bold text-white/[0.5] hover:text-white cursor-pointer">
                                Testimonials
                            </div>
                            <div className="text-base font-bold text-white/[0.5] hover:text-white cursor-pointer">
                                ColgStack Blog
                            </div>
                            <div className="text-base font-bold text-white/[0.5] hover:text-white cursor-pointer">
                                Talent Circle
                            </div>
                        </div>
                        {/* MENU END */}

                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                        <div className="min-h-[35px] md:py-[4px] md:px-[12px] rounded-[100px] bg-[#F3F2F2] xl:w-max flex justify-center items-center py-[5px] px-[8px]">
                            <div className="text-black font-oswald font-medium uppercase text-sm">
                                Data Analytics - Part Time
                                </div>
                            </div>
                            <div className="text-base font-bold text-white/[0.5] hover:text-white cursor-pointer">
                                About Us
                            </div>
                            <div className="text-base font-bold text-white/[0.5] hover:text-white cursor-pointer">
                                FAQ
                            </div>
                            <div className="text-base font-bold text-white/[0.5] hover:text-white cursor-pointer">
                                Newsroom
                            </div>
                            <div className="text-base font-bold text-white/[0.5] hover:text-white cursor-pointer">
                                Contact Us
                            </div>
                            <div className="text-base font-bold text-white/[0.5] hover:text-white cursor-pointer">
                                Become Coach
                            </div>
                        </div>
                        {/* MENU END */}
                    </div>
                    {/* NORMAL MENU END */}
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="mx-auto mt-10 xl:mt-0 flex gap-[16px] flex-col items-center justify-center ">
                   <div className="text-center  text-white/[0.5] leading-6 text-base font-normal">Connect with a growing Community of learners</div>
                   <div className="tracking-[1.25px] leading-6 text-sm text-[#3470E4] mt-[.5rem] md:mt-0 text-center h-[48px] items-center justify-between uppercase font-semibold cursor-pointer hover:bg-[#d7d7d7] rounded-[10px] bg-[#FFF] py-2 px-4 align-center flex gap-[8px]">
                   <FaTelegram size={40} />
                    Join our Telegram</div>
                </div>
                {/* RIGHT END */}
            </Wrapper>
            <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
                {/* LEFT START */}
                <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
                 © 2023 by Colgstack | Pvt Ltd Venture | All Rights Reserved
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer underline">
                        Guides
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer underline">
                        Terms of Use
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer underline">
                        Privacy Policy
                    </div>
                </div>
                {/* RIGHT END */}
            </Wrapper>
        </footer>
    );
};

export default Footer;