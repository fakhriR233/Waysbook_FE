import { Alert } from "flowbite-react";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { API } from "../../config/api";

const AddBook = () => {
  let Navigate = useNavigate();

  const title = " Admin Add Movies";
  document.title = "Dumbflix | " + title;

  const [form, setForm] = useState({
    Title: "",
    PublicationDate: "",
    Pages: "",
    Author: "",
    ISBN: "",
    Price: "",
    Description: "",
    Attachment: "",
    Thumbnail: "",
  });

  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    console.log("test onchange");
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });
    console.log(form);
  };

  const addButtonHandler = useMutation(async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.set(
        "Attachment",
        form?.Attachment[0],
        form?.Attachment[0]?.name
      );
      formData.set("Thumbnail", form?.Thumbnail[0], form?.Thumbnail[0]?.name);
      formData.set("Title", form.Title);
      formData.set("Author", form.Author);
      formData.set("Description", form.Description);
      formData.set("PublicationDate", form.PublicationDate);
      formData.set("Pages", form.Pages);
      formData.set("ISBN", form.ISBN);
      formData.set("Price", form.Price);

      console.log(form);
      // Configuration Content-type
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      // Data body
      // const body = JSON.stringify(formData);

      // Insert data user to database
      const response = await API.post("/book", formData, config);
      console.log(response);
      Navigate("/listtransactions");

      // Handling response here
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  });
  return (
    <div className="my-28 mx-28">
      {message && message}
      <form onSubmit={(e) => addButtonHandler.mutate(e)}>
        <div class="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="Title"
            id="floating_title"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
            onChange={handleChange}
          />
          <label
            for="floating_title"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Title
          </label>
        </div>
        <div class="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="Author"
            id="floating_author"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
            onChange={handleChange}
          />
          <label
            for="floating_author"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Author
          </label>
        </div>
        <div class="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="PublicationDate"
            id="floating_publication_date"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
            onChange={handleChange}
          />
          <label
            for="floating_publication_date"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Publication Date
          </label>
        </div>
        <div class="relative z-0 mb-6 w-full group">
          <input
            type="number"
            name="Pages"
            id="floating_pages"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
            onChange={handleChange}
          />
          <label
            for="floating_pages"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Pages
          </label>
        </div>
        <div class="relative z-0 mb-6 w-full group">
          <input
            type="number"
            name="ISBN"
            id="floating_ISBN"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
            onChange={handleChange}
          />
          <label
            for="floating_ISBN"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            ISBN
          </label>
        </div>
        <div class="relative z-0 mb-6 w-full group">
          <input
            type="number"
            name="Price"
            id="floating_price"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
            onChange={handleChange}
          />
          <label
            for="floating_price"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Price
          </label>
        </div>
        <div class="relative z-0 mb-6 w-full group">
          <textarea
            name="Description"
            id="floating_desc"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="About Book"
            onChange={handleChange}
          />
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 mb-6 w-full group">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              for="book_file"
            >
              Upload Book File
            </label>
            <input
              class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="book_file_help"
              id="book_file"
              type="file"
              name="Attachment"
              onChange={handleChange}
            />
            <div
              class="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="book_file_help"
            >
              The book PDF goes here
            </div>
          </div>
          <div class="relative z-0 mb-6 w-full group">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              for="book_cover"
            >
              Upload Book Cover
            </label>
            <input
              class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="book_cover_help"
              id="book_cover"
              type="file"
              name="Thumbnail"
              onChange={handleChange}
            />
            <div
              class="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="book_cover_help"
            >
              Book cover to help identify the book
            </div>
          </div>
        </div>

        <button
          type="submit"
          class="float-right text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
