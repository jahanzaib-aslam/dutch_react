import React from 'react';
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import Layout from "../../Layout";
import Seo from "../../Seo/Seo";
import { Container } from 'react-bootstrap';
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
                <Container>
                    <section className="shopping-cart spad" data-v-3cea3b73="">
                        <div className="container" data-v-3cea3b73="">
                            <div className="shopping__cart__area" data-v-3cea3b73="">
                                <div className="shopping__cart__table" data-v-3cea3b73="">
                                    <table data-v-3cea3b73="">
                                        <thead data-v-3cea3b73="">
                                            <tr data-v-3cea3b73="">
                                                <th data-v-3cea3b73="">Product</th>
                                                <th data-v-3cea3b73="">Quantity</th>
                                                <th data-v-3cea3b73="">Price</th>
                                                <th data-v-3cea3b73="">Total</th>
                                                <th data-v-3cea3b73="">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody data-v-3cea3b73="">
                                            <tr data-v-3cea3b73="">
                                                <td data-v-3cea3b73=""></td>
                                                <td data-v-3cea3b73=""></td>
                                                <td data-v-3cea3b73=""></td>
                                            </tr>
                                            <tr data-v-3cea3b73="">
                                                <td data-v-3cea3b73="">
                                                    <div className="couponForm" data-v-3cea3b73="">
                                                        <form data-v-3cea3b73="">
                                                            <input type="text" placeholder="Coupon" data-v-3cea3b73="" />
                                                            <button type="submit" data-v-3cea3b73="">Submit</button>
                                                        </form>
                                                    </div>
                                                </td>
                                                <td data-v-3cea3b73=""></td>
                                                <td className="label" data-v-3cea3b73="">Subtotal</td>
                                                <td data-v-3cea3b73="">€0.00</td>
                                            </tr>
                                            <tr data-v-3cea3b73="">
                                                <td data-v-3cea3b73=""></td>
                                                <td data-v-3cea3b73=""></td>
                                                <td className="label" data-v-3cea3b73="">Total</td>
                                                <td data-v-3cea3b73="">€0.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row" data-v-3cea3b73="">
                                    <div className="col-lg-6 col-md-6 col-sm-6" data-v-3cea3b73="">
                                        <div className="continue__btn" data-v-3cea3b73="">
                                            <a href="/shopping" className="" data-v-3cea3b73="">Continue</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6" data-v-3cea3b73="">
                                        <div className="checkoutBtn" data-v-3cea3b73="">
                                            <a href="/checkout" className="primary-btn" data-v-3cea3b73="">Place Order</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Container>
            </Layout>
        </>
    );
}

export default Cart;
