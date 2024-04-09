import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./index.module.scss";
import { Bounce } from "react-awesome-reveal";

const IntroSection = () => {
  const data = [
    {
      icon: "/images/item1.png",
      text: "Fresh Cut Flowers That Make You Happy",
    },
    {
      icon: "/images/item2.png",
      text: "The Largest Assortment In Europe",
    },
    {
      icon: "/images/item3.png",
      text: "Sent With Love From The Netherlands",
    },
    {
      icon: "/images/item4.png",
      text: "We Know Everything About Flowers",
    },
  ];

  return (
    <section>
      <Container>
        <div className={`program ${classes.program}`}>
          <Row>
            {data.map((item, ind) => (
              <Col key={ind} lg={3} md={6} className="mb-4 mb-lg-0">
              <Bounce >
                <div className={classes.statsItem}>
                  <div className={classes.statsIcon}>
                    <img src={item.icon} alt="img" />
                  </div>
                  <div className={classes.statsText}>
                    <h4>{item.text}</h4>
                  </div>
                </div>
                </Bounce>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default IntroSection;
