import React from "react";
import Layout from "../../Layout";
import Seo from "../../Seo/Seo";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import { Col, Container, Row } from "react-bootstrap";

const Checkout = () => {
  const breadcrumbItems = [
    { title: "Home", href: "/" },
    { text: "Checkout", href: "#" },
  ];
  return (
    <Layout>
      <Seo />
      <Breadcrumbs breadcrumbItems={breadcrumbItems} title={"Checkout"} />
      <section className="checkout">
        <Container>
          <div className="checkout-form">
            <form action="#">
              <div className="checkForm mb-5">
                <Row>
                  <Col md={9}>
                    <div className="checkoutSection mb-3 mb-md-5">
                      <h6 className="checkout__title">Your Information</h6>
                      <Row>
                        <Col lg={6}>
                          <div className="checkoutFields">
                            <div class="checkout__input checkoutSet">
                              <input
                                type="text"
                                name="first-name"
                                placeholder="First Name*"
                              />
                            </div>
                            <div class="checkout__input checkoutSet">
                              <input
                                type="text"
                                name="last-name"
                                placeholder="Last Name*"
                              />
                            </div>
                            <div class="checkout__input checkoutSet">
                              <input
                                type="text"
                                name="phone"
                                placeholder="Phone*"
                              />
                            </div>
                            <div class="checkout__input checkoutSet">
                              <input
                                type="email"
                                name="email"
                                placeholder="Email*"
                              />
                            </div>
                            <div className="checkoutOptions">
                              <div className="checkout__input__checkbox">
                                <label htmlFor="acc-or">
                                  Create account?
                                  <input type="checkbox" id="acc-or" />
                                  <span className="checkmark"></span>
                                </label>
                              </div>
                            </div>
                            <div className="checkoutOptions">
                              <div className="checkout__input__checkbox">
                                <label htmlFor="deladoth">
                                  Billing address is also shipping address
                                  <input type="checkbox" id="deladoth" />
                                  <span className="checkmark"></span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div className="checkoutFields">
                            <Row className="checkoutSet">
                              <Col md={6}>
                                <div className="checkout__input">
                                  <input
                                    type="text"
                                    name="zip-code"
                                    placeholder="Zip Code*"
                                  />
                                </div>
                              </Col>
                              <Col md={6}>
                                <div className="checkout__input">
                                  <input
                                    type="text"
                                    name="city"
                                    placeholder="City*"
                                  />
                                </div>
                              </Col>
                            </Row>
                            <Row className="checkoutSet">
                              <Col md={8}>
                                <div className="checkout__input">
                                  <input
                                    type="text"
                                    name="street"
                                    placeholder="Street*"
                                    class="checkout__input__add"
                                  />
                                </div>
                              </Col>
                              <Col md={4}>
                                <div className="checkout__input">
                                  <input
                                    type="text"
                                    name="house-number"
                                    class="checkout__input__add"
                                    placeholder="Number*"
                                  />
                                </div>
                              </Col>
                            </Row>
                            <div
                              class="checkout__input checkoutSet"
                              data-v-02f2bc0c=""
                            >
                              <select data-v-02f2bc0c="">
                                <option value="nl">Netherlands</option>
                                <option value="be">Belgium</option>
                                <option value="de">Germany</option>
                                <option value="fr">France</option>
                                <option value="uk">England</option>
                              </select>
                            </div>
                            <div class="checkout__input checkoutSet">
                              <textarea
                                type="text"
                                name="notes"
                                placeholder="Additional Notes"
                                rows="3"
                              />
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col md={3} className="summary">
                    <div className="paymentGateways">
                      <div className="checkout__input__radio">
                        <div className="paymentGatewayItem">
                          <img
                            src="https://www.mollie.com/images/payscreen/methods/ideal.png"
                            alt="img"
                          />
                          <label htmlFor="ideal">
                            iDEAL
                            <input
                              type="radio"
                              class="active"
                              id="ideal"
                              value="ideal"
                            />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                        <div className="paymentGatewayItem">
                          <img
                            src="https://www.mollie.com/images/payscreen/methods/creditcard.png"
                            alt="img"
                          />
                          <label htmlFor="Credit-card">
                            Credit card
                            <input
                              type="radio"
                              id="Credit-card"
                              value="Credit-card"
                            />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                        <div className="paymentGatewayItem">
                          <img
                            src="https://www.mollie.com/images/payscreen/methods/paypal.png"
                            alt="img"
                          />
                          <label htmlFor="paypal">
                            PayPal (+ €0.82)
                            <input type="radio" id="paypal" value="paypal" />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                        <div className="paymentGatewayItem">
                          <img
                            src="https://www.mollie.com/images/payscreen/methods/banktransfer.png"
                            alt="img"
                          />
                          <label htmlFor="banktransfer">
                            Bank transfer
                            <input
                              type="radio"
                              id="banktransfer"
                              value="banktransfer"
                            />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                        <div className="paymentGatewayItem">
                          <img
                            src="https://www.mollie.com/images/payscreen/methods/mistercash.png"
                            alt="img"
                          />
                          <label htmlFor="mistercash">
                            Bancontact
                            <input
                              type="radio"
                              id="mistercash"
                              value="mistercash"
                            />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                        <div className="paymentGatewayItem">
                          <img
                            src="https://www.mollie.com/images/payscreen/methods/eps.png"
                            alt="img"
                          />
                          <label htmlFor="eps">
                          eps 
                            <input
                              type="radio"
                              id="eps"
                              value="eps"
                            />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                        <div className="paymentGatewayItem">
                          <img
                            src="https://www.mollie.com/images/payscreen/methods/giropay.png"
                            alt="img"
                          />
                          <label htmlFor="eps">
                          giropay 
                            <input
                              type="radio"
                              id="giropay"
                              value="giropay"
                            />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Checkout;
