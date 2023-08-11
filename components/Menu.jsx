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

export const Menu = ({showCatMenu,setShowCatMenu}) => {
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">
        {data.map((item) => {
            return (
                <React.Fragment key={item.id}>
                    {!!item?.subMenu ? (
                        <li
                            className="cursor-pointer flex items-center gap-2 relative"
                            onMouseEnter={()=> setShowCatMenu(true)}
                            onMouseLeave={()=> setShowCatMenu(false)}
                        >
                             {item.name}
                             <BsChevronDown size={14} />
                             {
                                showCatMenu && (
                                    <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg">
                                        {
                                            subMenuData.map((subMenu)=>{
                                                return(
                                                    <Link key={subMenu.id} href="/category/runningshoe">
                                                        <li className="h-12 flex justify-start gap-3 items-center px-3 hover:bg-black/[0.03] rounded-md">
                                                        <img src={subMenu.logo} alt="" width="30px"/>
                                                            {subMenu.name}  
                                                        </li>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </ul>
                                )
                             }
                        </li>
                   ) : (
                        <li className="cursor-pointer">
                            <Link href={item?.url}>{item.name}</Link>
                        </li>
                    )}  
                </React.Fragment>
            );
        })}
    </ul>
    
  )
}
