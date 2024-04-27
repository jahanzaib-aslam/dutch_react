import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Container } from "react-bootstrap";
import classes from "./index.module.scss";
import { Fade, Zoom } from "react-awesome-reveal";

const Faqs = ({ button, faqPage, faqs }) => {
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    if (faq.length > 0) {
      setFaq(faqs);
    }
  }, []);

  return (
    <section className={`${classes.faqs} ${faqPage && classes.title}`}>
      <div className="faqsaccordion">
        <Container>
          <Fade direction="left">
            <h1>FAQs</h1>
          </Fade>
          <Fade direction="right">
            <Accordion>
              {faq.map((pg, index) => (
                <Accordion.Item eventKey={index}>
                  <Accordion.Header>{pg.question}</Accordion.Header>
                  <Accordion.Body>{pg.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Fade>
          {button ? (
            <Zoom>
              <div className="btnBox">
                <a href="#" className="btn btn-primary mainBtn">
                  View All
                </a>
              </div>
            </Zoom>
          ) : (
            ""
          )}
        </Container>
      </div>
    </section>
  );
};

export default Faqs;
