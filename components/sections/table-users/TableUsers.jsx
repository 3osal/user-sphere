"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdDeleteOutline } from "react-icons/md";

const TableUsers = ({
  image,
  firstName,
  lastName,
  email,
  role,
  gender,
  id,
  deleted
}) => {
  return (
    <>
      <tbody>
        <tr className="hover:bg-bgAlt border-b border-secondary/20">
          <td className="px-4 py-2 flex items-center gap-4">
            {/* IMAGE */}
            <div className="w-8 h-8 rounded-full bg-gray-200">
              <Image src={image} alt={firstName} width={200} height={200} />
            </div>
            {/* USER AND EMAIL */}
            <div>
              <p className="font-medium text-sm capitalize sm:text-base">
                {firstName} {lastName}
              </p>
              <p className="text-xs text-secondary sm:text-sm">{email}</p>
            </div>
          </td>
          <td className="px-4 py-2 capitalize text-sm sm:text-base">{role}</td>
          {/* STATUS */}
          <td className="px-4 py-2 capitalize">
            <span>{gender}</span>
          </td>
          <td className="px-4 py-2 capitalize flex gap-2 items-center justify-center">
            <span className="block">
              <Link
                href={`users/${id}`}
                className="text-white text-[14px] bg-mainColor px-[15px] py-[5px] rounded-full capitalize hover:bg-mainColor/80"
              >
                view
              </Link>
            </span>
            <span className="block">
              <button
              onClick={() => deleted(id)}
                className="text-[20px] hover:text-delete"
              >
                <MdDeleteOutline />
              </button>
            </span>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default TableUsers;
