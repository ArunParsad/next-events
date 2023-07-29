import Container from "@/components/Container";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";
import { HiMapPin, HiCalendar } from "react-icons/hi2";
const EventDetailPage = () => {
  const router = useRouter();
  const eventId = router.query.eventid;
  const event = getEventById(eventId);
  const formatedDate = new Date(event?.date).toLocaleDateString("eng-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  if (!event) {
    return (
      <Container>
        <div className="flex flex-col justify-center items-center h-screen">
          <h2 className="text-xl font-bold">Loading...</h2>
        </div>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <h2 className="text-2xl font-bold md:text-4xl text-center mt-10">
          {event.title}
        </h2>
        <section className="flex space-x-5 flex-col md:flex-row justify-center items-center md:items-start md:mt-10 mt-5">
          <div className="md:w-[40rem] md:h-[30rem] w-full h-full overflow-hidden rounded-md nd:mt-10 mt-0 flex flex-col justify-center items-center">
            <img
              src={event.image}
              alt=""
              className="w-80 md:w-full rounded-md"
            />
          </div>
          <div>
            <div className="space-y-5 flex flex-col justify-center items-center mt-5 ">
              <div className="bg-white shadow-md rounded-md flex h-20 w-full justify-center space-x-5 items-center">
                <HiCalendar className="text-2xl" />
                <p className="text-sm">{formatedDate}</p>
              </div>
              <div className="bg-white shadow-md rounded-md flex h-20 w-full justify-center space-x-5 items-center px-5">
                <HiMapPin className="text-2xl" />
                <p className="text-sm">{event.location}</p>
              </div>
            </div>
            <p className="max-w-lg mt-5">{event.description}</p>
          </div>
        </section>
      </Container>
    </>
  );
};

export default EventDetailPage;
