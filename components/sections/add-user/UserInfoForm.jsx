"use client";
import { addUser } from "@/app/utils/api";
import { useState } from "react";

const UserInfoForm = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    age: 0,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await addUser(userData);
      setUserData(data);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to add user:", error);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-red-500 mb-2">
          User Added Successfully!
        </h2>
        <p className="text-lg text-primary font-bold">
          Welcome,{" "}
          <span className="font-bold">
            {userData.firstName} {userData.lastName}
          </span>
          !
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-6 px-6 py-3 bg-bgColor text-white rounded-lg font-medium shadow"
        >
          Add Another User
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 w-full max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
    >
      <div>
        <label
          htmlFor="firstName"
          className="block text-sm font-medium text-gray-700"
        >
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          value={userData.firstName}
          onChange={(e) =>
            setUserData({ ...userData, firstName: e.target.value })
          }
          required
          className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="lastName"
          className="block text-sm font-medium text-gray-700"
        >
          Last Name
        </label>
        <input
          id="lastName"
          type="text"
          value={userData.lastName}
          onChange={(e) =>
            setUserData({ ...userData, lastName: e.target.value })
          }
          required
          className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="age"
          className="block text-sm font-medium text-gray-700"
        >
          Age
        </label>
        <input
          id="age"
          type="number"
          value={userData.age}
          onChange={(e) =>
            setUserData({ ...userData, age: parseInt(e.target.value) })
          }
          required
          min="15"
          className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
};

export default UserInfoForm;
