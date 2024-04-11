import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, FormControl, FormLabel, Input, Link, VStack, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { register } from "../services/AuthService";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(username, email, password);
      setSuccess(true);
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4} align="stretch">
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        {error && <Text color="red.500">{error}</Text>}
        {success && <Text color="green.500">Registration successful! Redirecting to login...</Text>}
        <Button type="submit" colorScheme="blue">
          Register
        </Button>
        <Link as={RouterLink} to="/login">
          Already have an account? Login
        </Link>
      </VStack>
    </form>
  );
};

export default RegisterForm;
