import Image from "next/image";
import Link from "next/link";

const User = ({image , firstName , lastName , email , id}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
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
      </div>
      <span className="block">
        <Link
          href={`dashboard/users/${id}`}
          className="text-white text-[14px] bg-mainColor px-[15px] py-[5px] rounded-full capitalize hover:bg-mainColor/80"
        >
          view
        </Link>
      </span>
    </div>
  );
};

export default User;
