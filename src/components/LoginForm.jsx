import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, FormControl, FormLabel, Input, Link, VStack, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { login } from "../services/AuthService";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { jwt } = await login(email, password);
      localStorage.setItem("token", jwt);
      navigate("/profile");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4} align="stretch">
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        {error && <Text color="red.500">{error}</Text>}
        <Button type="submit" colorScheme="blue">
          Login
        </Button>
        <Link as={RouterLink} to="/register">
          Don't have an account? Register
        </Link>
      </VStack>
    </form>
  );
};

export default LoginForm;
