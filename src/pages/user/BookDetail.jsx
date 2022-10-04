import { Alert } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import BookTopCard from "../../components/BookDetail/BookTopCard";
import { API } from "../../config/api";

const BookDetail = () => {
  let { id } = useParams();
  // let Navigate = useNavigate();

  const [alert, setAlert] = useState(null);

  let { data: book, refetch } = useQuery("Cache", async () => {
    const response = await API.get("/book/" + id);
    console.log(response.data.data);
    return response.data.data;
  });

  let qty = 1;
  let sub = book?.price;
  console.log(sub);

  const [transaction, setTransaction] = useState();
  const getTrans = async () => {
    try {
      let response = await API.get("/transaction-status");
      setTransaction(response.data.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getTrans();
  }, []);
  console.log(transaction);

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await API.post("/transaction", config);

      const body = JSON.stringify({
        book_id: parseInt(id),
        qty: qty,
        subtotal: sub,
      });

      await API.post("/cart", body, config);
    } catch (error) {
      const alert = <Alert color="failure">Failed add to Cart</Alert>;
      setAlert(alert);
      console.log(error);
    }
  });
  return (
    <div className="mx-56">
      <div className="mt-16">{alert && alert}</div>
      <BookTopCard book={book} />
      <div className="pt-9">
        <p className="text-3xl font-bold my-7 font-serif">About This Book</p>
        <p className="text-justify text-gray-500 dark:text-white">
          {book?.description}
        </p>
        <div className="text-end">
          <button
            onClick={(e) => handleSubmit.mutate(e)}
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
