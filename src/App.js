import React, { useEffect, useState } from "react";
import { auth } from "./components/firebase";
import UserAuth from "./components/UserAuth";
import "./index.css";
import Home from "./components/Home";

const App = () => {
  const [presentUser, setPresentUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setPresentUser({
          uid: user?.uid,
          email: user?.email,
        });
      } else {
        setPresentUser(null);
      }
    });
  }, []);

  return <div>{presentUser ? <Home /> : <UserAuth />}</div>;
};

export default App;
