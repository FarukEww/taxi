import React from "react";
import UserHeader from "../components/UserHeader";
import { Link } from "react-router-dom";

const TripHistory = () => {
  return (
    <>
      <div className="flex flex-col h-full lg:h-screen bg-transparent lg:bg-white">
        <UserHeader />

        <div className="flex flex-col gap-10 items-center mx-3 pt-8">
          <div className="">
            <h1 className="text-[32px] font-bold mb-4 ">Upcoming</h1>
            <div className="">
              <Link
                to="#"
                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                style={{ textDecoration: "none" }}
              >
                <div className="relative w-full md:w-64 h-64 md:h-auto px-2 py-2">
                  <img
                    className="object-cover w-full h-full rounded-lg"
                    src="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFwfGVufDB8fDB8fHww"
                    alt="mapimage"
                  />
                </div>
                <div className="flex flex-col justify-between p-4 leading-normal md:w-auto">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Jan 30 • 9:07 PM <br />
                    ₹41.00
                  </p>
                  <button
                    className="flex items-center justify-center gap-2 px-[6px] py-2 rounded-[38px] max-w-[82px] text-xs font-medium bg-[#EEEEEE] "
                    type="button"
                  >
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <title>Details SVG</title>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3 23V1h18v22l-5.5-3-3.5 3-3.5-3L3 23ZM7 9h10V6H7v3Zm10 3H7v3h10v-3Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span>Details</span>
                  </button>
                </div>
              </Link>
            </div>
          </div>

          <div>
            <h1 className="text-[32px] font-bold mb-4">Past</h1>
            <div className="">
              <Link
                to="#"
                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                style={{ textDecoration: "none" }}
              >
                <div className="relative w-full md:w-64 h-64 md:h-auto px-2 py-2">
                  <img
                    className="object-cover w-full h-full rounded-lg"
                    src="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFwfGVufDB8fDB8fHww"
                    alt="mapimage"
                  />
                </div>
                <div className="flex flex-col justify-between p-4 leading-normal md:w-auto">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Jan 30 • 9:07 PM <br />
                    ₹41.00
                  </p>
                  <button
                    className="flex items-center justify-center gap-2 px-[6px] py-2 rounded-[38px] max-w-[82px] text-xs font-medium bg-[#EEEEEE] "
                    type="button"
                  >
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <title>Details SVG</title>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3 23V1h18v22l-5.5-3-3.5 3-3.5-3L3 23ZM7 9h10V6H7v3Zm10 3H7v3h10v-3Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span>Details</span>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TripHistory;
