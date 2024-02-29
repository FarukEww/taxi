import React from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeNavbar from "../components/homeNavbar";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <HomeNavbar />
      {/* Card-1 */}

      <div className="bg-black text-white h-full px-5 xl:h-[800px] xl:flex justify-center items-center gap-14">
        <div className="xl:max-w-md xl:mr-14">
          <h1 className="text-3xl xl:text-5xl font-semibold min-w-xs pt-5">
            Go anywhere with Hybrid Taxi
          </h1>
          <p className="text-lg py-5">Request a ride, hop in, and go.</p>

          <div className="mb-4 relative">
            <label hidden htmlFor="Location">
              Enter Location
            </label>
            <input
              type="text"
              className="text-black w-full px-3 py-3 rounded-md pl-10"
              id="Location"
              name="Location"
              placeholder="Enter location"
            />

            <svg
              width="60px"
              height="25px"
              viewBox="0 0 24 24"
              fill="none"
              role="button"
              aria-label="Current Pickup Location"
              className="pe-location-fetch css-bOZeEP text-black  absolute right-0 top-3"
            >
              <path
                d="M10.5 13.5.5 11 21 3l-8 20.5-2.5-10Z"
                fill="currentColor"
              ></path>
            </svg>

            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="none"
              data-testid="pickup-icon"
              data-movable-handle="true"
              className="w-3 h-3 absolute left-3 top-4 text-black"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>

          <div className="relative">
            <label hidden htmlFor="Destination">
              Enter Destination
            </label>
            <input
              type="text"
              className="text-black w-full px-3 py-3 rounded-md pl-10"
              id="Destination"
              name="Destination"
              placeholder="Enter destination"
            />
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="none"
              data-testid="drop-icon"
              data-movable-handle="true"
              className="w-3 h-3 absolute left-3 top-4 text-black"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22 2H2v20h20V2Zm-7 7H9v6h6V9Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <button
            onClick={() => navigate("/dashboard")}
            className=" bg-white text-black font-semibold py-3 px-5 my-6 rounded-md "
            type="button"
          >
            See prices
          </button>
        </div>

        <div>
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1026,h_1284/v1684852612/assets/ba/4947c1-b862-400e-9f00-668f4926a4a2/original/Ride-with-Uber.png"
            alt="Image"
            className="pb-8 xl:h-[700px] xl:w-[550px]"
          />
        </div>
      </div>

      <div className="xl:grid grid-cols-2 grid-rows-3 justify-center items-center gap-10 xl:mt-5">
        {/* Card-2 */}
        <div className="xl:max-w-md px-5 col-start-2 row-start-1 place-self-start self-center xl:ml-12">
          <h1 className="text-3xl xl:text-5xl font-semibold min-w-xs pt-5">
            Drive when you want, make what you need
          </h1>
          <p className="text-base py-5">
            Make money on your schedule with deliveries or rides—or both. You
            can use your own car or choose a rental through Uber.
          </p>

          <div className="xl:flex items-center gap-5">
            <button
              className=" bg-black text-white font-semibold py-3 px-5 my-6 rounded-md "
              type="button"
            >
              Get started
            </button>
            <br />

            <Link to="" className="border-b-2 hover:border-black">
              Already have an account? Sign in
            </Link>
          </div>
        </div>
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1026,h_1026/v1684855112/assets/96/4dd3d1-94e7-481e-b28c-08d59353b9e0/original/earner-illustra.png"
          alt="Image"
          className="pb-8 xl:h-[600px] xl:w-auto pt-7 px-5 col-start-1 row-start-1 place-self-end"
        />

        {/* Card-3 */}

        <div className="xl:max-w-md px-5 place-self-end self-center xl:mr-12">
          <h1 className="text-3xl xl:text-5xl font-semibold min-w-xs pt-5">
            The Uber you know, reimagined for business
          </h1>
          <p className="text-base py-5">
            Uber for Business is a platform for managing global rides and meals,
            and local deliveries, for companies of any size.
          </p>

          <div className="xl:flex items-center gap-5">
            <button
              className=" bg-black text-white font-semibold py-3 px-5 my-6 rounded-md "
              type="button"
            >
              Get started
            </button>
            <br />

            <Link to="" className="border-b-2 hover:border-black">
              Check out our solutions
            </Link>
          </div>
        </div>
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_558/v1684887108/assets/76/baf1ea-385a-408c-846b-59211086196c/original/u4b-square.png"
          alt="Image"
          className="pb-8  xl:h-[600px] md:w-full xl:w-auto pt-7 px-5"
        />

        {/* Card-4 */}

        <div className="xl:max-w-md xl:ml-14 px-5 col-start-2 row-start-3  ">
          <h1 className="text-3xl xl:text-5xl font-semibold min-w-xs pt-5">
            Make money by renting out your car
          </h1>
          <p className="text-base py-5">
            Connect with thousands of drivers and earn more per week with Uber’s
            free fleet management tools.
          </p>

          <button
            className=" bg-black text-white font-semibold py-3 px-5 my-6 rounded-md "
            type="button"
          >
            Get started
          </button>
          <br />
        </div>
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_558/v1696243819/assets/18/34e6fd-33e3-4c95-ad7a-f484a8c812d7/original/fleet-management.jpg"
          alt="Image"
          className="pb-8  xl:h-[600px] md:w-full xl:w-auto pt-7 px-5 col-start-1 row-start-3 place-self-end"
        />
      </div>
    </>
  );
};

export default Home;
