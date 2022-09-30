import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const exImg =
  "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80";

const HomeBookBanner = () => {
  return (
    <div>
      <Swiper
        slidesPerView={2}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a
            href="#"
            className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-200 dark:bg-gray-100 dark:hover:bg-gray-200"
          >
            <img
              className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-52 md:rounded-none md:rounded-l-lg"
              src={exImg}
              alt="example image"
            />
            <div className="flex flex-col justify-between p-5 leading-normal text-justify">
              <h5 className="my-5 text-2xl font-bold tracking-tight text-white-900 dark:text-black">
                Title
              </h5>
              <p className="mb-3 font-normal text-gray dark:text-gray-400">
                By Writer
              </p>
              <p className="mb-3 font-normal text-gray-400 dark:text-black">
                Description lorem ipsum dolor sit amet
              </p>
              <p className="my-2 font-normal text-green-300 dark:text-green-500">
                Rp. Price
              </p>
              <button
                type="button"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 mr-2 my-3 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Add to Cart
              </button>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeBookBanner;
