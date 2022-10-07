import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { useMutation, useQuery } from "react-query";
import { API } from "../../config/api";
// import { Alert } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

const exImg =
  "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80";

const HomeBookBanner = () => {
  const title = "Home";
  document.title = "Waysbook | " + title;
  const [alert, setAlert] = useState(null);
  let Navigate = useNavigate();

  // Fetching product data from database
  let { data: book, refetch } = useQuery("bookCache", async () => {
    // const config = {
    //   method: "GET",
    //   headers: {
    //     Authorization: "Bearer " + localStorage.token,
    //   },
    // };
    const response = await API.get("/booke");
    console.log(response.data.data);
    return response.data.data;
  });

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  // let qty = 1;
  // let sub = book?.price;
  // console.log(sub);

  // const [transaction, setTransaction] = useState();
  // const getTrans = async () => {
  //   try {
  //     let response = await API.get("/transaction-status");
  //     setTransaction(response.data.data);
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // };

  // useEffect(() => {
  //   getTrans();
  // }, []);
  // console.log(transaction);

  // const handleSubmit = useMutation(async (e) => {
  //   try {
  //     e.preventDefault();

  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     };

  //     await API.post("/transaction", config);

  //     const body = JSON.stringify({
  //       book_id: parseInt(book?.id),
  //       qty: qty,
  //       subtotal: sub,
  //     });

  //     await API.post("/cart", body, config);

  //     const success = (
  //       <Alert
  //         color="success"
  //         onDismiss={function onDismiss() {
  //           setAlert(null);
  //         }}
  //       >
  //         <span>
  //           <span className="font-medium">Book Added to Cart!</span>
  //         </span>
  //       </Alert>
  //     );
  //     setAlert(success);
  //   } catch (error) {
  //     const alert = (
  //       <Alert
  //         color="failure"
  //         onDismiss={function onDismiss() {
  //           setAlert(null);
  //         }}
  //       >
  //         <span>
  //           <span className="font-medium">Failed to Add to Cart!</span>
  //         </span>
  //       </Alert>
  //     );
  //     setAlert(alert);
  //     console.log(error);
  //   }
  // });
  return (
    <div>
      {book?.length ? (
        <>
          <Swiper
            slidesPerView={2}
            spaceBetween={5}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {shuffle(book).map((item, id) => {
              return (
                <div key={id + 99}>
                  <SwiperSlide>
                    <Link
                      to={`/book-detail/` + item?.id}
                      className="flex flex-col h-72 items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-200 dark:bg-gray-100 dark:hover:bg-gray-200"
                    >
                      <img
                        className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-52 md:rounded-none md:rounded-l-lg"
                        src={item?.thumbnail}
                        alt="example"
                      />
                      <div className="flex flex-col justify-between p-5 leading-normal text-left">
                        <h5 className="my-5 text-2xl font-bold tracking-tight text-white-900 dark:text-black">
                          {item?.title}
                        </h5>
                        <p className="mb-3 font-normal text-gray dark:text-gray-400">
                          By {item?.author}
                        </p>
                        <p className="mb-3 font-normal text-gray-400 dark:text-black line-clamp-3">
                          {item?.description}
                        </p>
                        <p className="my-2 font-normal text-green-300 dark:text-green-500">
                          Rp. {item?.price}
                        </p>
                      </div>
                    </Link>
                  </SwiperSlide>
                </div>
              );
            })}
          </Swiper>
        </>
      ) : (
        <>
          <div>
            <p className="text-2xl p-20 font-bold text-gray-700">
              No Promo Book Yet !
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default HomeBookBanner;
