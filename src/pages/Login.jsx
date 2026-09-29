import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password,
      });

      const token = response.data.token || response.data.accessToken;

      if (!token) {
        setError("Token not received from server!");
        return;
      }

      // Explicitly store token in LocalStorage for Dashboard
      localStorage.setItem("token", token);

      // Call Context Login Function if provided
      if (login) {
        login(token);
      }

      // Redirect to Dashboard
      navigate("/dashboard");
    } catch (err) {
      console.error("Login Error:", err);
      setError(err.response?.data?.message || "Invalid credentials!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.card}>
        <h2 style={styles.title}>Admin Panel Login</h2>

        {error && <div style={styles.error}>{error}</div>}

        <div style={styles.group}>
          <label style={styles.label}>Username</label>
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            placeholder="Enter username"
          />
        </div>

        <div style={styles.group}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            placeholder="Enter password"
          />
        </div>

        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Authenticating..." : "Login to Dashboard"}
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0d0d0d",
    color: "#fff",
    padding: "20px",
  },
  card: {
    width: "100%",
    maxWidth: "400px",
    padding: "30px",
    borderRadius: "12px",
    backgroundColor: "#171717",
    border: "1px solid #262626",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
  },
  title: { textAlign: "center", marginBottom: "24px", color: "#d4af37" },
  error: {
    backgroundColor: "#450a0a",
    color: "#fca5a5",
    padding: "10px",
    borderRadius: "6px",
    marginBottom: "16px",
    fontSize: "14px",
    border: "1px solid #7f1d1d",
  },
  group: { marginBottom: "18px" },
  label: { display: "block", marginBottom: "8px", fontSize: "14px", color: "#a3a3a3" },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #333",
    backgroundColor: "#0a0a0a",
    color: "#fff",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#d4af37",
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default Login;