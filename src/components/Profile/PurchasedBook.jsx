import React from "react";

const bookImg =
  "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

const PurchasedBook = () => {
  return (
    <div className="my-7 mx-3">
      <div className="w-52 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg h-64 object-cover object-center"
            src={bookImg}
            alt=""
          />
        </a>
        <div className="">
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Title
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-300">
              By. Author
            </p>
          </div>
          <a
            href="#"
            className="w-full inline-flex items-center justify-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-500 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default PurchasedBook;
