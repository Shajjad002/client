"use client";

import { Bell, Menu } from 'lucide-react'
import React from 'react'


const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full mb-7'>
        {/*LEFT Side*/}
        <div className={'flex justify-between items-center gap-5'}>
            <button className='px-3 py-3 bg-gray-100 rounded-full hover:bg-blur-100' onClick={()=>{}} >
                <Menu className='w-4 h-4'/>
            </button>
        </div>
        <div className="relative">
          <input type='search' placeholder='Start type to search groups & products' className='pl-10 pr-4 w-50 md:w-80 border-2 border-gray-300 bg-white  rounded-lg focus:outline-none focus:border-blue-500' />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-non">
              <Bell className='text-gray-500' size={20}/>
          </div>
        </div>

        {/*Right Side*/}

        <div className="flex justify-between items-center gap-5">
            <div className="hidden md:flex">
          
            </div>
        </div>
    </div>
  );
};

export default Navbar;