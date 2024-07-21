import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import classes from "./index.module.scss";
import Navigation from "../nav";
import { TopHeader } from "../top-header";
const Header = () => {
  const [accessToken, setAccessToken] = useState(false);

  useEffect(() => {
    // Retrieve the data from localStorage
    var userDataJSON = localStorage.getItem("user");

    if (userDataJSON != "undefined") {
      // Parse the JSON string back into a JavaScript object
      var userData = JSON.parse(userDataJSON);

      // Now you can access the data
      if (userData && userData.token) {
        setAccessToken(userData.token);
      }
    }
  }, []);

  return (
    <header className={classes.header}>
      <TopHeader />
      <Navigation accessToken={accessToken} />
    </header>
  );
};

export default Header;
