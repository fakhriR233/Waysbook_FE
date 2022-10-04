import React from "react";
import { useQuery } from "react-query";
import { API } from "../../config/api";

const ListTransaction = () => {
  let { data: transactions, refetch } = useQuery("bookCache", async () => {
    // const config = {
    //   method: "GET",
    //   headers: {
    //     Authorization: "Bearer " + localStorage.token,
    //   },
    // };
    const response = await API.get("/transactions");
    console.log(response.data.data);
    return response.data.data;
  });
  return (
    <div className="mt-32 mx-32">
      <p> LIST TRANSACTION WOI</p>

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg p-5">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6 text-red-600">
                No
              </th>
              <th scope="col" className="py-3 px-6 text-red-600">
                Users
              </th>
              <th scope="col" className="py-3 px-6 text-red-600">
                Books Purchased
              </th>
              <th scope="col" className="py-3 px-6 text-red-600">
                ID Transactions
              </th>
              <th scope="col" className="py-3 px-6 text-red-600">
                Total Payment
              </th>
              <th scope="col" className="py-3 px-6 text-red-600">
                Status Payment
              </th>
            </tr>
          </thead>
          {transactions?.length !== 0 ? (
            <>
              <tbody>
                {transactions?.map((item, index) => {
                  return (
                    <>
                      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {index + 1}
                        </th>
                        <td className="py-4 px-6">{item?.user?.fullname}</td>
                        <td className="py-4 px-6  text-green-500">
                          {item?.cart?.map((booke, idx) => {
                            return (
                              <>
                                <p>{booke?.book?.title}</p>
                              </>
                            );
                          })}
                        </td>
                        <td className="py-4 px-6">{item?.id}</td>
                        <td className="py-4 px-6  text-green-500">
                          {item?.cart?.map((big, index) => {
                            return (
                              <>
                                <p className="text-green-500">
                                  {big?.subtotal}
                                </p>
                              </>
                            );
                          })}
                        </td>
                        <td
                          className={
                            item?.status == "success"
                              ? "py-4 px-6 text-green-500"
                              : "py-4 px-6 text-red-500"
                          }
                        >
                          {item?.status}
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </>
          ) : (
            <>
              <div>
                <p className="p-5 text-2xl font-bold"> No Transactions !</p>
              </div>
            </>
          )}
        </table>
      </div>
    </div>
  );
};

export default ListTransaction;
