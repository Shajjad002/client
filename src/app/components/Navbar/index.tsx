import { Menu } from 'lucide-react'
import React from 'react'


const Navbar = () => {
  return (
    <div className={'flex justify-between items-center w-full mb-7'}>
        {/*LEFT Side*/}
        <div className={'flex justify-between items-center gap-5'}>
            <button className='px-3 py-3 bg-gray-100 rounded-full hover:bg-blur-100' onClick={()=>{}} >
                <Menu className='w-4 h-4'/>
            </button>

        </div>
    </div>
  )
}

export default Navbar