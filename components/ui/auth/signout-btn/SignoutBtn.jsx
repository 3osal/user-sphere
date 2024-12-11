"use client";
import { signOut } from "next-auth/react";
import { MdLogout } from "react-icons/md";

const SignoutBtn = () => {
  return (
    <button
      className="flex gap-2 items-center cursor-pointer text-[14px] bg-primary text-white px-3 py-2 rounded-md hover:bg-primary-dark transition-all duration-200"
      onClick={() => signOut({ redirect: true, callbackUrl: "/login/" })}
    >
      <MdLogout className="text-[16px]" />
      <span>Sign Out</span>
    </button>
  );
};

export default SignoutBtn;
