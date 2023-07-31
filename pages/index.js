import React, { useRef } from "react";
import Container from "@/components/Container";
import EventList from "@/components/EventList";
import SubmitButton from "@/components/SubmitButton";
import Link from "next/link";
import { useRouter } from "next/router";
import { getFeaturedEvents } from "@/helpers/api-utils";

const index = (props) => {
  const router = useRouter();
  const selectedMonth = useRef("");
  const selectedYear = useRef("");

  const featuredEvents = props.featuredEvents;
  const onSubmitHandelar = (e) => {
    const path = `${selectedYear.current.value}/${selectedMonth.current.value}`;
    router.push(path);
    e.preventDefault();
  };
  return (
    <Container>
      <h2 className="text-3xl font-bold mt-10 text-center">Featured Events</h2>
      <form
        className="flex justify-center items-center mt-10 space-x-5"
        onSubmit={onSubmitHandelar}
      >
        <select
          className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
          ref={selectedYear}
        >
          <option value="">Years</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
        <select
          className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
          ref={selectedMonth}
        >
          <option value="">Months</option>
          <option value="01">January</option>
          <option value="02">February</option>
          <option value="03">March</option>
          <option value="04">April</option>
          <option value="05">May</option>
          <option value="06">June</option>
          <option value="07">July</option>
          <option value="08">August</option>
          <option value="09">September</option>
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

export const getStaticProps = async () => {
  const events = await getFeaturedEvents();
  return { props: { featuredEvents: events } };
};

export default index;
