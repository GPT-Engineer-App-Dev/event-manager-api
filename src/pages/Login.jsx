import { Box, Flex } from "@chakra-ui/react";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <Flex justify="center" align="center" minH="100vh">
      <Box width="400px">
        <LoginForm />
      </Box>
    </Flex>
  );
};

export default Login;
