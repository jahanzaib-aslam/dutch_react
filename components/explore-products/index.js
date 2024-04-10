import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import classes from "./index.module.scss";
import { FaTruck } from "react-icons/fa6";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { FaCogs } from "react-icons/fa";

const data = [
  {
    img: "/images/prod1.jpeg",
    hoverImg: "/images/prodhover1.jpeg",
    title: "25x chrysant san.madiba red tyolo 50cm",
    price: "29.95",
    stock: "3",
    length: "50",
  },
  {
    img: "/images/prod2.jpg",
    hoverImg: "/images/prodhover2.jpg",
    title: "10x lely roselily olympia 70cm",
    price: "29.95",
    stock: "3",
    length: "50",
  },
  {
    img: "/images/prodhover3.jpg",
    hoverImg: "/images/prodhover3.jpg",
    title: "50x cortaderia dadang pink/salmon 80cm",
    price: "251.95",
    stock: "3",
    length: "50",
  },
  {
    img: "/images/prodhover4.jpg",
    hoverImg: "/images/prodhover4.jpg",
    title: "10x sword fern bleached 70cm",
    price: "200.95",
    stock: "3",
    length: "50",
  },
  {
    img: "/images/prod5.jpg",
    hoverImg: "/images/prodhover5.jpg",
    title: "5x aralia extra 50cm",
    price: "29.95",
    stock: "3",
    length: "50",
  },
  {
    img: "/images/prod6.jpg",
    hoverImg: "/images/prodhover6.jpg",
    title: "5x prot.pink ice 30cm",
    price: "16.95",
    stock: "3",
    length: "50",
  },
  {
    img: "/images/prod06.jpg",
    hoverImg: "/images/prod06.jpg",
    title: "20x dianthus soho 60cm",
    price: "23.95",
    stock: "3",
    length: "50",
  },
  {
    img: "/images/prodhover7.jpg",
    hoverImg: "/images/prod7.jpg",
    title: "50x tulipa puma 40cm",
    price: "57.95",
    stock: "3",
    length: "50",
  },
  {
    img: "/images/prod8.jpg",
    hoverImg: "/images/prodhover8.jpg",
    title: "10x lely longi.wh.triumph 70cm",
    price: "9.95",
    stock: "3",
    length: "50",
  },
  {
    img: "/images/prod9.jpg",
    hoverImg: "/images/prodhover9.jpg",
    title: "30x corylus 80cm",
    price: "84.95",
    stock: "3",
    length: "50",
  },
  {
    img: "/images/prod10.jpg",
    hoverImg: "/images/prodhover10.jpg",
    title: "50x tulipa valeska 30cm",
    price: "76.95",
    stock: "3",
    length: "50",
  },
  {
    img: "/images/prod11.jpg",
    hoverImg: "/images/prodhover11.jpg",
    title: "10x alstroemeria casanova 70cm",
    price: "11.95",
    stock: "3",
    length: "50",
  },
];
const ExploreProducts = ({ products, homeProducts }) => {
  const [activeProductIndex, setActiveProductIndex] = useState(null);

  const toggleProductPops = (index) => {
    setActiveProductIndex(activeProductIndex === index ? null : index);
  };
  return (
    <section
      className={`mt-0 ${classes.card} ${products && classes.productCard}`}
    >
      <Container>
        {products ? (
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
        {products && (
          <div className="shopSubTitle">
            <p>8247 search results</p>
            <h6 className="fw-bold" style={{ cursor: "pointer" }}>
              <FaCogs className="me-2" />
              Reset Filters
            </h6>
          </div>
        )}

        <Row>
          {homeProducts.map((item, ind) => {
            return (
              <Col lg={3} md={6}>
                <Slide direction={products && "right"}>
                  <Card className={`my-3 product-item `}>
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
                          <button className="addToCart">Add To Cart</button>
                        </Col>
                      </Row>
                    </div>
                  </Card>
                </Slide>
              </Col>
            );
          })}
        </Row>
        {products ? (
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
