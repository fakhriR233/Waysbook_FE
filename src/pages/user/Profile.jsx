import React from "react";
import PurchasedBook from "../../components/Profile/PurchasedBook";
import UserCard from "../../components/Profile/UserCard";

const Profile = () => {
  return (
    <div>
      <div className="mt-32 mx-60">
        <UserCard />
        <div className="my-5">
          <p className="text-3xl font-bold font-serif">My Books</p>
          <div className="container my-12 mx-auto">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
              <PurchasedBook />
              <PurchasedBook />
              <PurchasedBook />
              <PurchasedBook />
              <PurchasedBook />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
