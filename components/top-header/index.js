import React from "react";
import classes from "./index.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import Image from "next/image";

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
              <Image src="/images/facebook.png" alt="" width={20} height={20} />
            </a>
            <a href="#">
              <Image src="/images/insta.png" alt="" width={20} height={20} />
            </a>
            <a href="#">
              <Image src="/images/linkedin.png" alt="" width={20} height={20} />
            </a>
          </Col>
          <Col
            sm={9}
            className="d-flex justify-content-center justify-content-sm-end part2"
          >
            <div className={`me-4 ${classes.topLinks}`}>
              <Image src="/images/whatsapp.png" alt="img" width={16} height={16}/>
              <a href="https://api.whatsapp.com/send/?phone=0633456787">
                Whatsapp: 0633456787
              </a>
            </div>
            <div className={` ${classes.topLinks}`}>
              <Image src="/images/mail.png" alt="img" width={16} height={16}/>
              <a href="mailto:info@dutchflowers.com">info@dutchflowers.com</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
