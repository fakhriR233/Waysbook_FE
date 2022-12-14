import { Avatar, Dropdown } from "flowbite-react";
import React, { useContext } from "react";
import { FaBook, FaRocketchat, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import WaysbookLogo from "../../assets/WaysbookLogo.png";
import { UserContext } from "../../context/userContext";

const NavbarAdmin = () => {
  let Navigate = useNavigate();

  const [state, dispatch] = useContext(UserContext);

  function handleLogout(e) {
    e.preventDefault();
    console.log(state);
    dispatch({
      type: "LOGOUT",
    });
    Navigate("/");
  }
  return (
    <div>
      <nav className="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src={WaysbookLogo}
              className="mr-3 h-6 sm:h-9 w-100"
              alt="Waysbook Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-black">
              Waysbook
            </span>
          </a>
          <div className="flex md:order-2">
            {/* <button
              type="button"
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-3 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              Login
            </button> */}
            <div className="mr-4">
              <Dropdown
                label={
                  <Avatar
                    alt="User settings"
                    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    rounded={true}
                  />
                }
                arrowIcon={false}
                inline={true}
              >
                <div>
                  <Dropdown.Item>
                    <Link to="/addbook">
                      <div className="flex">
                        <div className="mx-2">
                          {" "}
                          <FaBook />{" "}
                        </div>
                        <p className="font-bold text-md">Add Book</p>
                      </div>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="">
                      <div className="flex">
                        <div className="mx-2">
                          {" "}
                          <FaRocketchat />{" "}
                        </div>
                        <p className="font-bold text-md">Complain</p>
                      </div>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>
                    <button onClick={handleLogout}>
                      <div className="flex">
                        <div className="mx-2">
                          {" "}
                          <FaSignOutAlt style={{ color: "red" }} />{" "}
                        </div>
                        <p className="font-bold text-md">Logout</p>
                      </div>
                    </button>
                  </Dropdown.Item>
                </div>
              </Dropdown>
            </div>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          ></div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarAdmin;
