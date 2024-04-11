import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const Profile = () => {
  return (
    <>
      <Navbar />
      <Container maxW="container.lg" py={8}>
        <Flex direction="column" align="center">
          <Heading mb={4}>Profile Page</Heading>
          <Box bg="gray.50" p={4} rounded="md" shadow="md">
            <p>This is the profile page. Only authenticated users can see this.</p>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Profile;
