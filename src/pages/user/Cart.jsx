import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const bookImg1 =
  "https://images.unsplash.com/photo-1510153704066-32b97a2d3c34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
const bookImg2 =
  "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

const Cart = () => {
  return (
    <div>
      <div className="mt-28 mx-40">
        <p className="text-2xl font-bold font-serif my-4"> My Cart</p>
        <div className="flex justify-between">
          <div>
            <div className="mb-3">Review Your Order</div>
            <div className="border-t-4 border-gray-700 w-full min-w-full mt-2 border-b-4 mb-5">
              {/* book card here */}
              <div className="flex w-full bg-white my-5 shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img
                  className="object-cover object-center w-full h-96 md:h-64 md:w-40 md:rounded-none"
                  src={bookImg1}
                  alt=""
                />
                <div className="flex w-96 justify-between p-5 leading-normal text-justify">
                  <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Book Title
                    </h5>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-300">
                      By. Writer
                    </p>
                    <p className="my-4 font-normal text-green-500 dark:text-green-300">
                      Rp. Price
                    </p>
                  </div>
                  <div>
                    <button className="mx-2 my-2">
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              </div>
              {/* book card end here */}
            </div>
          </div>
          <div className="mt-6">
            <div className="border-t-4 border-gray-700 w-72 my-3" />
            <div className="text-justify flex justify-between my-2">
              <div>Cart Kanan</div>
              <div>Rp Jumlah</div>
            </div>
            <div className="text-justify flex justify-between my-2">
              <div>Qty</div>
              <div>Banyaknya</div>
            </div>
            <div className="border-t-4 border-gray-700 w-72 my-3" />
            <div className="text-justify flex justify-between my-2">
              <div className="text-green-500 dark:text-green-300">Total</div>
              <div className="text-green-500 dark:text-green-300">
                Rp. Total
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
