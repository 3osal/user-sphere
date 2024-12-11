"use client";
import { useEffect, useState } from "react";
import { fetchUser } from "../../../../utils/api";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { FaBtc, FaRegBuilding, FaWallet } from "react-icons/fa";
import Image from "next/image";
import Loading from "../../../../../components/ui/loading/Loading";

const Page = ({ params }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    async function getUser() {
      try {
        const resolvedParams = await params;
        const data = await fetchUser(resolvedParams.id);
        setUser(data);
      } catch (err) {
        console.log("Error fetching data:", err);
      }
    }
    getUser();
  }, [params]);

  if (!user) {
    return <Loading />;
  }

  return (
    <section>
      <div className="bg-white border border-bgAlt p-[20px] rounded-[15px]">
        <div className="flex gap-2 items-center">
          {/* IMAGE */}
          <div className="w-[100px] h-[100px] rounded-full">
            <Image
              src={user.image}
              alt="photo profile"
              width={100}
              height={100}
              className="rounded-full bg-bgAlt p-4"
            />
          </div>
          {/* NAME */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-5">
              <h3 className="text-[20px] capitalize font-bold text-primary">
                {user.firstName} {user.lastName}
              </h3>
              <span className="block bg-bgColor text-[12px] text-white font-bold px-[15px] py-[5px] rounded-full">
                {user.role}
              </span>
            </div>
            <h4 className="text-secondary text-[12px]">{user.email}</h4>
            <span className="text-secondary capitalize text-[12px]">
              {user.company.title} at {user.company.name}
            </span>
          </div>
        </div>

        {/* ALL DETAILS */}
        <div>
          {/* Personal Information */}
          <div className="flex flex-col gap-2 items-start mt-5 border-b border-neutral-200 pb-4 py-2">
            <h2 className="text-primary capitalize font-bold mb-5">
              Personal Information
            </h2>
            <div className="flex items-center gap-2">
              <span className=" block text-secondary text-[14px]">
                <MdOutlineEmail />
              </span>
              <span className=" block text-[14px]">{user.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className=" block text-secondary text-[14px]">
                <FiPhone />
              </span>
              <span className=" block text-[14px]">{user.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className=" block text-secondary text-[14px]">
                <CiLocationOn />
              </span>
              <span className=" block text-[14px]">
                {user.address.address} {user.address.city}
              </span>
            </div>
          </div>

          {/* Physical Characteristics */}
          <div className="flex flex-col gap-2 items-start mt-5 border-b border-neutral-200 pb-4">
            <h2 className="text-primary capitalize font-bold mb-5">
              Physical Characteristics
            </h2>
            {/* GRID */}
            <div>
              <div className="flex justify-between gap-20">
                <span className="block mb-5 text-[14px]">
                  Height: {user.height}
                </span>
                <span className="block mb-5 text-[14px]">
                  Weight: {user.weight}
                </span>
              </div>
              <div className="flex justify-between gap-20">
                <span className="block mb-5 text-[14px]">
                  Eye Color: {user.eyeColor}
                </span>
                <span className="block [14px]">Hair: {user.hair.color}</span>
              </div>
            </div>
          </div>

          {/* Company Details */}
          <div className="flex flex-col gap-2 items-start mt-5 border-b border-neutral-200 pb-4 py-2">
            <h2 className="text-primary capitalize font-bold mb-5">
              Company Details
            </h2>
            <div className="flex items-center gap-2">
              <span className=" block text-secondary text-[14px]">
                <FaRegBuilding />
              </span>
              <span className=" block text-[14px]">{user.company.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className=" block text-secondary text-[14px]">
                <FiPhone />
              </span>
              <span className=" block text-[14px]">
                {user.company.department} Department
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className=" block text-secondary text-[14px]">
                <CiLocationOn />
              </span>
              <span className=" block text-[14px]">
                263 Tenth Street, San Francisco, Wisconsin, WI 37657
              </span>
            </div>
          </div>

          {/* Financial Information */}
          <div className="flex flex-col gap-2 items-start mt-5 border-b border-neutral-200 pb-4 py-2">
            <h2 className="text-primary capitalize font-bold mb-5">
              Financial Information
            </h2>
            <div className="flex items-center gap-2">
              <span className=" block text-secondary text-[14px]">
                <FaWallet />
              </span>
              <span className=" block text-[14px]">
                Card ending in {user.crypto.wallet}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className=" block text-secondary text-[14px]">
                <FaBtc />
              </span>
              <span className=" block text-[14px]">
                {user.crypto.coin} & {user.crypto.network}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
