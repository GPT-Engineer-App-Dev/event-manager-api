import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";

const Header = () => (
  <Box as="header" bg="blue.500" py={4}>
    <Container maxW="container.lg">
      <Heading as="h1" size="xl" color="white">
        Event Manager
      </Heading>
    </Container>
  </Box>
);

const MainContent = () => (
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
        <Text>Praesent euismod, nulla sit amet aliquam lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.</Text>
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
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <MainContent />
      <Footer />
    </Flex>
  );
};

export default Index;
