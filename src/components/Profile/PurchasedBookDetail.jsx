import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { API } from "../../config/api";
import BookTopCardProfile from "../BookDetail/BookTopCardProfile";
import download from "../../assets/download-svgrepo-2.svg";
import { FaDownload } from "react-icons/fa";

const PurchasedBookDetail = () => {
  let { id } = useParams();
  // let Navigate = useNavigate();

  const [alert, setAlert] = useState(null);

  let { data: book, refetch } = useQuery("Cache", async () => {
    const response = await API.get("/book/" + id);
    console.log(response.data.data);
    return response.data.data;
  });
  return (
    <div className="mx-56">
      <div className="mt-16">{alert && alert}</div>
      <BookTopCardProfile book={book} />
      <div className="pt-9">
        <p className="text-3xl font-bold my-7 font-serif">About This Book</p>
        <p className="text-justify text-gray-500 dark:text-white">
          {book?.description}
        </p>
        <div className="text-end">
          <button
            type="button"
            className="mt-6 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-md px-6 py-2.5 mb-3 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            <a href={book?.bookAttachment} download>
              <p className="flex ml-2">
                Download <FaDownload className="mx-2 my-1" />
              </p>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchasedBookDetail;
