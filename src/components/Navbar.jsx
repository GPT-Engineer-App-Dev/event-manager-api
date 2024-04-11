import { Box, Container, Flex, Heading, Link } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { isLoggedIn, logout } from "../services/AuthService";

const Navbar = () => {
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

export default Navbar;
