"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideLinks = ({ icon, lable, path, open }) => {
  const pathName = usePathname();
  return (
    <Link
      title={lable}
      href={path}
      className={`flex items-center justify-start gap-2 px-[20px] py-[10px] hover:bg-bgColor hover:text-white ${
        pathName === path && "bg-bgColor text-white"
      }`}
    >
      <span className="block text-[15px] capitalize">{icon}</span>
      {open && (
        <span className="hidden sm:block text-[15px] capitalize transition-all">
          {lable}
        </span>
      )}
    </Link>
  );
};

export default SideLinks;
