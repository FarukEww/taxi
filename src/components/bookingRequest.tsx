import React from "react";
import taxiIcon from "../../public/assets/ride.png";

const BookingRequest = () => {
  return (
    <div className="flex flex-col bg-white w-80 h-screen   overflow-y-auto">
      <h4 className="text-3xl">Choose a ride</h4>
      <p className="text">Recommended</p>
      <button className="flex gap-2 border-2 border-black items-center px-2 py-3">
        <img className="h-20" src={taxiIcon} alt="" />
        <div className="flex gap-1 flex-col">
          <p className="font-semibold text-xl">
            HybridGo <span className="text-xs">4</span>
          </p>
          <p className="font-light">4 min away</p>
        </div>
        <p className="font-semibold text-xl pl-4">$42.22</p>
      </button>
      <button className="flex gap-2 border-2 border-black items-center px-2 py-3">
        <img className="h-20" src={taxiIcon} alt="" />
        <div className="flex gap-1 flex-col">
          <p className="font-semibold text-xl">
            HybridGo <span className="text-xs">4</span>
          </p>
          <p className="font-light">4 min away</p>
        </div>
        <p className="font-semibold text-xl pl-4">$42.22</p>
      </button>
      <button className="flex gap-2 border-2 border-black items-center px-2 py-3">
        <img className="h-20" src={taxiIcon} alt="" />
        <div className="flex gap-1 flex-col">
          <p className="font-semibold text-xl">
            HybridGo <span className="text-xs">4</span>
          </p>
          <p className="font-light">4 min away</p>
        </div>
        <p className="font-semibold text-xl pl-4">$42.22</p>
      </button>
      <button className="flex gap-2 border-2 border-black items-center px-2 py-3">
        <img className="h-20" src={taxiIcon} alt="" />
        <div className="flex gap-1 flex-col">
          <p className="font-semibold text-xl">
            HybridGo <span className="text-xs">4</span>
          </p>
          <p className="font-light">4 min away</p>
        </div>
        <p className="font-semibold text-xl pl-4">$42.22</p>
      </button>
      <button className="flex gap-2 border-2 border-black items-center px-2 py-3">
        <img className="h-20" src={taxiIcon} alt="" />
        <div className="flex gap-1 flex-col">
          <p className="font-semibold text-xl">
            HybridGo <span className="text-xs">4</span>
          </p>
          <p className="font-light">4 min away</p>
        </div>
        <p className="font-semibold text-xl pl-4">$42.22</p>
      </button>
      <button className="flex gap-2 border-2 border-black items-center px-2 py-3">
        <img className="h-20" src={taxiIcon} alt="" />
        <div className="flex gap-1 flex-col">
          <p className="font-semibold text-xl">
            HybridGo <span className="text-xs">4</span>
          </p>
          <p className="font-light">4 min away</p>
        </div>
        <p className="font-semibold text-xl pl-4">$42.22</p>
      </button>
    </div>
  );
};

export default BookingRequest;
