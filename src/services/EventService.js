const API_BASE_URL = "http://localhost:1337/api";

const fetchEvents = async () => {
  const response = await fetch(`${API_BASE_URL}/events`);

  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }

  const data = await response.json();
  return data.data;
};

export { fetchEvents };
