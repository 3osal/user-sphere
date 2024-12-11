import { signIn } from "next-auth/react";
import Image from "next/image";

const SignInBtn = () => {
  return (
    <div
      className="cursor-pointer w-max mx-auto"
      onClick={() =>
        signIn("google", { redirect: true, callbackUrl: "/dashboard/" })
      }
    >
      <Image src="/google.png" alt="google" width={30} height={30} />
    </div>
  );
};

export default SignInBtn;
