import React from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";


const Footer = () => {
  return (
<footer>
        <div className="top-footer">
          <Container>
            <Row>
              <Col lg={5} className="mb-md-0">
                <img
                  src="/images/footer-logo.png"
                  alt="logo"
                  className="logo mb-4"
                />
                <p>
                  SECURE PAYMENT: We value secure transactions as much as you
                  do. Therefore, all payments take place via a secure SSL
                  connection. All prices mentioned include VAT.
                </p>
                <div>
                  <a href="#">
                    <img src="/images/visa.png" alt="" width={"38px"} />
                  </a>
                  <a href="#">
                    <img src="/images/mastercard.png" alt="" width={"38px"} />
                  </a>
                  <a href="#">
                    <img src="/images/paypal.png" alt="" width={"38px"} />
                  </a>
                  <a href="#">
                    <img src="/images/discover.png" alt="" width={"38px"} />
                  </a>
                  <a href="#">
                    <img src="/images/amazon.png" alt="" width={"38px"} />
                  </a>
                </div>
              </Col>
              <Col lg={2} className="my-md-0">
                <ul>
                  <h3>Customer Service</h3>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                  <li>
                    <a href="/product-range">Product Range</a>
                  </li>
                  <li>
                    <a href="/returns">Return</a>
                  </li>
                  <li>
                    <a href="/conditions">Condition</a>
                  </li>
                  <li>
                    <a href="/privacy">Privacy statement</a>
                  </li>
                  <li>
                    <a href="/faqs">FAQs</a>
                  </li>
                </ul>
              </Col>
              <Col lg={2} className="my-md-0">
                <ul>
                  <h3>Shopping</h3>
                 
                  <li>
                    <a href="/weddings">WeddingsCustom work</a>
                  </li>
                  <li>
                    <a href="/b2b">B2B</a>
                  </li>
                  <li>
                    <a href="/pers">Do you have a press request</a>
                  </li>
                  <li>
                    <a href="/vacancies">Vacancies</a>
                  </li>
                </ul>
              </Col>
              <Col lg={3}>
                <h3 className="mb-3">NEWSLETTER</h3>
                <p>Receive our newsletter with offers and the latest trends.</p>
                <div className="input-group">
                  <Form.Control type="email" placeholder="Email" />
                  <img src="/images/mail.png" alt="" />
                </div>
                <Button class="btn btn-danger mt-3"> Submit </Button>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="copyright">
          <Container>
            <Row className="justify-content-center m-0 custom-row">
              <div>
                <a href="#" class="text-white footer-lang">
                  Dutchflowers Netherlands
                </a>
              </div>
              <div>
                <a href="#" class="text-white footer-lang">
                Dutchflowers Belgium
                </a>
              </div>
              <div>
                <a href="#" class="text-white footer-lang">
                Dutchflowers Germany
                </a>
              </div>
              <div>
                <a href="#" class="text-white footer-lang">
                Dutchflowers France
                </a>
              </div>
              <div>
                <a href="#" class="text-white footer-lang">
                Dutchflowers United Kingdom
                </a>
              </div>
            </Row>
            <div className="copyright-inner">
            <Row className="justify-content-center m-0">
            <Col lg={6} className="d-flex justify-content-center">
            <p className="text-center">Copyright © 1997 - 2023 Dutchflowers.com</p>
            </Col>
            </Row>
            </div>
          </Container>
        </div>
      </footer>
  );
};

export default Footer;
