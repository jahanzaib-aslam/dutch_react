import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./index.module.scss";
import { Fade, Zoom } from "react-awesome-reveal";

const Dutchflowers = () => {
  return (
    <section className={classes.flower}>
      <Container>
        <Row>
          <Col lg={7}>
            <Fade direction="left">
              <h2>Say it with Dutchflowers</h2>
              <p>
                Well, maybe you don't know the site yet. But Dutchflowers is
                actually an online shop where you can easily buy fresh flowers.
                Normally, you would go to a florist if you want a beautiful
                bouquet, but not everyone has one nearby. We are here for people
                who want to order flowers from the comfort of their own home and
                have them delivered. The advantage is that you always pay the
                daily price and can choose from a wider range of flowers than
                all the flower shops in Amsterdam, Berlin, Paris, and London
                combined.
              </p>
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
