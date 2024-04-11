import React from "react";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import Layout from "../../Layout";
import Seo from "../../Seo/Seo";
import { Container } from "react-bootstrap";
import classes from "./index.module.scss";

const Cart = () => {
  const breadcrumbItems = [
    { title: "Home", href: "/" },
    { text: "Flower Bag", href: "#" },
  ];

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
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
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
