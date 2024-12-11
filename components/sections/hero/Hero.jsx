import Link from "next/link";
import { HERO_DATA } from "./HeroData";
import Card from "./Card";
const Hero = () => {
  return (
    <section className="z-20 h-max md:h-screen py-[20px] bg-bgAlt flex flex-col items-center justify-center relative">
      <div className="circle right-[400px] top-0"></div>
      <div className="circle left-[400px] bottom-[100px]"></div>
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-primary text-[50px] font-bold capitalize md:text-[70px]">
            Streamline Your User Management
          </h1>
          <h3 className="text-secondary text-[20px] capitalize">
            Effortlessly manage users, track activities, and ensure security
            with our comprehensive dashboard.
          </h3>
          {/* BUTTONS */}
          <div className="flex gap-2 items-center mt-5">
            <Link
              href="/login"
              className="bg-bgColor px-4 py-[15px] rounded-[10px] text-white capitalize "
            >
              login
            </Link>
            <span>or</span>
            <Link
              href={"/"}
              className="bg-transparent border border-bgColor px-4 py-[15px] rounded-[10px] text-primary capitalize "
            >
              sign in now
            </Link>
          </div>
        </div>
        {/* GRID CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-2 mt-5">
          {HERO_DATA.map((item) => (
            <Card
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
