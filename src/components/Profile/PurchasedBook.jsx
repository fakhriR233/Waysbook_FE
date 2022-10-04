import React from "react";
import { useNavigate } from "react-router-dom";

const PurchasedBook = ({ bookUser }) => {
  // console.log("====================================");
  // console.log(bookUser);
  // console.log("====================================");
  let Navigate = useNavigate();
  // const handlePurchased =
  return (
    <>
      {bookUser?.length !== 0 ? (
        <>
          {bookUser?.cart?.map((item, id) => {
            return (
              <div className="my-7 mx-3">
                <>
                  <div
                    key={id + 2}
                    className="w-52 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
                  >
                    <button
                      onClick={() => {
                        Navigate("/book-purchased/" + item?.book?.id);
                      }}
                    >
                      <img
                        className="rounded-t-lg h-64 object-cover object-center"
                        src={item?.book?.thumbnail}
                        alt=""
                      />
                    </button>
                    <div className="">
                      <div className="p-5">
                        <button
                          onClick={() => {
                            Navigate("/book-purchased/" + item?.book?.id);
                          }}
                        >
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {item?.book?.title}
                          </h5>
                        </button>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-300">
                          By. {item?.book?.author}
                        </p>
                      </div>
                      <a
                        href={item?.book?.bookAttachment}
                        className="w-full inline-flex items-center justify-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-500 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </>
              </div>
            );
          })}
        </>
      ) : (
        <>
          <div>
            <p className="text-2xl p-10 font-bold text-red-600">
              No Purchased Book Yet!
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default PurchasedBook;
