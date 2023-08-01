import React from "react";
import { getAllEvents } from "@/helpers/api-utils";
import EventList from "@/components/EventList";
import Link from "next/link";
import Container from "@/components/Container";
const events = ({ allEvents }) => {
  return (
    <Container>
      <section className="mt-10 flex flex-col justify-center items-center space-y-5">
        {allEvents.map((event) => {
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

export default events;

export const getStaticProps = async () => {
  const events = await getAllEvents();
  return {
    props: {
      allEvents: events,
    },
    revalidate: 300,
  };
};
