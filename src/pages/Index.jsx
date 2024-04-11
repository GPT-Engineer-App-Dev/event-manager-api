import { useState, useEffect } from "react";
import { Box, Container, Flex, Heading, Text, VStack, Link } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { isLoggedIn, logout } from "../services/AuthService";
import { fetchEvents } from "../services/EventService";

const Header = () => {
  const navigate = useNavigate();
  const authenticated = isLoggedIn();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Box as="header" bg="blue.500" py={4}>
      <Container maxW="container.lg">
        <Flex justify="space-between" align="center">
          <Heading as="h1" size="xl" color="white">
            Event Manager
          </Heading>
          <Flex>
            {authenticated ? (
              <>
                <Link as={RouterLink} to="/profile" color="white" mr={4}>
                  Profile
                </Link>
                <Link color="white" onClick={handleLogout}>
                  Logout
                </Link>
              </>
            ) : (
              <Link as={RouterLink} to="/login" color="white">
                Login
              </Link>
            )}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

const MainContent = ({ events, isAuthenticated }) => (
  <Container maxW="container.lg" py={8}>
    <VStack spacing={8} align="stretch">
      <Box bg="gray.50" p={4} rounded="md" shadow="md">
        <Heading as="h2" size="lg" mb={4}>
          Welcome to Event Manager
        </Heading>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra consequat magna, id malesuada velit malesuada quis.</Text>
      </Box>
      <Box bg="gray.50" p={4} rounded="md" shadow="md">
        <Heading as="h2" size="lg" mb={4}>
          Upcoming Events
        </Heading>
        {isAuthenticated ? (
          events.length > 0 ? (
            events.map((event) => (
              <Box key={event.id} mb={4}>
                <Heading as="h3" size="md">
                  {event.attributes.title}
                </Heading>
                <Text>{event.attributes.description}</Text>
                <Text>Date: {event.attributes.date}</Text>
              </Box>
            ))
          ) : (
            <Text>No events found.</Text>
          )
        ) : (
          <Text>Please log in to view events.</Text>
        )}
      </Box>
    </VStack>
  </Container>
);

const Footer = () => (
  <Box as="footer" bg="gray.100" py={4}>
    <Container maxW="container.lg">
      <Text textAlign="center">&copy; {new Date().getFullYear()} Event Manager. All rights reserved.</Text>
    </Container>
  </Box>
);

const Index = () => {
  const [events, setEvents] = useState([]);
  const isAuthenticated = isLoggedIn();

  useEffect(() => {
    const getEvents = async () => {
      if (isAuthenticated) {
        try {
          const fetchedEvents = await fetchEvents();
          setEvents(fetchedEvents);
        } catch (error) {
          console.error("Failed to fetch events:", error);
        }
      }
    };

    getEvents();
  }, [isAuthenticated]);

  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <MainContent events={events} isAuthenticated={isAuthenticated} />
      <Footer />
    </Flex>
  );
};

export default Index;
