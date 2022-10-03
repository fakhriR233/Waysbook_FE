import React from "react";

const imgDum =
  "https://images.unsplash.com/photo-1529485726363-95c8d62f656f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";

const BookTopCard = ({ book }) => {
  return (
    <div>
      <div className="mt-24 mx-auto">
        <div className="flex justify-center items-center">
          <div className="mr-10">
            <img
              className="max-w-xs object-cover object-center h-96 rounded-lg"
              src={book?.thumbnail}
              alt="The Book"
            />
          </div>
          <div className="mx-3 max-w-lg">
            <div className="my-6">
              <div className="text-4xl font-bold text-gray-900 dark:text-white flex-wrap">
                <p className="break-words">{book?.title}</p>
              </div>
              <div className="text-xl text-gray-400 dark:text-gray-200 mt-2">
                By. {book?.author}
              </div>
            </div>
            <div className="my-3">
              <div className="text-xl font-bold text-gray-900 dark:text-gray-200">
                Publication Date
              </div>
              <div className="text-lg  text-gray-400 dark:text-gray-200">
                {book?.publicationDate}
              </div>
            </div>
            <div className="my-3">
              <div className="text-xl font-bold text-gray-900 dark:text-gray-200">
                Pages
              </div>
              <div className="text-lg text-gray-400 dark:text-gray-200">
                {book?.pages} Pages
              </div>
            </div>
            <div className="my-3">
              <div className="text-xl font-bold text-red-600 dark:text-red-200">
                ISBN
              </div>
              <div className="text-lg text-gray-400 dark:text-gray-200">
                ISBN {book?.ISBN}
              </div>
            </div>
            <div className="my-3">
              <div className="text-xl font-bold text-gray-900 dark:text-gray-200">
                Price
              </div>
              <div className="text-lg font-bold text-green-500 dark:text-green-200">
                Rp. {book?.price}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTopCard;
