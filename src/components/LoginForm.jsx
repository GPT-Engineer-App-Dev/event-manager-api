import { Button, FormControl, FormLabel, Input, Link, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const LoginForm = () => {
  return (
    <VStack spacing={4} align="stretch">
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input type="password" />
      </FormControl>
      <Button type="submit" colorScheme="blue">
        Login
      </Button>
      <Link as={RouterLink} to="/register">
        Don't have an account? Register
      </Link>
    </VStack>
  );
};

export default LoginForm;
