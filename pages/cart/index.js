import React, { useState, useEffect } from "react";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import Layout from "../../Layout";
import Seo from "../../Seo/Seo";
import { Container } from "react-bootstrap";
import classes from "./index.module.scss";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";

const Cart = () => {
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

  const breadcrumbItems = [
    { title: "Home", href: "/" },
    { text: "Flower Bag", href: "#" },
  ];

  useEffect(() => {
    console.log(cartItems);
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  useEffect(() => {
    // Retrieve the data from localStorage
    var cartItems = localStorage.getItem("cartItems");

    // Parse the JSON string back into a JavaScript object
    var cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
      setCartItems(cartItems);
    }
  }, []);

  return (
    <>
      <Layout>
        <Seo />
        <Breadcrumbs breadcrumbItems={breadcrumbItems} title={"Flower Bag"} />
        <section className="py-5">
          <Container>
            <section className="shopping-cart spad">
              <div className="container">
                <div className="shopping__cart__area">
                  <div className="shopping__cart__table">
                    <table>
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Quantity</th>
                          <th>Price</th>
                          <th>Total</th>
                          <th>Remove</th>
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
                            <td className="cart__close">
                              <span
                                style={{ cursor: "pointer" }}
                                onClick={() => removeItem(item.id)}
                              >
                                <IoIosCloseCircle
                                  size={28}
                                  className="text-danger"
                                />
                              </span>
                            </td>
                          </tr>
                        ))}
                        <tr>
                          <td>
                            <div className="couponForm">
                              <form>
                                <input type="text" placeholder="Coupon" />
                                <button type="submit">Submit</button>
                              </form>
                            </div>
                          </td>
                          <td></td>
                          <td className="label">Subtotal</td>
                          <td>€0.00</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td className="label">Total</td>
                          <td>€0.00</td>
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
    </>
  );
};

export default Cart;
