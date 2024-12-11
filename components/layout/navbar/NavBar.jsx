"use client"
import { usePathname } from "next/navigation";
import UserNav from "./UserNav";

const NavBar = () => {
  const pathName = usePathname();
  return (
    <nav className="h-[80px] p-[20px] bg-white">
      {/* FLEX */}
      <div className="flex justify-start items-center sm:justify-between">
        <div>
          <h2 className="text-[20px] text-primary font-bold capitalize hidden sm:block">{pathName.split("/").pop()}</h2>
        </div>
        <div>
          {/* USER */}
          <UserNav />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
