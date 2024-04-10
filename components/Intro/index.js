import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./index.module.scss";
import { Bounce } from "react-awesome-reveal";

const IntroSection = (pageData) => {
  const data = [
    {
      icon: "/images/item1.png",
      text: pageData.pageData[0].heading,
    },
    {
      icon: "/images/item2.png",
      text: pageData.pageData[1].heading,
    },
    {
      icon: "/images/item3.png",
      text: pageData.pageData[2].heading,
    },
    {
      icon: "/images/item4.png",
      text: pageData.pageData[3].heading,
    },
  ];

  return (
    <section>
      <Container>
        <div className={`program ${classes.program}`}>
          <Row>
            {data.map((item, ind) => (
              <Col key={ind} lg={3} md={6} className="mb-4 mb-lg-0">
                <Bounce>
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
