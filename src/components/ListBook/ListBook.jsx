import React from "react";

const bookImg =
  "https://images.unsplash.com/photo-1542662565-7e4b66bae529?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80";

const ListBook = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              List Book
            </h1>
            <div className="h-1 w-20 bg-green-500 rounded"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-72 rounded w-full object-cover object-center mb-6"
                src={bookImg}
                alt="content"
              />
              <p className="text-xl text-gray-900 font-medium title-font mb-4">
                Book Title
              </p>
              <p className="leading-relaxed text-base my-2 text-gray-400">
                By Writer
              </p>
              <h2 className="tracking-widest text-green-500 text-md font-medium title-font my-3">
                Rp. Price
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListBook;
