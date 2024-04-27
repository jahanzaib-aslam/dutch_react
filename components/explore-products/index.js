import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import classes from "./index.module.scss";
import { FaTruck } from "react-icons/fa6";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { FaCogs } from "react-icons/fa";

const ExploreProducts = ({ products, home }) => {
  const [activeProductIndex, setActiveProductIndex] = useState(null);

  const toggleProductPops = (index) => {
    setActiveProductIndex(activeProductIndex === index ? null : index);
  };

  const handleAddToCart = async (product) => {
    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];

    const existingProductIndex = existingCartItems.findIndex(
      (item) => item.id === product.id,
    );

    if (existingProductIndex !== -1) {
      // If the product already exists, update its quantity
      existingCartItems[existingProductIndex].quantity += 1;
    } else {
      // If the product is not in the cart, add it
      existingCartItems.push({
        id: product.id,
        quantity: 1,
        image: product.default_image_url,
        title: product.title,
        price: product.unit[0].price.price,
      });
    }

    // Save the updated cart items to local storage
    localStorage.setItem("cartItems", JSON.stringify(existingCartItems));

    console.log(existingCartItems);
  };

  return (
    <section
      className={`mt-0 ${classes.card} ${products && classes.productCard}`}
    >
      <Container>
        {!home ? (
          ""
        ) : (
          <div className={classes.slogan}>
            <Fade direction="left">
              <FaTruck />
              <span>
                Ordered on weekdays before 10:00 AM = shipped the same day!
              </span>
            </Fade>
          </div>
        )}
        {!home && (
          <div className="shopSubTitle">
            <p>8247 search results</p>
            <h6 className="fw-bold" style={{ cursor: "pointer" }}>
              <FaCogs className="me-2" />
              Reset Filters
            </h6>
          </div>
        )}
        {products && (
          <Row>
            {products.map((item, ind) => {
              return (
                <Col lg={3} md={6}>
                  <Slide
                    direction={!home ? "right" : "left"}
                    duration={home ? 600 : 0}
                  >
                    <Card className={`my-3 product-item `}>
                      <a href={`/product-detail?product=${item.id}`}>
                        <div
                          className="img"
                          style={{
                            backgroundImage: `url(${item.default_image_url})`,
                            height: "250px",
                            minHeight: "250px",
                          }}
                        >
                          <div
                            className={"hover-img"}
                            style={{
                              backgroundImage: `url(${item.default_image_url})`,
                            }}
                          ></div>
                        </div>
                      </a>
                      <div className={"product-bottom"}>
                        <div className={"prod-title"}>
                          <a href="#">
                            <h3>{item.title}</h3>
                          </a>
                        </div>
                        <div className="prod-info">
                          <div className="prod-price">
                            <span>€{item.unit[0].price.price}</span>
                          </div>
                          <div className="prod-cart">
                            <button
                              className="showPops"
                              onClick={() => toggleProductPops(ind)}
                            >
                              <img src="/images/bag.png" alt="" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`product-pops ${
                          activeProductIndex === ind ? "active" : ""
                        }`}
                      >
                        <div className="closeButton">
                          <button
                            className="closePanel"
                            onClick={() => toggleProductPops(ind)}
                          >
                            <img src="/images/cancel-btn.png" alt="img" />
                          </button>
                        </div>
                        <div className="title mb-2">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="info d-flex w-100 justify-content-between">
                          <div className="pe-2">
                            <div>Stock:</div>
                            <div>Length:</div>
                            <div>Price:</div>
                          </div>
                          <div className="text-right">
                            <div>{item.stock} Bunches</div>
                            <div>{item.length}cm</div>
                            <div>€{item.unit[0].price.price}</div>
                          </div>
                        </div>
                        <div className="mt-2 mb-1">
                          <button className="btn btn-main w-100 mb-1">
                            More Information
                          </button>
                        </div>
                        <Row>
                          <Col md={6} className="pe-1">
                            <input
                              type="number"
                              value={1}
                              className="form-control"
                            />
                          </Col>
                          <Col md={6} className="ps-1">
                            <button
                              className="addToCart"
                              onClick={() => handleAddToCart(item)}
                            >
                              Add To Cart
                            </button>
                          </Col>
                        </Row>
                      </div>
                    </Card>
                  </Slide>
                </Col>
              );
            })}
          </Row>
        )}

        {!home ? (
          ""
        ) : (
          <Zoom>
            <div className="btnBox">
              <a href="#" className="btn btn-primary mainBtn">
                Explore More
              </a>
            </div>
          </Zoom>
        )}
      </Container>
    </section>
  );
};

export default ExploreProducts;
