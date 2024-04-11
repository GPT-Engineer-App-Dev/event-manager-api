import { Box, Heading } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Box>
      <Heading>Profile Page</Heading>
      <p>This is the profile page. Only authenticated users can see this.</p>
    </Box>
  );
};

export default Profile;
