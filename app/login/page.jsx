"use client"
import Link from "next/link"
import Logo from "../../components/ui/logo/Logo"
import SignInBtn from "@/components/ui/auth/signIn-btn/SignInBtn"

const loginPage = () => {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-bgAlt">
        <form action="" className="bg-white w-[400px]  flex flex-col gap-6  px-[20px] py-[35px] rounded-[7px]">
          <h1 className="text-center capitalize font-bold text-primary text-[30px]">sign in</h1>
          <input type="text" placeholder="username" className=' text-black text-[15px] p-[20px] hover:bg-bgAlt bg-transparent border-2 outline-none rounded-[5px]' />
          <input type="password" placeholder="password" className=' text-black text-[15px] p-[20px] hover:bg-bgAlt bg-transparent border-2  outline-none rounded-[5px]' />
          <span className="mx-auto">or</span>
          <div>
            <SignInBtn />
          </div>
          <Link href='/dashboard'
            type="submit"
            className="bg-mainColor block text-center text-white w-full p-4 rounded-[5px] capitalize hover:bg-primary"
          >
            sign in
          </Link>
          <Logo />
        </form>
      </div>
    )
  }
  
  export default loginPage