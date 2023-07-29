import React from "react";
import { getAllEvents } from "@/dummy-data";
import EventList from "@/components/EventList";
import Link from "next/link";
import Container from "@/components/Container";
const events = () => {
  const allEvents = getAllEvents();

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
