import React from "react";
import { auth } from "../components/firebase";

const Home = () => {
  return (
    <div>
      <center>
        <h2 style={{ color: "steelblue" }}>Hey,Welcome Back</h2>
        <button onClick={() => auth.signOut()} className="btn btn-danger">
          Sign Out
        </button>
      </center>
    </div>
  );
};

export default Home;
