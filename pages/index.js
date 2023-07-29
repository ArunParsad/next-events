import React from "react";
import Container from "@/components/Container";
import EventList from "@/components/EventList";
import { getFeaturedEvents } from "@/dummy-data";
import SubmitButton from "@/components/SubmitButton";
import Link from "next/link";
const index = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <Container>
      <h2 className="text-3xl font-bold mt-10 text-center">Featured Events</h2>
      <form className="flex justify-center items-center mt-10 space-x-5">
        <select className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
          <option value="">Years</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
        <select className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
          <option value="">Months</option>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
        <SubmitButton>Search</SubmitButton>
      </form>
      <section className="mt-10 flex flex-col justify-center items-center space-y-5">
        {featuredEvents.map((event) => {
          return (
            <Link key={event.id} href={event.id}>
              <EventList {...event} />
            </Link>
          );
        })}
      </section>
    </Container>
  );
};

export default index;
