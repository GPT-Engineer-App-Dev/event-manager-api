import { Button, FormControl, FormLabel, Input, Link, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const RegisterForm = () => {
  return (
    <VStack spacing={4} align="stretch">
      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input type="password" />
      </FormControl>
      <Button type="submit" colorScheme="blue">
        Register
      </Button>
      <Link as={RouterLink} to="/login">
        Already have an account? Login
      </Link>
    </VStack>
  );
};

export default RegisterForm;
