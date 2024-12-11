"use client";
/* eslint-disable react/no-unescaped-entities */
import { LuUser } from "react-icons/lu";
import { TbUsers } from "react-icons/tb";
import Card from "../../components/sections/community/card-details/Card";
import User from "../../components/sections/community/user/User";
import { useEffect, useState } from "react";
import fetchUsers from "../utils/api";
import Loading from "../../components/ui/loading/Loading";
import _ from "lodash"; //
const Page = () => {
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({});

  useEffect(() => {
    async function getUsers() {
      try {
        const data = await fetchUsers();
        const shuffledData = _.shuffle(data); // ترتيب عشوائي للمستخدمين
        setUsers(shuffledData);

        // حساب الإحصائيات
        const totalUsers = data.length;
        const maleUsers = data.filter((user) => user.gender === "male").length;
        const femaleUsers = data.filter(
          (user) => user.gender === "female"
        ).length;

        setStats({ totalUsers, maleUsers, femaleUsers });
      } catch (err) {
        console.log("Error fetching data:", err);
      }
    }
    getUsers();
  }, []);
  return (
    <section className="mt-5">
      <div className="container">
        <div className="bg-bgColor p-[20px] rounded-md">
          <h1 className="text-white font-bold text-[25px]">
            Welcome to Our Community
          </h1>
          <h3 className="text-white text-[18px]">
            We're proud of our growing and diverse membership.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 mt-5">
            <Card
              lable="Total Members"
              icon={<TbUsers />}
              title="users"
              numbers={stats.totalUsers || <Loading />}
            />
            <Card
              lable="Male Members"
              icon={<LuUser />}
              title="Male"
              numbers={stats.maleUsers || <Loading />}
            />
            <Card
              lable="Female Members"
              icon={<LuUser />}
              title="Female"
              numbers={stats.femaleUsers || <Loading />}
            />
          </div>
        </div>
        {/* SOME USERS */}
        <div className="overflow-x-auto bg-white p-[20px] rounded-md mt-5">
          <h1 className="text-[20px] font-bold text-primary p-0">
            Recent Members
          </h1>
          <h3 className="text-[15px] text-secondary">
            New members who joined our community
          </h3>
          <div className="flex flex-col gap-4 mt-4">
            {users.slice(0, 5).map((item) => (
              <User
                key={item.id}
                image={item.image}
                firstName={item.firstName}
                lastName={item.lastName}
                email={item.email}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
