const API_BASE_URL = "http://localhost:1337/api";

const register = async (username, email, password) => {
  const response = await fetch(`${API_BASE_URL}/auth/local/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  });

  if (!response.ok) {
    throw new Error("Registration failed");
  }

  return await response.json();
};

const login = async (identifier, password) => {
  const response = await fetch(`${API_BASE_URL}/auth/local`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ identifier, password }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const data = await response.json();
  localStorage.setItem("token", data.jwt);
  return data;
};

const isLoggedIn = () => {
  return !!localStorage.getItem("token");
};

const logout = () => {
  localStorage.removeItem("token");
};

export { register, login, isLoggedIn, logout };
