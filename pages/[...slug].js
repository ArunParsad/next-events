import Container from "@/components/Container";
import { getFilteredEvents } from "@/helpers/api-utils";
import { HiMapPin, HiCalendar } from "react-icons/hi2";

const FilteredEvents = (props) => {
  const formatedDate = new Date(props.event[0].date).toLocaleDateString(
    "eng-us",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <>
      <Container>
        <h2 className="text-2xl font-bold md:text-4xl text-center mt-10">
          {props.event[0].title}
        </h2>
        <section className="flex space-x-5 flex-col md:flex-row justify-center items-center md:items-start md:mt-10 mt-5">
          <div className="md:w-[40rem] md:h-[30rem] w-full h-full overflow-hidden rounded-md nd:mt-10 mt-0 flex flex-col justify-center items-center">
            <img
              src={"http://localhost:3000/" + props.event[0].image}
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
                <p className="text-sm">{props.event[0].location}</p>
              </div>
            </div>
            <p className="max-w-lg mt-5">{props.event[0].description}</p>
          </div>
        </section>
      </Container>
    </>
  );
};

export default FilteredEvents;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const year = +params.slug[0];
  const month = +params.slug[1];
  const event = await getFilteredEvents({ year: year, month: month });

  if (event.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      event: event,
    },
  };
};
