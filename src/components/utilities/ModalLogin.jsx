import { Alert, Modal, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { API } from "../../config/api";
import { UserContext } from "../../context/userContext";

const ModalLogin = ({ show, setShow, showRegister, setShowRegister }) => {
  const handleClose = () => setShow(false);

  const [dismiss, setDismiss] = useState(false);

  const handleAlert = () => {
    setDismiss(true);
  };

  //   const handleRegisterClose = () => setShowRegister(false);
  const handleRegisterShow = (e) => {
    e.preventDefault();
    setShow(false);
    setShowRegister(true);
  };

  let Navigate = useNavigate();

  const title = "Login";
  document.title = "Waysbook | " + title;

  const [state, dispatch] = useContext(UserContext);

  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // const { email, password } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Configuration
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Data body
      const body = JSON.stringify(form);

      // Insert data for login process
      const response = await API.post("/login", body, config);

      console.log(response);

      // Checking process
      if (response?.status === 200) {
        // Send data to useContext
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data,
        });

        // Status check
        if (response.data.data.status === "admin") {
          Navigate("/listtransactions");
        } else {
          Navigate("/");
          handleClose();
        }

        const alert = (
          <div className="mt-16">
            <Alert color="success" show={dismiss} onDismiss={handleAlert}>
              <span>
                <span className="font-medium">Login Success!</span>
              </span>
            </Alert>
          </div>
        );
        setMessage(alert);
      }
    } catch (error) {
      const alert = (
        <Alert variant="danger">
          <div className="text-xl pt-10 bg-red-500">Login failed</div>
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  });

  return (
    <>
      {message && message}
      <Modal show={show} onClose={handleClose} size="md">
        <Modal.Body>
          <form onSubmit={(e) => handleSubmit.mutate(e)}>
            <Modal.Header />
            <div className="space-y-6 px-5 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Login
              </h3>

              <div>
                <TextInput
                  id="email"
                  name="email"
                  placeholder="Email"
                  required={true}
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextInput
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  required={true}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Login
                </button>
              </div>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Don't have an account ? Click{" "}
                <button
                  onClick={handleRegisterShow}
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Here
                </button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalLogin;
