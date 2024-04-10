import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./index.module.scss";
import { Fade, Zoom } from "react-awesome-reveal";

const Dutchflowers = (pageData) => {
  return (
    <section className={classes.flower}>
      <Container>
        <Row>
          <Col lg={7}>
            <Fade direction="left">
              <h2>{pageData.pageData[0].heading}</h2>
              <p>{pageData.pageData[0].text}</p>
              <div className="btnBox text-start">
                <Zoom>
                  <a href="#" className="btn btn-primary mainBtn">
                    Start here
                  </a>
                </Zoom>
              </div>
            </Fade>
          </Col>
          <Col lg={5}>
            <Fade direction="right">
              <img src="images/dutchflower.png" width={500} height={500} />
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Dutchflowers;
