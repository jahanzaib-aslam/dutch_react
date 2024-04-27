import React, { useState, useEffect } from "react";
import Layout from "../../Layout";
import Seo from "../../Seo/Seo";
import Slider from "../../components/slider";
import { Col, Container, Row } from "react-bootstrap";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import { useRouter } from "next/router";
import products from "../products";

const ProductDetail = () => {
  function Counter() {
    const [count, setCount] = useState(0);
    const [detail, setDetail] = useState(null);
    const [misc, setMisc] = useState(null);
    const router = useRouter();
    // Assuming the URL is "/product-detail?product=123"

    useEffect(() => {
      const { product } = router.query;
      if (product != undefined) {
        const apiUrl =
          "https://dutchflowers.devsfolio.com/api/product/detail/" + product;
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            setDetail(data.data);
            console.log(data);

            if (data.data != undefined) {
              // Regular expression to match text within curly braces
              const regex = /{([^}]+)}/g;

              // Array to store matched parts
              const matchedParts = [];

              // Using a loop to iterate over each match
              let match;
              while (
                (match = regex.exec(data.data?.productKenmerken)) !== null
              ) {
                // Add the matched part (excluding the braces) to the array
                matchedParts.push(match[1]);
              }

              let finalArray = [];

              matchedParts.forEach((spec) => {
                const splitArray = spec.split(':"');
                // console.log(splitArray);
                if (splitArray.length == 2) {
                  const exactIndex = splitArray[1].split(";");

                  finalArray.push({
                    key: exactIndex[0],
                    value: exactIndex[2].split(":")[1],
                  });
                } else {
                  const exactIndex = splitArray[1].split(";");
                  finalArray.push({
                    key: exactIndex[0],
                    value: splitArray[2],
                  });
                }
              });

              setMisc(finalArray);
            }

            // Set the fetched data to the state
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }
    }, []);

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
    const breadcrumbItems = [
      { title: "Home", href: "/" },
      { text: "Shop", href: "#" },
      { text: detail?.productName, href: "#" },
    ];

    return (
      <>
        <Layout>
          <Seo />
          <Breadcrumbs
            breadcrumbItems={breadcrumbItems}
            title={detail?.productName}
          />
          <section className="py-5">
            <Container>
              <Row>
                <Col lg={6}>{detail && <Slider images={detail?.images} />}</Col>

                <Col lg={6}>
                  <div className="">
                    <div className="product__details__text">
                      <h2>{detail?.productName}</h2>
                      <h3>€{detail?.productPrice}</h3>
                    </div>
                    <div class="product__details__cart__option available">
                      <hr />
                      <div class="personalMessage mb-3">
                        <div class="box">
                          <div class="inner">
                            <img src="/images/amazon2.png" alt="The Woods" />
                            <p>Add a Card</p>
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
                        <span className="set-max">Max (4)</span>
                        <button className="addCartBtn">Add To Cart</button>
                      </div>
                      <hr />
                      <div className="product__details__last__option">
                        <ul>
                          {misc?.map((item, ind) => (
                            <li key={ind}>
                              <span>{item.key.replace('"', ":")}</span>{" "}
                              {item.value.replace('";', "")}
                            </li>
                          ))}
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
                        Every day, more than 3,000 different flowers are
                        purchased at the flower auction in Aalsmeer and
                        delivered directly from the growers. We always use the
                        daily price, which means that the most honest selling
                        price is always displayed, which is always cheaper than
                        the flower shops or other online flower shops.<br></br>
                        <br></br>
                        Do you want to send flowers online to yourself, your
                        loved one, your best colleague, or your uncle or aunt?
                        <br></br>
                        <br></br>
                        As soon as your order comes in, we get to work with a
                        smile! We check the quality of all freshly purchased
                        flowers, and if they differ due to circumstances, they
                        will be replaced and, if no longer possible, credited.
                        Dutchflowers.com can still pack and ship all orders
                        placed before 10:00 am today. Our flowers are
                        transported on specially developed flower transport gel,
                        which ensures that the flowering process is not
                        interrupted.<br></br>
                        <br></br>
                        SAY IT WITH DUTCHFLOWERS
                      </p>
                      <h5>Extra:</h5>
                    </div>
                    <div>
                      <Row className="vasees">
                        {items.map((item) => (
                          <Col key={item.id} lg={6} md={6} className="mb-4">
                            <div className="img">
                              <img src={item.imgSrc} alt={item.name} />
                            </div>
                            <div className="name">{item.name}</div>
                            <div className="price">
                              <strong>{item.price}</strong>
                            </div>
                            <button>Add To Cart</button>
                          </Col>
                        ))}
                      </Row>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </Layout>
      </>
    );
  }

  return <Counter />;
};

export default ProductDetail;
