import React from "react";
import Container from "@/components/Container";
import EventList from "@/components/EventList";
const index = () => {
  return (
    <Container>
      <section className="mt-20">
        <EventList />
      </section>
    </Container>
  );
};

export default index;
