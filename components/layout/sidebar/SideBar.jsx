"use client"
import React, { useState } from 'react'
import Logo from "../../ui/logo/Logo"
import { SIDEBAR_DATA } from './SideData'
import SideLinks from './SideLinks'
import { CgSidebar } from "react-icons/cg";
import { CgSidebarRight } from "react-icons/cg";

const Sidebar = () => {
  const [open , setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  }
  return (
    <div className='bg-white h-screen fixed left-0 top-0 shadow-xl shadow-black hover:opacity-90 transition-all'>
      <div className=' border-b border-zinc-300 p-[20px] flex gap-10 items-center'>
      {open && <span className='hidden sm:block'>
        <Logo />
        </span>}
      <span onClick={handleToggle} className="hidden sm:block text-[20px] text-primary cursor-pointer transition-all">
      {open ? <CgSidebar /> : <CgSidebarRight />}
      </span>
      </div>

      {/* LINKS */}
      <div className='mt-5'>
      <div className='flex flex-col '>
      {SIDEBAR_DATA.map((item) => (
          <SideLinks key={item.id} icon={item.icon} lable={item.lable} path={item.path} open= {open} />
        ))}
      </div>
      </div>

    </div>
  )
}

export default Sidebar
