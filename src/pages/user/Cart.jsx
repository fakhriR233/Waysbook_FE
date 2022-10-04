import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { API } from "../../config/api";
import Rp from "rupiah-format";

// const bookImg1 =
//   "https://images.unsplash.com/photo-1510153704066-32b97a2d3c34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
// const bookImg2 =
//   "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

const Cart = () => {
  const navigate = useNavigate();

  const [dataCart, setDataCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [qty, setQty] = useState(0);

  useEffect(() => {
    const dataCart = async () => {
      try {
        const response = await API.get("/cart-id");
        setDataCart(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    dataCart();
  }, [setDataCart]);

  let totalQty = 0;
  dataCart.forEach((item) => {
    totalQty += item?.qty;
  });

  let Total = 0;
  dataCart?.forEach((item) => {
    Total += item.book?.price * item?.qty;
  });

  let handleDelete = async (id) => {
    await API.delete(`/cart/` + id);
    const response = await API.get("cart-id");
    setDataCart(response.data.data);
  };

  const data = {
    status: "pending",
    totalPayment: Total,
    Total: Total,
  };

  const handleSubmit = useMutation(async (e) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const body = JSON.stringify(data);
    const response = await API.patch("/transaction", body, config);
    const token = response.data.data.token;

    window.snap.pay(token, {
      onSuccess: function (result) {
        console.log(result);
        navigate("/profile");
      },
      onPending: function (result) {
        console.log(result);
      },
      onError: function () {
        alert("you closed the popup without finishing the payment");
      },
    });
  });

  useEffect(() => {
    setTotal(Total);
    setQty(totalQty);
  }, []);

  useEffect(() => {
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    const myMidTransClientKey = "SB-Mid-client-stNP1LORimDrtwe4";

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
    scriptTag.setAttribute("data-client-key", myMidTransClientKey);

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  console.log(dataCart);
  return (
    <div>
      <div className="mt-28 mx-40">
        <p className="text-2xl font-bold font-serif my-4"> My Cart</p>
        <div className="flex justify-between">
          <div>
            <div className="mb-3">Review Your Order</div>
            {dataCart.length !== 0 ? (
              <>
                <div className="border-t-4 border-gray-700 w-full min-w-full mt-2 border-b-4 mb-5">
                  {dataCart.map((item, id) => {
                    return (
                      <>
                        {/* book card here */}
                        <div className="flex w-full bg-white my-5 shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                          <img
                            className="object-cover object-center w-full h-96 md:h-64 md:w-40 md:rounded-none"
                            src={item.book?.thumbnail}
                            alt=""
                          />
                          <div className="flex w-96 justify-between p-5 leading-normal text-justify">
                            <div>
                              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {item.book?.title}
                              </h5>
                              <p className="mb-3 font-normal text-gray-500 dark:text-gray-300">
                                By. {item.book?.author}
                              </p>
                              <p className="my-4 font-normal text-green-500 dark:text-green-300">
                                Rp. {item.book?.price}
                              </p>
                            </div>
                            <div>
                              <button
                                className="mx-2 my-2"
                                onClick={() => handleDelete(item?.id)}
                              >
                                <FaTrashAlt />
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* book card end here */}
                      </>
                    );
                  })}
                </div>{" "}
              </>
            ) : (
              <>
                {" "}
                <div className="p-10">
                  <p className="font-bold text-2xl">Cart Kosong</p>
                </div>
              </>
            )}
          </div>
          <div className="mt-6">
            <div className="border-t-4 border-gray-700 w-72 my-3" />
            <div className="text-justify flex justify-between my-2">
              <div>Subtotal</div>
              <div>{Rp.convert(Total)}</div>
            </div>
            <div className="text-justify flex justify-between my-2">
              <div>Qty</div>
              <div>{totalQty}</div>
            </div>
            <div className="border-t-4 border-gray-700 w-72 my-3" />
            <div className="text-justify flex justify-between my-2">
              <div className="text-green-500 dark:text-green-300">Total</div>
              <div className="text-green-500 dark:text-green-300">
                {Rp.convert(Total)}
              </div>
            </div>
            <button
              type="button"
              onClick={(e) => handleSubmit.mutate(e)}
              className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
