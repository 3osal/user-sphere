"use client";
import { authOptions } from "@/app/lib/nextAuth";
import SignoutBtn from "@/components/ui/auth/signout-btn/signoutBtn";
import Loading from "@/components/ui/loading/Loading";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

const UserNav = () => {
  // State to hold the open state of the dropdown menu
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  // useSession hook to get the session data
  const { data, status } = useSession();
  if (status === "loading") {
    return <Loading />;
  }

  if (status === "unauthenticated") {
    return <span className="text-gray-500 cursor-pointer">Login</span>;
  }

  if (status === "authenticated") {
    return (
      <>
        {data && (
          <div className="relative">
            <Image
              onClick={handleToggle}
              src={data?.user?.image}
              alt={data?.user?.name || "User Avatar"}
              width={50}
              height={50}
              className="rounded-full cursor-pointer border-2 border-primary hover:shadow-lg transition-all duration-200"
            />
            {/* INFO */}
            {open && (
              <div className="absolute right-0 top-[65px] flex flex-col gap-3 bg-white p-5 rounded-lg shadow-lg z-40 border border-gray-200">
                <span className="capitalize text-primary font-bold text-[14px]">
                  {data?.user?.name}
                </span>
                <span className="text-[12px] text-gray-500 block">
                  {data?.user?.email}
                </span>
                <SignoutBtn />
              </div>
            )}
          </div>
        )}
      </>
    );
  }
};

export default UserNav;
