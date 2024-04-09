import React from "react";
import { Container } from "react-bootstrap";
import classes from "./index.module.scss";
import Navigation from "../nav";
import { TopHeader } from "../top-header";
const Header = () => {
  return (
    <header className={classes.header}>
      <TopHeader />
      <Navigation />
    </header>
  );
};

export default Header;
