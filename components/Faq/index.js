import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Container } from "react-bootstrap";
import classes from "./index.module.scss"
import { Fade, Zoom } from "react-awesome-reveal";

const Faqs = ({button, faqPage}) => {
  return (
    <section className={`${classes.faqs} ${faqPage&& classes.title}`}>
      <div className="faqsaccordion">
      <Container>
      <Fade direction="left">
      <h1>FAQs</h1>
      </Fade>
      <Fade direction="right">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              1. How can I order fresh flowers on your webshop?
            </Accordion.Header>
            <Accordion.Body>
              Select the desired product and add it to the shopping cart.
              <br></br>
              You can add various additional items here.<br></br>
              When you are finished shopping, fill in the contact details and
              proceed to payment.<br></br>
              When the products are paid for, you will automatically receive a
              confirmation by email. Easy, right?!
            
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              2. How can I log in to my Dutchflowers account?
            </Accordion.Header>
            <Accordion.Body>
              Via 'login' in the top right of the screen, you can log in with
              your email address and password.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              3. Can I order flowers for my dear girlfriend abroad?
            </Accordion.Header>
            <Accordion.Body>
              Yes, you certainly can! You can even add an extra gift to make her
              extremely happy;<br></br>
              We ship most of our products to countries such as Germany, France,
              and Belgium.<br></br>
              If your girlfriend lives outside these countries but within the
              EU, please contact us to see what we can do for you.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              3. Can I order flowers for my dear girlfriend abroad?
            </Accordion.Header>
            <Accordion.Body>
              Do you want to order more flowers than we have in stock, for
              example?<br></br>
              Or do you want flowers delivered for a special event?<br></br>
              For all orders that require extra attention, please contact us
              personally and ask about the possibilities.<br></br>
              Our flower buyers know exactly when and what is available.
              <br></br>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              4. Is it possible to order business and/or large quantities?
            </Accordion.Header>
            <Accordion.Body>
              Do you want to order more flowers than we have in stock, for
              example?<br></br>
              Or do you want flowers delivered for a special event?<br></br>
              For all orders that require extra attention, please contact us
              personally and ask about the possibilities.<br></br>
              Our flower buyers know exactly when and what is available.
              <br></br>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>5. What is your delivery time?</Accordion.Header>
            <Accordion.Body>
              All orders placed on weekdays before 10:00 am will be shipped the
              same day. These are all the items that are active on the webshop.
              <br></br>
              Because the flower auction is open from Monday to Friday, we can
              prepare everything for shipment on these days.<br></br>
              If you order later than 10:00 am, we will try our best to still
              send it the same day.<br></br>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </Fade>
        {button ? <Zoom>
        <div className="btnBox">
          <a href="#" className="btn btn-primary mainBtn">
            View All
          </a>
        </div>
        </Zoom>
        :""}
      </Container>
      </div>
    </section>
  );
};

export default Faqs;
