"use client";
import { authOptions } from "@/app/lib/nextAuth";
import SignoutBtn from "@/components/ui/auth/signout-btn/SignoutBtn";
import Loading from "@/components/ui/loading/Loading";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

const UserNav = () => {
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
      <div className="flex flex-col items-center space-y-6 p-8 bg-white shadow-xl rounded-lg max-w-lg mx-auto">
        {data && (
          <div className="flex flex-col items-center space-y-4">
            <Image quality={100}
              src={data?.user?.image}
              alt={data?.user?.name || "User Avatar"}
              width={120}
              height={120}
              className="rounded-full border-4 border-primary shadow-xl"
            />
            <div className="text-center">
              <h2 className="text-2xl font-bold text-primary">{data?.user?.name}</h2>
              <p className="text-sm text-gray-600">{data?.user?.email}</p>
            </div>
            <div className="mt-4">
              <SignoutBtn />
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default UserNav;
