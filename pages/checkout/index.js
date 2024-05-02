import React, { useEffect, useState } from "react";
import Layout from "../../Layout";
import Seo from "../../Seo/Seo";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import { Col, Container, Row } from "react-bootstrap";
import { FaMinus, FaPlus } from "react-icons/fa6";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingProductIndex = existingCartItems.findIndex(
      (item) => item.id === id,
    );
    if (existingProductIndex !== -1) {
      existingCartItems.splice(existingProductIndex, 1);
    }
    localStorage.setItem("cartItems", JSON.stringify(existingCartItems));
  };
  useEffect(() => {
    // Retrieve the data from localStorage
    var cartItems = localStorage.getItem("cartItems");

    // Parse the JSON string back into a JavaScript object
    var cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
      setCartItems(cartItems);
    }
  }, []);

  useEffect(() => {
    console.log(cartItems);
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);
  const breadcrumbItems = [
    { title: "Home", href: "/" },
    { text: "Checkout", href: "#" },
  ];
  const [showMessageBox, setShowMessageBox] = useState(false);

  function handleCheckboxChange(event) {
    setShowMessageBox(event.target.checked);
  }
  return (
    <Layout>
      <Seo />
      <Breadcrumbs breadcrumbItems={breadcrumbItems} title={"Checkout"} />
      <section className="checkout pb-0">
        <Container>
          <div className="checkout-form">
            <form action="#">
              <div className="checkForm">
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
                                name="first_name"
                                placeholder="First Name*"
                              />
                            </div>
                            <div class="checkout__input checkoutSet">
                              <input
                                type="text"
                                name="last_name"
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
                                  <input
                                    type="checkbox"
                                    name="create_account"
                                    id="acc-or"
                                  />
                                  <span className="checkmark"></span>
                                </label>
                              </div>
                            </div>
                            <div className="checkoutOptions">
                              <div className="checkout__input__checkbox">
                                <label htmlFor="deladoth">
                                  Billing address is also shipping address
                                  <input
                                    type="checkbox"
                                    name="same_billing_address"
                                    id="deladoth"
                                  />
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
                                    name="zip"
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
                                    name="number"
                                    class="checkout__input__add"
                                    placeholder="Number*"
                                  />
                                </div>
                              </Col>
                            </Row>
                            <div class="checkout__input checkoutSet">
                              <select name="country">
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
                                name="additional_notes"
                                placeholder="Additional Notes"
                                rows="3"
                              />
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className="checkoutSection mb-3 mb-md-5">
                      <h6 className="checkout__title">Shipping Address </h6>
                      <Row>
                        <Col lg={6}>
                          <Row>
                            <Col lg={6} className="mb-3">
                              <div class="checkout__input checkoutSet">
                                <input
                                  type="text"
                                  name="billing_first_name"
                                  placeholder="First Name*"
                                />
                              </div>
                            </Col>
                            <Col lg={6} className="mb-3">
                              <div class="checkout__input checkoutSet">
                                <input
                                  type="text"
                                  name="billing_last_name"
                                  placeholder="Last Name*"
                                />
                              </div>
                            </Col>
                            <Col lg={8} className="mb-3">
                              <div className="checkout__input">
                                <input
                                  type="text"
                                  name="billing_street"
                                  placeholder="Street*"
                                  class="checkout__input__add"
                                />
                              </div>
                            </Col>
                            <Col md={4} className="mb-3">
                              <div className="checkout__input">
                                <input
                                  type="text"
                                  name="billing_number"
                                  class="checkout__input__add"
                                  placeholder="Number*"
                                />
                              </div>
                            </Col>
                            <Col md={6} className="mb-3">
                              <div className="checkout__input">
                                <input
                                  type="text"
                                  name="billing_zip"
                                  placeholder="Zip Code*"
                                />
                              </div>
                            </Col>
                            <Col md={6} className="mb-3">
                              <div className="checkout__input">
                                <input
                                  type="text"
                                  name="billing_city"
                                  placeholder="City*"
                                />
                              </div>
                            </Col>
                            <Col className="mb-3">
                              <div class="checkout__input checkoutSet">
                                <select name="billing_country">
                                  <option value="nl">Netherlands</option>
                                  <option value="be">Belgium</option>
                                  <option value="de">Germany</option>
                                  <option value="fr">France</option>
                                  <option value="uk">England</option>
                                </select>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={6}>
                          <div className="checkoutMessage">
                            <div className="checkout__input__checkbox">
                              <label htmlFor="checkMsg">
                                <strong>Add a Note</strong>
                                <span> (+ €0.50 p.s.)</span>
                                <input
                                  type="checkbox"
                                  name="additional_note_added"
                                  id="checkMsg"
                                  onChange={handleCheckboxChange}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                            {showMessageBox && (
                              <div className="checkoutMessageBox">
                                <textarea
                                  placeholder="Add text"
                                  name="note"
                                  maxLength="150"
                                ></textarea>
                                <small>0/150 Characters</small>
                              </div>
                            )}
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
                            <input type="radio" id="eps" value="eps" />
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
                            <input type="radio" id="giropay" value="giropay" />
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
      <section className="pt-0">
        <Container>
          <section className="shopping-cart spad pt-0">
            <div className="container">
              <div className="shopping__cart__area">
                <h6 className="checkout__title">Your Information</h6>

                <div className="shopping__cart__table">
                  <table>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item.id}>
                          <td className="product__cart__item">
                            <div className="product__cart__item__pic">
                              <img src={item.image} alt="" />
                            </div>
                            <div className="product__cart__item__text">
                              <h6>{item.title}</h6>
                            </div>
                          </td>
                          <td className="quantity__item">
                            <div className="quantity">
                              <div className="quantityForm">
                                <span
                                  className="qtybtn dec"
                                  onClick={() => decreaseQuantity(item.id)}
                                >
                                  <FaMinus />
                                </span>
                                <input
                                  type="text"
                                  value={item.quantity}
                                  readOnly
                                />
                                <span
                                  className="inc qtybtn"
                                  onClick={() => increaseQuantity(item.id)}
                                >
                                  <FaPlus />
                                </span>
                              </div>
                              <div className="set-max">Max (2)</div>
                            </div>
                          </td>
                          <td className="cart__price"> € {item.price}</td>
                          <td className="cart__price">
                            {" "}
                            € {item.price * item.quantity}
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td></td>
                        <td></td>
                        <td className="label">VAT </td>
                        <td>€0.00</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td className="label">Subtotal </td>
                        <td>€0.00</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td className="label">Delivery </td>
                        <td>+ €7.95</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td className="label">Total </td>
                        <td> €7.95</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="continue__btn">
                      <a href="/products" className="">
                        Continue
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="checkoutBtn">
                      <a href="/checkout" className="primary-btn">
                        Place Order
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </section>
    </Layout>
  );
};

export default Checkout;
