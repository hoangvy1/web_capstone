import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Validation from "./Validation";
import { useContext } from "react";
import { AuthContext } from "./authContext";

function LoginForm() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleInput = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = Validation(inputs);
    setErrors(err);
    try {
      if (err.username === "" && err.password === "") {
        await login(inputs);
        navigate("/home");
      }
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="cover">
      <h1>LOGIN</h1>
      <input
        type="text"
        placeholder="Username"
        name="username"
        onChange={handleInput}
        required
      />
      {errors.username && (
        <span className="text-danger"> {errors.username}</span>
      )}

      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleInput}
        required
      />
      {errors.password && (
        <span className="text-danger"> {errors.password}</span>
      )}
      <Button variant="primary" size="lg" onClick={handleSubmit}>
        Login
      </Button>
      {err && <span className="text-danger"> {err}</span>}
    </div>
  );
}

export default LoginForm;
