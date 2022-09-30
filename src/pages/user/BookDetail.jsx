import React from "react";
import BookTopCard from "../../components/BookDetail/BookTopCard";
import Navbar from "../../components/Nav/Navbar";

const BookDetail = () => {
  return (
    <div className="mx-56">
      <BookTopCard />
      <div className="pt-9">
        <p className="text-3xl font-bold my-7 font-serif">About This Book</p>
        <p className="text-justify text-gray-500 dark:text-white">
          Bagi Heidy Theapila, latar belakang keluarga membuatnya tak mudah
          menemukan pasangan sejiwa. Tapi, ceritanya berbeda dengan Mirza. Heidy
          meyakini lelaki itu mencintainya dengan tulus. Namun, keyakinannya
          tumbang. Pertemuan mereka bukan cuma karena campur tangan Allah
          semata. Melainkan karena skenario rapi yang berkaitan dengan materi.
          Marah sekaligus patah hati, Heidy membatalkan rencana masa depannya
          dan memilih kabur ke Italia. Langkahnya mungkin tak dewasa, tapi Heidy
          butuh ruang untuk meninjau ulang semua rencana dalam hidupnya. Lalu,
          Allah memberinya kejutan. Dalam pelayaran menyusuri Venesia, Heidy
          bertemu raksasa bermata biru. Graeme MacLeod, pria yang mencuri
          napasnya di pertemuan pertama mereka. Meski ketertarikan di antara
          mereka begitu besar, Heidy tidak berniat menjalin asmara singkat.
          Graeme harus dilupakan. Ketika apa yang terjadi di Venesia tidak bisa
          tetap ditinggal di Venesia, Heidy mulai goyah. Apalagi Graeme ternyata
          lelaki gigih yang mengejarnya hingga ke Jakarta dan tak putus asa
          tatkala ditolak. Meski akhirnya satu per satu rahasia kelam lelaki itu
          terbuka, Heidy justru kian jatuh cinta. Pertanyaannya, apakah cinta
          memang benar-benar mampu menyatukan mereka?
        </p>
        <div className="text-end">
          <button
            type="button"
            className="mt-6 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-md px-6 py-2.5 mb-3 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            <p className="flex ml-2">
              Add Cart{" "}
              <img
                className="ml-3 max-w-xs h-full"
                alt="Cart SVG"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABCElEQVRIid2UvU7CUBiGv0NCIHFRgVkX3U0M12Ax4ULcuQbTG2AyYTB6BV1N2LkDRsoEJEymGoWH5Uts2lrPyalEeefn/Wn7pSIHIWDLl0a/UbBJFbwBncpLtCjCX+N0Zi3TMaxgZ7vsCQww1SU920TgGFiqr/8TPFAwcigIi17Pd/AJ8KqXdWHBnwOJ8te2i0a6KLRgn5V9tApX05WaVkCzhOvq8gQ4sy5Q88ThNO9dw1vAwiI4AZ6AhmvBgwa8AMbJbBF+CnwC78Clb15uHVAXkbWIHDmHGZPLy/4qxBjzISJ3IrJ0Lfg7Am6BORADgS9XZIxTpzjz4XLfYC8CAl03A258uf+tHRJ0yCxh4Q3DAAAAAElFTkSuQmCC"
              />
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
