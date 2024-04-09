import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./index.module.scss";
import { Rotate, Zoom } from "react-awesome-reveal";

const Card = () => {
  const cardsData = [
    {
      number: 1,
      title: "Shopping",
      description:
        "Fill your flower basket with one or more different bouquets of flowers",
    },
    {
      number: 2,
      title: "Card & Gift",
      description:
        "Let us know what you want to say. Add a personal card or a gift.",
    },
    {
      number: 3,
      title: "Sending",
      description:
        "We offer the option to convey your message personally or anonymously.",
    },
  ];

  return (
    <section className={classes.work}>
      <Container>
        <Zoom>
          <div className="text-center">
            <h2>How easy is it?</h2>
            <p>
              Do you want to bring the beauty of nature into your home? We will
              explain how it works in the following 3 steps:
            </p>
          </div>
        </Zoom>
        <Row>
          {cardsData.map((card, index) => (
            <Col key={index} md={4} sm={6}>
              <Rotate>
                <div className={classes.cardbg}>
                  <p>{card.number}</p>
                </div>
              </Rotate>
              <div className={classes.workCard}>
                <Zoom>
                  <h3>{card.title}</h3>
                  <span>{card.description}</span>
                </Zoom>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Card;
