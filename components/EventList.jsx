import React from "react";
import { HiMiniCalendar, HiMapPin } from "react-icons/hi2";
const EventList = () => {
  return (
    <div className="bg-white shadow-md max-w-lg h-40 overflow-hidden rounded-md flex justify-left cursor-pointer">
      <div>
        <img
          src="/images/coding-event.jpg"
          alt="coding-event"
          className="h-[100%] w-[12rem]"
        />
      </div>
      <div className="flex flex-col justify-center space-y-2 ml-5">
        <div className="flex items-center space-x-2">
          <HiMiniCalendar className="text-3xl" />
          <p>5 May 2023</p>
        </div>
        <h2 className="text-xl font-bold">Programming for everyone</h2>
        <div className="flex items-center space-x-2">
          <HiMapPin className="text-3xl" />
          <p>Surat, India</p>
        </div>
      </div>
    </div>
  );
};

export default EventList;
