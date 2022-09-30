import { Modal, TextInput } from "flowbite-react";
import React from "react";

const ModalRegister = ({ show, setShow, showRegister, setShowRegister }) => {
  //   const handleClose = () => setShow(false);

  const handleShowLogin = (e) => {
    e.preventDefault();
    setShowRegister(false);
    setShow(true);
  };

  const handleRegisterClose = () => setShowRegister(false);
  //   const handleRegisterShow = () => setShowRegister(true);
  return (
    <>
      <Modal show={showRegister} onClose={handleRegisterClose} size="md">
        <Modal.Body>
          <Modal.Header />
          <div className="space-y-6 px-5 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Register
            </h3>
            <div>
              <TextInput id="email" placeholder="Email" required={true} />
            </div>
            <div>
              <TextInput
                id="password"
                type="password"
                placeholder="Password"
                required={true}
              />
            </div>
            <div>
              <TextInput
                id="fullname"
                placeholder="Full Name"
                required={true}
              />
            </div>
            <div className="w-full">
              <button
                type="button"
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
      </Modal>
    </>
  );
};

export default ModalRegister;