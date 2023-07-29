import React from "react";
import { HiMiniCalendar, HiMapPin } from "react-icons/hi2";
const EventList = ({ title, location, date, image }) => {
  const formatedDate = new Date(date).toLocaleDateString("eng-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="bg-white shadow-md md:w-[30rem] w-[95vw] h-40 overflow-hidden rounded-md flex justify-left cursor-pointer">
      <div className="w-40 overflow-hidden flex flex-col justify-center items-center">
        <img src={image} alt="coding-event" className="w-80" />
      </div>
      <div className="flex flex-col justify-center space-y-2 md:ml-5 ml-2">
        <div className="flex items-center space-x-2">
          <HiMiniCalendar className="text-sm" />
          <p className="text-sm">{formatedDate}</p>
        </div>
        <h2 className="md:text-xl text-md font-bold">{title}</h2>
        <div className="flex items-center space-x-2">
          <HiMapPin className="text-sm" />
          <p className="text-sm">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default EventList;
