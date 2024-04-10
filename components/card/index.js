import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./index.module.scss";
import { Rotate, Zoom } from "react-awesome-reveal";

const Card = (params) => {
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
            <h2>{params.text[0].heading}</h2>
            <p>{params.text[0].text}</p>
          </div>
        </Zoom>
        <Row>
          {params.cards.map((card, index) => (
            <Col key={index} md={4} sm={6}>
              <Rotate>
                <div className={classes.cardbg}>
                  <p>{index + 1}</p>
                </div>
              </Rotate>
              <div className={classes.workCard}>
                <Zoom>
                  <h3>{card.heading}</h3>
                  <span>{card.text}</span>
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
