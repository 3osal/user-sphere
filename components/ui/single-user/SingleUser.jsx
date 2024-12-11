import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { FaBtc, FaRegBuilding, FaWallet } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";

const SingleUser = ({
  firstName,
  lastName,
  role,
  email,
  title,
  name,
  phone,
  address,
  city,
  eyeColor,
  color,
  department,
}) => {
  return (
    <div className="bg-white border border-bgAlt p-[20px] rounded-[15px]">
      <div className="flex gap-2 items-center">
        {/* IMAGE */}
        <div className="bg-slate-300 w-[100px] h-[100px] rounded-full"></div>
        {/* NAME */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-5">
            <h3 className="text-[20px] capitalize font-bold text-primary">
              {firstName} {lastName}
            </h3>
            <span className="block bg-bgColor text-[12px] text-white font-bold px-[15px] py-[5px] rounded-full">
              {role}
            </span>
          </div>
          <h4 className="text-secondary">{email}</h4>
          <span className="text-secondary capitalize text-[13px]">
            {title} at {name}
          </span>
        </div>
      </div>

      {/* ALL DETAILS */}
      <div>
        {/* Personal Information */}
        <div className="flex flex-col gap-2 items-start mt-10 border-b border-neutral-200 py-2">
          <h2 className="text-primary capitalize font-bold mb-5">
            Personal Information
          </h2>
          <div className="flex items-center gap-2">
            <span className=" block text-secondary text-[18px]">
              <MdOutlineEmail />
            </span>
            <span className=" block text-[15px]">{email}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className=" block text-secondary text-[18px]">
              <FiPhone />
            </span>
            <span className=" block text-[15px]">{phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className=" block text-secondary text-[18px]">
              <CiLocationOn />
            </span>
            <span className=" block text-[15px]">
              {address} {city}
            </span>
          </div>
        </div>

        {/* Physical Characteristics */}
        <div className="flex flex-col gap-2 items-start mt-10 border-b border-neutral-200 py-2">
          <h2 className="text-primary capitalize font-bold mb-5">
            Physical Characteristics
          </h2>
          {/* GRID */}
          <div className="">
            <div className="flex justify-between gap-20">
              <span className="block mb-5">Height: {height}</span>
              <span className="block mb-5">Weight: {weight}</span>
            </div>
            <div className="flex justify-between gap-20">
              <span className="block mb-5">Eye Color: {eyeColor}</span>
              <span className="block">Hair: {color}</span>
            </div>
          </div>
        </div>

        {/* Company Details */}
        <div className="flex flex-col gap-2 items-start mt-10 border-b border-neutral-200 py-2">
          <h2 className="text-primary capitalize font-bold mb-5">
            Company Details
          </h2>
          <div className="flex items-center gap-2">
            <span className=" block text-secondary text-[18px]">
              <FaRegBuilding />
            </span>
            <span className=" block text-[15px]">{name}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className=" block text-secondary text-[18px]">
              <FiPhone />
            </span>
            <span className=" block text-[15px]">{department} Department</span>
          </div>
          <div className="flex items-center gap-2">
            <span className=" block text-secondary text-[18px]">
              <CiLocationOn />
            </span>
            <span className=" block text-[15px]">
              263 Tenth Street, San Francisco, Wisconsin, WI 37657
            </span>
          </div>
        </div>

        {/* Financial Information */}
        <div className="flex flex-col gap-2 items-start mt-10 border-b border-neutral-200 py-2">
          <h2 className="text-primary capitalize font-bold mb-5">
            Financial Information
          </h2>
          <div className="flex items-center gap-2">
            <span className=" block text-secondary text-[18px]">
              <FaWallet />
            </span>
            <span className=" block text-[15px]">Card ending in ****1815</span>
          </div>
          <div className="flex items-center gap-2">
            <span className=" block text-secondary text-[18px]">
              <FaBtc />
            </span>
            <span className=" block text-[15px]">
              Bitcoin & Ethereum (ERC20) Wallet
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
