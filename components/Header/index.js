import React, { useState } from "react";
import { Container } from "react-bootstrap";
import classes from "./index.module.scss";
import Navigation from "../nav";
import { TopHeader } from "../top-header";
const Header = () => {
  const [accessToken, setAccessToke] = useState(true) 
  return (
    <header className={classes.header}>
      <TopHeader />
      <Navigation accessToken={accessToken} />
    </header>
  );
};

export default Header;
