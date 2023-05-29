import React, { useState } from "react";
import { auth } from "./firebase";

const UserAuth = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const signUp = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => console.log(user))
      .catch((err) => console.log(err));
  };
  const signIn = (e) => {
    e.preventDefault();
    setData("");
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => console.log(user))
      .catch((err) => console.log(err));
    setData("");
  };
  return (
    <>
      <div class="login-box">
        <form>
          <h3>Email Authenticator App</h3>
          <div class="user-box">
            <input
              type="text"
              name="email"
              value={email}
              onChange={changeHandler}
              required={true}
            />
            <label>Username</label>
          </div>
          <div class="user-box">
            <input
              onChange={changeHandler}
              type="password"
              name="password"
              value={password}
              required={true}
            />
            <label>Password</label>
          </div>
          <div>
            <button onClick={signIn} className="btn btn-primary">
              Sign In
            </button>{" "}
            &nbsp;&nbsp;
            <button onClick={signUp} className="btn btn-danger">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserAuth;
