import React, { useState } from "react";
import axios from "axios";



const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    const test_username = "test";
    const test_password = "test";

    if (username === test_username && password === test_password) {
      localStorage.setItem("access_token", "test_token");
      alert("Login Successful!");
      window.location.href = "/welcome";
      return;

    }

    // try {
    //   const response = await axios.post("http://127.0.0.1:8000/login/", {
    //     username,
    //     password,
    //   });
    //
    //   localStorage.setItem("access_token", response.data.access);
    //   alert("Login Successful!");
    //   window.location.href = "/welcome";
    // } catch (err) {
    //   setError("Invalid Username or Password");
    //
    // }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
