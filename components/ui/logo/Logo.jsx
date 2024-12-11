import Link from "next/link";
import { LuDatabase } from "react-icons/lu";

const Logo = () => {
  return (
    <Link href="/" className="text-primary font-bold text-[17px] flex items-center justify-center gap-1">
      <span>
        <LuDatabase />
      </span>
      <span>UserSphere</span>
    </Link>
  );
};

export default Logo;
