export const getAllEvents = async () => {
  const res = await fetch(
    "https://next-events-5289b-default-rtdb.firebaseio.com/events.json"
  );
  const data = await res.json();
  let events = [];
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
};

export const getFeaturedEvents = async () => {
  const events = await getAllEvents();
  return events.filter((event) => event.isFeatured);
};
