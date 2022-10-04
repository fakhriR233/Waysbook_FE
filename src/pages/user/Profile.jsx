import React from "react";
import { useQuery } from "react-query";
import PurchasedBook from "../../components/Profile/PurchasedBook";
import UserCard from "../../components/Profile/UserCard";
import { API } from "../../config/api";

const Profile = () => {
  let { data: bookUser, refetch } = useQuery(
    "booksPurchasedCache",
    async () => {
      // const config = {
      //   method: "GET",
      //   headers: {
      //     Authorization: "Bearer " + localStorage.token,
      //   },
      // };
      const response = await API.get("/transaction-success");
      console.log(response.data.data);
      return response.data.data;
    }
  );
  return (
    <div>
      <div className="mt-32 mx-60">
        <UserCard />
        <div className="my-5">
          <p className="text-3xl font-bold font-serif">My Books</p>
          <div className="container my-12 mx-auto">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
              <PurchasedBook bookUser={bookUser} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
