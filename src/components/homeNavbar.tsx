import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const HomeNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isValue, setIsValue] = useState("");
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const onOpenModal = (value) => {
    setIsValue(value);
    setOpen(true);
  };
  const onCloseModal = () => setOpen(false);

  return (
    <>
      <nav className="bg-black text-white">
        <div className="max-w-screen-4xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="#"
            className="flex items-center space-x-3 rtl:space-x-reverse text-2xl"
          >
            Hybrid Taxi
          </Link>

          <button
            onClick={toggleNavbar}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none"
            aria-controls="navbar-dropdown"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">
              {isOpen ? "Close main menu" : "Open main menu"}
            </span>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col  p-4 md:p-0 mt-4 border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-black">
              <li>
                <Link
                  to="/dashboard"
                  className="block py-2 px-3 text-white text-sm font-semibold md:bg-transparent md:p-0"
                  style={{ transition: "background-color 0.3s" }}
                >
                  <span
                    className="hover:bg-neutral-600 rounded-3xl hover:p-2 transition duration-500"
                    style={{ display: "inline-block", padding: "8px" }}
                  >
                    Ride
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  to="#"
                  className="block py-2 px-3 text-white text-sm font-semibold md:bg-transparent md:p-0"
                  style={{ transition: "background-color 0.3s" }}
                >
                  <span
                    className="hover:bg-neutral-600 rounded-3xl hover:p-2 transition duration-500"
                    style={{ display: "inline-block", padding: "8px" }}
                  >
                    Drive
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-2 px-3 text-white text-sm font-semibold md:bg-transparent md:p-0"
                  style={{ transition: "background-color 0.3s" }}
                >
                  <span
                    className="hover:bg-neutral-600 rounded-3xl hover:p-2 transition duration-500"
                    style={{ display: "inline-block", padding: "8px" }}
                  >
                    Business
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-2 px-3 text-white text-sm font-semibold md:bg-transparent md:p-0"
                  style={{ transition: "background-color 0.3s" }}
                >
                  <span
                    className="hover:bg-neutral-600 rounded-3xl hover:p-2 transition duration-500"
                    style={{ display: "inline-block", padding: "8px" }}
                  >
                    Uber Eats
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  onClick={() => onOpenModal("login")}
                  className="block py-2 px-3 text-white text-sm font-semibold md:bg-transparent md:p-0"
                  style={{ transition: "background-color 0.3s" }}
                >
                  <span
                    className="hover:bg-neutral-600 rounded-3xl hover:p-2 transition duration-500"
                    style={{ display: "inline-block", padding: "8px" }}
                  >
                    Login
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  onClick={() => onOpenModal("signup")}
                  className="block py-2 px-3 text-black text-sm font-semibold md:bg-transparent md:p-0"
                  style={{ transition: "background-color 0.3s" }}
                >
                  <span
                    className="bg-neutral-300 rounded-3xl hover:p-2 transition duration-500"
                    style={{ display: "inline-block", padding: "8px" }}
                  >
                    Sign up
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Popup model*/}

      <Modal open={open} onClose={onCloseModal} center>
        <div className="flex flex-wrap gap-28 items-center justify-start p-16 ">
          <Link
            to={
              isValue == "login"
                ? "/login"
                : isValue == "signup"
                  ? "/register"
                  : ""
            }
            className="flex items-center justify-between gap-7 pb-10 border-black border-b-[1px]"
          >
            <h1 className="text-4xl font-semibold text-black">
              {isValue == "login"
                ? "Sign in to drive & deliver"
                : isValue == "signup"
                  ? "Sign up to drive & deliver"
                  : ""}
            </h1>

            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path
                d="m22.2 12-6.5 9h-3.5l5.5-7.5H2v-3h15.7L12.2 3h3.5l6.5 9Z"
                fill="currentColor"
              ></path>
            </svg>
          </Link>

          <Link
            to={
              isValue == "login"
                ? "/login"
                : isValue == "signup"
                  ? "/register"
                  : ""
            }
            className="flex items-center justify-between gap-7 pb-10 border-black border-b-[1px]"
          >
            <h1 className="text-4xl font-semibold text-black">
              {isValue == "login"
                ? "Sign in to ride"
                : isValue == "signup"
                  ? "Create a rider account"
                  : ""}
            </h1>

            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path
                d="m22.2 12-6.5 9h-3.5l5.5-7.5H2v-3h15.7L12.2 3h3.5l6.5 9Z"
                fill="currentColor"
              ></path>
            </svg>
          </Link>
        </div>
      </Modal>
    </>
  );
};

export default HomeNavbar;
