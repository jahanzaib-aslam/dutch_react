import React, { useState } from "react";
import Layout from "../../Layout";
import Seo from "../../Seo/Seo";
import Slider from "../../components/slider";
import { Col, Container, Row } from "react-bootstrap";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const ProductDetail = () => {
  function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
      if (count < 4) {
        setCount(count + 1);
      }
    };

    const decrement = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };
    const items = [
      {
        id: 1,
        imgSrc: "/images/product1.jpg",
        name: "100x Dianthus duke breanthus 40cm",
        price: 86.95,
      },
      {
        id: 2,
        imgSrc: "/images/product3.jpg",
        name: "25x Gipskruid m.stars 80cm",
        price: 59.95,
      },
      {
        id: 3,
        imgSrc: "/images/product3.jpg",
        name: "10x Alstroemeria cardinal",
        price: 11.95,
      },
      {
        id: 3,
        imgSrc: "/images/product4.jpg",
        name: "10x Antir.opus geel 70cm",
        price: 20.29,
      },
    ];

    return (
      <>
        <Layout>
          <Seo />
          <Container>
            <Row>
              <Col lg={6}>
                <Slider/>
              </Col>
              <Col lg={6}>
                <div className="">
                  <div className="product__details__text">
                    <h2>10x Agapanthus mediterranee 60cm</h2>
                    <h3>€13.95</h3>
                  </div>
                  <div class="product__details__cart__option available">
                    <hr />
                    <div class="personalMessage mb-3" data-v-cd5ef9ee="">
                      <div class="box" data-v-cd5ef9ee="">
                        <div class="inner" data-v-cd5ef9ee="">
                          <img src="/images/amazon2.png" alt="The Woods" />
                          <p data-v-cd5ef9ee="">Add a Card</p>
                        </div>
                      </div>
                    </div>
                    <div className="carting">
                      <div
                        className="input
                                            "
                      >
                        <h6>{count}</h6>
                        <div className="d-grid">
                          {/* Arrow icons for increment and decrement */}
                          <span onClick={increment}>
                            <FiChevronUp />
                          </span>
                          <span onClick={decrement}>
                            <FiChevronDown />
                          </span>
                        </div>
                      </div>
                      <span className="set-max" data-v-cd5ef9ee="">
                        Max (4)
                      </span>
                      <button className="addCartBtn" data-v-cd5ef9ee="">
                        Add To Cart
                      </button>
                    </div>
                    <hr />
                    <div
                      className="product__details__last__option"
                      data-v-cd5ef9ee=""
                    >
                      <ul data-v-cd5ef9ee="">
                        <li data-v-cd5ef9ee="">
                          <span data-v-cd5ef9ee="">Minimum steellengte:</span>{" "}
                          60
                        </li>
                        <li data-v-cd5ef9ee="">
                          <span data-v-cd5ef9ee="">
                            Bloem/bes/vruchtkleur 1:
                          </span>{" "}
                          Blauw
                        </li>
                        <li data-v-cd5ef9ee="">
                          <span data-v-cd5ef9ee="">Land van herkomst:</span>{" "}
                          Kenia
                        </li>
                        <li data-v-cd5ef9ee="">
                          <span data-v-cd5ef9ee="">Kwaliteitsgroep:</span>{" "}
                          Eerste (I)
                        </li>
                        <li data-v-cd5ef9ee="">
                          <span data-v-cd5ef9ee="">Aantal stelen per bos:</span>{" "}
                          10
                        </li>
                        <li data-v-cd5ef9ee="">
                          <span data-v-cd5ef9ee="">
                            Overige leveranciersinformatie:
                          </span>{" "}
                          All I Am
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="text">
                    <p className="pre-wrap">
                      Fresh Flowers<br></br>A wide assortment of freshly cut
                      flowers that all florists can envy. We are the largest
                      online flower shop in the Netherlands, France, England,
                      Germany, and beyond.<br></br>
                      <br></br>
                      Do you want to buy the most beautiful cut flowers?
                      <br></br>
                      <br></br>
                      Then you've come to the right place at Dutchflowers.com!
                      Every day, more than 3,000 different flowers are purchased
                      at the flower auction in Aalsmeer and delivered directly
                      from the growers. We always use the daily price, which
                      means that the most honest selling price is always
                      displayed, which is always cheaper than the flower shops
                      or other online flower shops.<br></br>
                      <br></br>
                      Do you want to send flowers online to yourself, your loved
                      one, your best colleague, or your uncle or aunt?<br></br>
                      <br></br>
                      As soon as your order comes in, we get to work with a
                      smile! We check the quality of all freshly purchased
                      flowers, and if they differ due to circumstances, they
                      will be replaced and, if no longer possible, credited.
                      Dutchflowers.com can still pack and ship all orders placed
                      before 10:00 am today. Our flowers are transported on
                      specially developed flower transport gel, which ensures
                      that the flowering process is not interrupted.<br></br>
                      <br></br>
                      SAY IT WITH DUTCHFLOWERS
                    </p>
                    <h5>Extra:</h5>
                  </div>
                  <div>
                    <Row className="vasees">
                      {items.map((item) => (
                        <Col key={item.id} lg={6} md={6} className="mb-4">
                          <div className="img" data-v-cd5ef9ee="">
                            <img src={item.imgSrc} alt={item.name} />
                          </div>
                          <div className="name">{item.name}</div>
                          <div className="price">
                            <strong>{item.price}</strong>
                          </div>
                          <button data-v-cd5ef9ee="">Add To Cart</button>
                        </Col>
                      ))}
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Layout>
      </>
    );
  }

  return <Counter />;
};

export default ProductDetail;
