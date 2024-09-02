"use client";

import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsSidebarColloapsed } from '@/state';
import { Link, LucideIcon, Menu } from 'lucide-react'
import { useParams, usePathname } from 'next/navigation';
import React from 'react'

interface SidebarLinkProps{
  href:string;
  icon:LucideIcon;
  label: string;
  isCollapsed:boolean;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed
}: SidebarLinkProps)=>{
 const pathname = usePathname ();
 const isActive = pathname === href || (pathname === "/" && href === "/dashboard");

 return(
  <Link href={href}>
    <div className={`cursor-pointer flex items-center ${
        isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"}
        hover : text-blue-500 hover:bg-blue-100 gap transition-colors ${ isActive ? "bg-blue-200 text-white" : ""}
      }`}>

    </div>
  </Link>
 )

}

const Sidebar = ( )=> {
  
  const dispath= useAppDispatch();
  const isSidebarCollapsed = useAppSelector((state)=> state.global.isSidebarColloapsed);

  const toggelSidebar =()=>{
    dispath(setIsSidebarColloapsed (!isSidebarCollapsed));
  }

  const sidebarClasNames = `fixed flex flex-col ${ isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64" }
  bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;


  return (
    <div className={sidebarClasNames}>
      {/* TOP LOGO */}
        <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${isSidebarCollapsed ? "px-5" : "px-8"}`}>
          <div className="">Logo</div>
          <h1 className={` ${isSidebarCollapsed ? "hidden": "block"} first-line:font-extrabold text-2xl`}>DreekIT</h1>
        
          <button className='md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100' onClick={toggelSidebar}>
            <Menu className='w-4 h-4' />
          </button>
        </div>

        {/* LINKS */}

      <div className='flex-grow mt-8'>
        {/* LINKS Here */}
      </div>

      {/* Footer Here */}

      <div>
          <p className='text-center text-xs text-gray-500'>&copy; 2024 DreekIT</p>
      </div>

    </div>
  )
}

export default Sidebar