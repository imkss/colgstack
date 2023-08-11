import React, {useState,useEffect} from "react";
import Wrapper from "./Wrapper";

import Link from "next/link";
import { MenuMobile } from "./MenuMobile";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { Menu } from "./Menu";


const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);
    
    const controlNavbar = ()=>{
        if(window.scrollY > 200){
            if(window.scrollY>lastScrollY && !mobileMenu){
                setShow("-translate-y-[80px]");
            }else{
                setShow("shadow-sm");
            }
        }else{
            setShow("translate-y-0");
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(()=>{
        window.addEventListener("scroll",controlNavbar);
        return()=>{
            window.removeEventListener("scroll",controlNavbar)
        }
    },[lastScrollY])

    return <header className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}>
        <Wrapper className="h-[60px] flex justify-between items-center">
            <Link href="/">
            <img src="/logo.png" className="max-w-[96px] max-h-[32px] md:max-w-[105px] md:max-h-[47px] flex items-center" />
            </Link>
            <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />

            {mobileMenu &&
            (<MenuMobile showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} setMobileMenu={setMobileMenu}/>
            )}

            <div className="flex items-center gap-[8px] xl:gap-[16px]">
               {/* icon start */}
               <div className="flex items-center gap-[8px] xl:gap-[16px]">
                <a href="/referral" disabled="false" className="active:!ring-0bg-ms-red-500 hover:bg-ms-red-600 rounded-[8px] text-blue-600 !font-[600] text-[14px] leading-[24px] font-sans tracking-[1.25px] uppercase p-[12px_16px] inline-block focus:!ring-0 outline-offset-[5px] outline-[1px] outline-[transparent] focus-visible:!shadow-[0_0_0_3px_rgba(66,_153,_225,_0.6)] disabled:opacity-[0.6] disabled:cursor-not-allowed transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 w-fit md:px-[8px]  md:flex !bg-[#E5FEFF] hover:!bg-[#CFE9EE] whitespace-nowrap">Refer &amp; Earn</a>
                <a href="https://sso.masaischool.com/" disabled="false" target="_blank" className="bg-transparent border border-red-500 !text-red-500 hover:bg-ms-red-100 focus-visible:bg-white rounded-[8px] !font-[600] text-[14px] leading-[24px] font-sans tracking-[1.25px] uppercase p-[12px_16px] inline-block focus:!ring-0 outline-offset-[5px] outline-[1px] outline-[transparent] focus-visible:!shadow-[0_0_0_3px_rgba(66,_153,_225,_0.6)] disabled:opacity-[0.6] disabled:cursor-not-allowed transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 hover:!bg-[#f5d5d5] md:block">Login</a>
                </div>
                <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
                    {mobileMenu?(
                        <VscChromeClose className="text-[16px]" 
                            onClick={()=> setMobileMenu(false)}
                        />
                    ):(
                        <BiMenuAltRight className="text-[20px]" 
                            onClick={()=> setMobileMenu(true)}
                        />
                    )}
                </div>
            </div>
        </Wrapper>
    </header>;
};

export default Header;
