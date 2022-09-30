import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaAddressCard, FaPhone, FaTransgender } from "react-icons/fa";

const userimg =
  "https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";

const UserCard = () => {
  return (
    <div>
      <p className="text-3xl font-serif font-bold my-9">Profile</p>
      <div className="flex align-middle items-center justify-between w-full h-64 bg-red-300 py-6">
        <div className="text-justify ml-3">
          <div className="flex my-1">
            <p className="mx-2">
              <HiOutlineMail className="my-2" size={30} />
            </p>
            <div>
              <p className="text-md font-bold"> Kiri@mail.com </p>
              <p className="text-sm text-gray-500 dark:text-gray-200">
                {" "}
                Email{" "}
              </p>
            </div>
          </div>
          <div className="flex my-1">
            <p className="mx-2">
              <FaTransgender className="my-2" size={30} />
            </p>
            <div>
              <p className="text-md font-bold"> Female </p>
              <p className="text-sm text-gray-500 dark:text-gray-200">
                {" "}
                Gender{" "}
              </p>
            </div>
          </div>
          <div className="flex my-1">
            <p className="mx-2">
              <FaPhone className="my-2" size={29} />
            </p>
            <div>
              <p className="text-md font-bold"> 08121378 </p>
              <p className="text-sm text-gray-500 dark:text-gray-200">
                {" "}
                Mobile Phone{" "}
              </p>
            </div>
          </div>
          <div className="flex my-1">
            <p className="mx-2">
              <FaAddressCard className="my-2" size={29} />
            </p>
            <div>
              <p className="text-md font-bold"> 31 Doctor Street Florida </p>
              <p className="text-sm text-gray-500 dark:text-gray-200">
                {" "}
                Address{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="mx-5 mt-3">
          <div className="mb-3">
            <img
              className="w-44 h-44 rounded object-cover"
              src={userimg}
              alt="Extra large avatar"
            />
          </div>
          <div>
            <button
              type="button"
              className="w-full focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
