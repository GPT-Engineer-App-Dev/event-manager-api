import { Box, Flex } from "@chakra-ui/react";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <Flex justify="center" align="center" minH="100vh">
      <Box width="400px">
        <RegisterForm />
      </Box>
    </Flex>
  );
};

export default Register;
