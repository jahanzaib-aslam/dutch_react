import React from "react";
import classes from "./index.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export const TopHeader = () => {
  return (
    <div className={classes.topHeader}>
      <Container>
        <Row className="m-0 justify-content-between">
          <Col
            sm={3}
            className=" d-flex justify-content-center justify-content-sm-start mb-2 mb-sm-0"
          >
            <a href="#">
              <img src="images/facebook.png" alt="" />
            </a>
            <a href="#">
              <img src="images/insta.png" alt="" />
            </a>
            <a href="#">
              <img src="images/linkedin.png" alt="" />
            </a>
          </Col>
          <Col
            sm={9}
            className="d-flex justify-content-center justify-content-sm-end part2"
          >
            <div className={`me-4 ${classes.topLinks}`}>
              <img src="images/whatsapp.png" alt="img" />
              <a href="https://api.whatsapp.com/send/?phone=0633456787">
                Whatsapp: 0633456787
              </a>
            </div>
            <div className={` ${classes.topLinks}`}>
              <img src="images/mail.png" alt="img" />
              <a href="mailto:info@dutchflowers.com">info@dutchflowers.com</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
