import React, { useState } from "react";
import profileIcon from "../../public/assets/profileIcon.jpeg";
import taxiIcon from "../../public/assets/ride.png";
import { NavLink, useNavigate } from "react-router-dom";

const UserHeader: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
   
  const [isHovered, setHovered] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full flex justify-between py-3 items-center px-10 lg:bg-white h-16 border-b-4">
        <div className="flex gap-10 items-center ">
          <h3 className="text-xl z-10  font-semibold">Hybrid Taxi</h3>
          <NavLink to={"/dashboard"}>
            {" "}
            <button className="lg:flex  hidden items-center font-semibold text-base gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <title>Car front</title>
                <path
                  d="m20.9 9-1.5-4.6c-.3-.8-1-1.4-1.9-1.4H6.4c-.9 0-1.6.5-1.9 1.4L3 9H1v3h1v9h4v-2h12v2h4v-9h1V9h-2.1ZM5 14h4v2H5v-2Zm10 2v-2h4v2h-4ZM7.1 6h9.7l1.3 4H5.8l1.3-4Z"
                  fill="currentColor"
                ></path>
              </svg>{" "}
              <span>Ride</span>
            </button>
          </NavLink>{" "}
        </div>
        <div
          onClick={() => setShow(!show)}
          className="menu z-10 bg-white p-3 rounded-full lg:hidden"
        >
          <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
            <title>Three lines</title>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23 4H1v3h22V4Zm0 7H1v3h22v-3ZM1 18h22v3H1v-3Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>

        {/* My Trip  */}
        <div className="hidden lg:flex gap-3 pr-3">
          <NavLink to={"/mytrips"}>
            <button className="flex gap-2 items-center font-medium">
              <svg width="1.2em" height="1.2em" viewBox="0 0 28 28" fill="none">
                <title>Receipt</title>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 23V1h18v22l-5.5-3-3.5 3-3.5-3L3 23ZM7 9h10V6H7v3Zm10 3H7v3h10v-3Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span>My trips</span>
            </button>
          </NavLink>
          <button
            onClick={() => setHovered(!isHovered)}
            className="flex gap-1 items-center relative"
          >
            <img
              className="h-8 rounded-full"
              src={profileIcon}
              alt="profile_image"
            />
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <title>Chevron down small</title>
              <path
                d="M18 8v3.8l-6 4.6-6-4.6V8l6 4.6L18 8Z"
                fill="currentColor"
              ></path>
            </svg>
            {isHovered && (
              <div className="max-w-6xl">
                <ul className="hover-menu z-10 absolute top-12 px-5 py-3 right-4 flex flex-col rounded-md bg-[#EEEEEE] text-black max-w-7xl">
                  <li>
                    <NavLink
                      to=""
                      onClick={() => setShow(!show)}
                      className="menu-item "
                    >
                      <div className="flex py-2 gap-2 items-center justify-start font-medium">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <title>Wallet</title>
                          <g fill="currentColor">
                            <path d="M14.12 14H9.88l-3-3H1v9h22v-9h-5.88l-3 3ZM1 4v4h7.12l3 3h1.76l3-3H23V4H1Z"></path>
                          </g>
                        </svg>
                        <span>Wallet</span>
                      </div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to=""
                      onClick={() => setShow(!show)}
                      className="menu-item"
                    >
                      <div className="flex py-2 gap-2 items-center justify-start font-medium">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <title>Tag</title>
                          <path
                            d="m10 24 12-12V2H12L0 14l10 10Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <span>Promos</span>
                      </div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to=""
                      onClick={() => setShow(!show)}
                      className="menu-item"
                    >
                      <div className="flex py-2 gap-2 items-center justify-start font-medium">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <title>Headset</title>
                          <path
                            d="M12 1C6.49 1 2 5.49 2 11v2c0 5.51 4.49 10 10 10v-3c-2.79 0-5.2-1.64-6.32-4H8V9H5.29C6.15 6.11 8.83 4 12 4s5.85 2.11 6.71 5H16v7h5.54c.3-.95.46-1.95.46-3v-2c0-5.51-4.49-10-10-10Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <span>Support</span>
                      </div>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to=""
                      onClick={() => setShow(!show)}
                      className="menu-item"
                    >
                      <div className="flex py-2 gap-2 items-center justify-start font-medium">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <title>Gear</title>
                          <path
                            d="M23 13.5v-3h-3.1c-.2-1.1-.6-2.1-1.2-3l2.2-2.2-2.1-2.1-2.2 2.2c-.9-.6-1.9-1-3-1.2V1h-3v3.1c-1.1.2-2.1.6-3 1.2L5.4 3.1 3.3 5.2l2.2 2.2c-.6.9-1 1.9-1.2 3H1.2v3h3.1c.2 1.1.6 2.1 1.2 3l-2.2 2.2 2.1 2.1 2.2-2.2c.9.6 1.9 1 3 1.2v3.1h3v-3.1c1.1-.2 2.1-.6 3-1.2l2.2 2.2 2.1-2.1-2.2-2.2c.6-.9 1-1.9 1.2-3H23v.1ZM12 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <span>Settings</span>
                      </div>
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* SideBar */}
      <div
        className={
          show
            ? " h-screen  w-screen lg:hidden   fixed top-0 right-0  z-10  backdrop-blur-sm "
            : " top-0 right-0 hidden"
        }
      >
        <div
          className=" 
           w-screen md:w-[513px]   right-0 fixed   "
        >
          <div className="flex w-full px-2 h-screen bg-white flex-col gap-3">
            <div
              onClick={() => {
                setShow(!show);
              }}
              className="h-6 mt-5 self-end"
            >
              <svg
                width="inherit"
                height="inherit"
                viewBox="0 0 24 24"
                fill="none"
                data-baseweb="icon"
                color="inherit"
              >
                <title>Close</title>
                <path
                  d="m18.1 8.1-2.2-2.2-3.9 4-3.9-4-2.2 2.2 4 3.9-4 3.9 2.2 2.2 3.9-4 3.9 4 2.2-2.2-4-3.9 4-3.9Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div className="flex justify-between w-full">
              <h3 className="text-3xl font-sans font-semibold">Faruk</h3>
              <img className="h-12 rounded-full" src={profileIcon} alt="" />
            </div>
            <div className="grid grid-cols-3 text-base font-semibold gap-2 ">
              <button className=" flex flex-col items-center py-3 bg-slate-100 rounded-md">
                {" "}
                <svg
                  width="1.2em"
                  height="1.2em"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <title>Receipt</title>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3 23V1h18v22l-5.5-3-3.5 3-3.5-3L3 23ZM7 9h10V6H7v3Zm10 3H7v3h10v-3Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>My trips</span>
              </button>
              <button className=" flex flex-col items-center py-3 bg-slate-100 rounded-md">
                <svg
                  width="1.2em"
                  height="1.2em"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <title>Wallet</title>
                  <g fill="currentColor">
                    <path d="M14.12 14H9.88l-3-3H1v9h22v-9h-5.88l-3 3ZM1 4v4h7.12l3 3h1.76l3-3H23V4H1Z"></path>
                  </g>
                </svg>
                <span>Wallet</span>
              </button>
              <button className=" flex flex-col items-center py-3 bg-slate-100 rounded-md">
                {" "}
                <svg
                  width="1.2em"
                  height="1.2em"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <title>Tag</title>
                  <path
                    d="m10 24 12-12V2H12L0 14l10 10Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>Promos</span>
              </button>
            </div>
            <button className="text-black font-[500] text-lg text-start">
              Support
            </button>
            <button className="text-black font-[500] text-lg text-start">
              {" "}
              Manage Account
            </button>
            <button className="text-black font-[500] text-lg text-start">
              Settings
            </button>
            <hr className="h-2  bg-slate-200 w-full" />
            <span className="text-xl font-semibold">Suggestions</span>
            <div className="flex flex-col">
              <button className="bg-slate-100 px-6  rounded-lg flex justify-center">
                <img className="h-24" src={taxiIcon} alt="" />
              </button>
              <span className="text-base text-center font-semibold">Ride</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserHeader;
