import React, { useState } from "react";
import UserHeader from "../components/UserHeader";
import { useFormik } from "formik";
import BookingRequest from "../components/bookingRequest";

const Dashboard = () => {
  const [ride, setRide] = useState<boolean>(false);

  const { handleChange, handleSubmit, values, setFieldValue } = useFormik({
    initialValues: {
      pickup_location: "",
      dropoff_location: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <div className=" flex flex-col h-full lg:h-screen bg-transparent lg:bg-slate-200">
        <UserHeader />
        <div
          className="flex flex-col-reverse lg:flex-row
         w-full h-full py-3 bg-white lg:px-3 gap-1"
        >
          <form
            onSubmit={handleSubmit}
            className="flex w-full h-80 lg:w-96 p-4 lg:border-2 lg:border-slate-200 rounded-lg flex-col gap-3"
          >
            <h4 className="text-xl  font-semibold">Get a ride</h4>
            <div className="relative">
              <input
                type="search"
                value={values.pickup_location}
                onChange={handleChange}
                name="pickup_location"
                id="pickup_location"
                placeholder="Pickup location"
                className="pl-8 w-full text-sm rounded-lg pr-3 py-3 focus:border-2 focus:border-black bg-gray-100"
              />
              <div className="absolute top-[16px] left-3">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="none"
                  data-testid="pickup-icon"
                  data-movable-handle="true"
                >
                  <title>Radio button selected</title>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="relative">
              <input
                type="search"
                placeholder="Dropoff location"
                value={values.dropoff_location}
                name="dropoff_location"
                id="dropoff_location"
                onChange={handleChange}
                className="pl-8 focus:border-2 text-sm focus:border-black w-full rounded-lg pr-3 bg-gray-100 py-3 "
              />
              <div className="absolute top-[16px] left-3">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="none"
                  data-testid="drop-icon"
                  data-movable-handle="true"
                >
                  <title>Dropoff</title>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22 2H2v20h20V2Zm-7 7H9v6h6V9Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>

            {/* <button className="flex justify-between px-3 py-3  rounded-lg w-full items-center bg-gray-100">
              <div className="flex gap-2  items-center">
                <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
                  <title>Clock</title>
                  <path
                    d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm6 13h-8V4h3v7h5v3Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="text-gray-400 text-sm"> Pick up now</span>
              </div>
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
                <title>Chevron down small</title>
                <path
                  d="M18 8v3.8l-6 4.6-6-4.6V8l6 4.6L18 8Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button> */}
            <button
              onClick={() => setRide(!ride)}
              className="  mt-2 px-3 py-3 rounded-lg w-full text-gray-400  bg-slate-100"
            >
              Search
            </button>
          </form>

          <div className={ride ? "h-fit" : "hidden"}>
            <BookingRequest />
          </div>

          <div className="  w-full  bg-white mb-4">
            <iframe
              className="w-full -mt-28 lg:px-4 lg:mt-0 h-[70vh] lg:h-full "
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14683.296709358054!2d72.50880125!3d23.0669067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1704262443983!5m2!1sen!2sin"
              width=""
              height=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
