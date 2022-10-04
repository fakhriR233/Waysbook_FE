import { Alert, Modal, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { API } from "../../config/api";

const ModalRegister = ({ show, setShow, showRegister, setShowRegister }) => {
  //   const handleClose = () => setShow(false);
  const [data, setData] = useState();
  const title = "Register";
  document.title = "Waysbook | " + title;

  const handleShowLogin = (e) => {
    e.preventDefault();
    setShowRegister(false);
    setShow(true);
  };

  const [message, setMessage] = useState(null);

  let navigate = useNavigate();

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const { fullname, email, password } = form;

  const handleRegisterClose = () => setShowRegister(false);
  //   const handleRegisterShow = () => setShowRegister(true);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = useMutation(async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify(form);

      const response = await API.post("/register", body, config);

      //console.log(response.data);

      if (response.data.code === 200) {
        const alert = (
          <Alert variant="success" className="py-1">
            Success
          </Alert>
        );
        setMessage(alert);
        setForm({
          fullname: "",
          email: "",
          password: "",
        });
        handleRegisterClose();
      } else {
        const alert = (
          <Alert variant="danger" className="py-1">
            Failed
          </Alert>
        );
        setMessage(alert);
      }
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
    <>
      {message && message}
      <Modal show={showRegister} onClose={handleRegisterClose} size="md">
        <form onSubmit={(e) => handleRegister.mutate(e)}>
          <Modal.Body>
            <Modal.Header />
            <div className="space-y-6 px-5 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Register
              </h3>
              <div>
                <TextInput
                  id="email"
                  placeholder="Email"
                  name="email"
                  required={true}
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextInput
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required={true}
                  onChange={handleChange}
                />
              </div>
              <div>
                <TextInput
                  id="fullname"
                  name="fullname"
                  placeholder="Full Name"
                  required={true}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Register
                </button>
              </div>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Already have an account ? Click{" "}
                <button
                  onClick={handleShowLogin}
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Here
                </button>
              </div>
            </div>
          </Modal.Body>
        </form>
      </Modal>
    </>
  );
};

export default ModalRegister;
