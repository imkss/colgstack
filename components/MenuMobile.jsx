import React from 'react'
import Link from "next/link"
import { BsChevronDown } from "react-icons/bs"

const data = [
    { id: 1, name: "COURSES", url: "/" },
    { id: 2, name: "FEES & PAP", url: "/about" },
    { id: 3, name: "EVENTS & CONTESTS", url: "/about" },
    { id: 4, name: "FREE RESOURCES", subMenu: true },
    { id: 5, name: "HIRE FROM US", url: "/contact" },
];

const subMenuData = [
    { id: 1, name: "MASAI LEARN", logo:"/Masai-learn.svg",doc_count: 11 },
    { id: 2, name: "SELF LEARNING",logo:"/SelfLearning.svg", doc_count: 8 },
    { id: 3, name: "BLOG",logo:"/Blog.svg", doc_count: 64 },
];

export const MenuMobile = ({showCatMenu,setShowCatMenu,setMobileMenu}) => {
  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
        {data.map((item) => {
            return (
                <React.Fragment key={item.id}>
                    {!!item?.subMenu ? (//undefined value come from server/api that not execute so we give ? mark in item & !! mark means only single value true check 
                        <li
                            className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
                            onClick={()=> setShowCatMenu(!showCatMenu)}
                        >
                            <div className="flex justify-between items-center">
                             {item.name}
                            <BsChevronDown size={14} />
                            </div>

                            {showCatMenu && (
                                <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                                    {
                                        subMenuData.map((subMenu)=> {
                                            return(
                                                <Link key={subMenu.id} href="/" onClick={()=> {setShowCatMenu(false); setMobileMenu(false);}}>
                                                    <li className="py-4 px-8 border-t flex justify-start gap-3">
                                                        <img src={subMenu.logo} alt="" />
                                                        {subMenu.name}
                                                        
                                                    </li>
                                                </Link>
                                            )
                                        })
                                    }
                                </ul>
                            )}
                        </li>
                    ) : (//if submenu true then this list is shown  && ? means optional chaining which value is undefined from server but we use this
                        <li className="py-4 px-5 border-b">
                            <Link href={item?.url} onClick={() => setMobileMenu(false)}>{item.name}</Link>
                        </li>
                    )}  
                </React.Fragment>
            );
        })}
    </ul>
    
  )
}
