import React, { useEffect, useState } from "react";
import Layout from "../../Layout";
import Seo from "../../Seo/Seo";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import { Col, Container, Row } from "react-bootstrap";
import { FaMinus, FaPlus } from "react-icons/fa6";
import axios from "axios";
import { redirect } from "next/dist/server/api-utils";

const Checkout = () => {
  const imageBaseUrl =
    "https://dutchflowers.devsfolio.com/storage/bouquet_images/";

  const [cartItems, setCartItems] = useState([]);

  const [formData, setFormData] = useState([]);

  const [subTotal, setSubTotal] = useState(0);
  const [vat, setVat] = useState(0);
  const [total, setTotal] = useState(0);

  const handleChange = (e) => {
    console.log("in the handle change");
    const { name, value, checked, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));

    console.log(formData);
  };

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

      var subT = 0;
      var vat = 0;
      cartItems.map((item, index) => {
        let productSubTotal = item.price * item.quantity;

        subT += productSubTotal;

        if (
          item.title.slice(0, 2) == "DC" ||
          item.title.slice(0, 2) == "DL" ||
          item.title.slice(0, 2) == "DP" ||
          item.title.slice(0, 2) == "(V)"
        ) {
          vat += (productSubTotal * 21) / 100;
        } else {
          vat += (productSubTotal * 9) / 100;
        }
      });

      vat = vat.toFixed(2);
      subT = subT.toFixed(2);

      vat = parseFloat(vat);
      subT = parseFloat(subT);

      setVat(vat);
      setSubTotal(subT);

      let total = subT + 7.5;
      setTotal(total);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const k in formData) {
      data.append(k, formData[k]);
    }

    const cart = JSON.parse(localStorage.getItem("cartItems"));

    if (cart) {
      data.append("order_items", JSON.stringify(cartItems));
    }

    try {
      const config = {
        headers: {
          ...axios.defaults.headers,
          "content-type": "multipart/form-data",
        },
      };
      const res = await axios.post(
        "https://dutchflowers.devsfolio.com/api/order/create",
        data,
        config,
      );

      if (res.data.code == 1) {
        const url = res.data.data;
        window.location.href = url;
      }
    } catch (error) {
      if (error.response) {
        console.log("Error status:", error.response.status);
        console.log("Error data:", error.response.data);
      }
      // Handle error
      console.error("Login error:", error);
      // You can show an error message to the user or handle the error in another way
    }
  };

  return (
    <Layout>
      <Seo />
      <Breadcrumbs breadcrumbItems={breadcrumbItems} title={"Checkout"} />
      <section className="checkout pb-0">
        <Container>
          <div className="checkout-form">
            <form onSubmit={handleSubmit}>
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
                                required
                                type="text"
                                name="first_name"
                                placeholder="First Name*"
                                onChange={handleChange}
                              />
                            </div>
                            <div class="checkout__input checkoutSet">
                              <input
                                required
                                type="text"
                                name="last_name"
                                placeholder="Last Name*"
                                onChange={handleChange}
                              />
                            </div>
                            <div class="checkout__input checkoutSet">
                              <input
                                required
                                type="text"
                                name="phone"
                                placeholder="Phone*"
                                onChange={handleChange}
                              />
                            </div>
                            <div class="checkout__input checkoutSet">
                              <input
                                required
                                type="email"
                                name="email"
                                placeholder="Email*"
                                onChange={handleChange}
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
                                    onChange={handleChange}
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
                                    onClick={handleChange}
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
                                    required
                                    type="text"
                                    name="zip"
                                    placeholder="Zip Code*"
                                    onChange={handleChange}
                                  />
                                </div>
                              </Col>
                              <Col md={6}>
                                <div className="checkout__input">
                                  <input
                                    required
                                    type="text"
                                    name="city"
                                    placeholder="City*"
                                    onChange={handleChange}
                                  />
                                </div>
                              </Col>
                            </Row>
                            <Row className="checkoutSet">
                              <Col md={8}>
                                <div className="checkout__input">
                                  <input
                                    required
                                    type="text"
                                    name="street"
                                    placeholder="Street*"
                                    class="checkout__input__add"
                                    onChange={handleChange}
                                  />
                                </div>
                              </Col>
                              <Col md={4}>
                                <div className="checkout__input">
                                  <input
                                    required
                                    type="text"
                                    name="number"
                                    class="checkout__input__add"
                                    placeholder="Number*"
                                    onChange={handleChange}
                                  />
                                </div>
                              </Col>
                            </Row>
                            <div class="checkout__input checkoutSet">
                              <select
                                name="country"
                                onChange={handleChange}
                                required
                              >
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
                                onChange={handleChange}
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
                                  onChange={handleChange}
                                />
                              </div>
                            </Col>
                            <Col lg={6} className="mb-3">
                              <div class="checkout__input checkoutSet">
                                <input
                                  type="text"
                                  name="billing_last_name"
                                  placeholder="Last Name*"
                                  onChange={handleChange}
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
                                  onChange={handleChange}
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
                                  onChange={handleChange}
                                />
                              </div>
                            </Col>
                            <Col md={6} className="mb-3">
                              <div className="checkout__input">
                                <input
                                  type="text"
                                  name="billing_zip"
                                  placeholder="Zip Code*"
                                  onChange={handleChange}
                                />
                              </div>
                            </Col>
                            <Col md={6} className="mb-3">
                              <div className="checkout__input">
                                <input
                                  type="text"
                                  name="billing_city"
                                  placeholder="City*"
                                  onChange={handleChange}
                                />
                              </div>
                            </Col>
                            <Col className="mb-3">
                              <div class="checkout__input checkoutSet">
                                <select
                                  name="billing_country"
                                  onChange={handleChange}
                                >
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
                                  onChange={handleChange}
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
                              name="payment"
                              onChange={handleChange}
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
                              value="creditcard"
                              name="payment"
                              onChange={handleChange}
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
                            <input
                              type="radio"
                              id="paypal"
                              value="paypal"
                              name="payment"
                              onChange={handleChange}
                            />
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
                              name="payment"
                              onChange={handleChange}
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
                              name="payment"
                              onChange={handleChange}
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
                              name="payment"
                              onChange={handleChange}
                            />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                        <div className="paymentGatewayItem">
                          <img
                            src="https://www.mollie.com/images/payscreen/methods/giropay.png"
                            alt="img"
                          />
                          <label htmlFor="giropay">
                            giropay
                            <input
                              type="radio"
                              id="giropay"
                              value="giropay"
                              name="payment"
                              onChange={handleChange}
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
                        <td>€ {vat}</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td className="label">Subtotal </td>
                        <td>€ {subTotal}</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td className="label">Delivery </td>
                        <td>+ €7.5</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td className="label">Total </td>
                        <td> € {total}</td>
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
                      <a
                        href="#"
                        onClick={handleSubmit}
                        className="primary-btn"
                      >
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
