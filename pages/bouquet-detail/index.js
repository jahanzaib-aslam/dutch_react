import React, { useState, useEffect } from "react";
import Layout from "../../Layout";
import Seo from "../../Seo/Seo";
import Slider from "../../components/slider";
import { Col, Container, Row } from "react-bootstrap";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import { useRouter } from "next/router";

const bouquetDetail = () => {
  const imageBaseUrl =
    "https://dutchflowers.devsfolio.com/storage/bouquet_images/";

  function Counter() {
    const [count, setCount] = useState(0);
    const [detail, setDetail] = useState(null);
    const [misc, setMisc] = useState(null);
    const router = useRouter();
    const [items, setItems] = useState([]);
    // Assuming the URL is "/product-detail?product=123"

    useEffect(() => {
      const { bouquet } = router.query;
      if (bouquet != undefined) {
        const apiUrl =
          "https://dutchflowers.devsfolio.com/api/bouquet/detail/" + bouquet;
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            setDetail(data.data);
            console.log(data);

            const newItems = [];

            data.data?.detail.children.map((category, index) => {
              const newItem = {
                id: category.id,
                imgSrc: imageBaseUrl + category.image,
                name: "bbaa",
                price: 334.4,
              };

              newItems.push(newItem);
            });
            setItems([...items, ...newItems]);

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

    const breadcrumbItems = [
      { title: "Home", href: "/" },
      { text: "Shop", href: "#" },
      { text: detail?.detail.name, href: "#" },
    ];

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
          title: product.name,
          price: product.price,
          type: "BOUQUET",
        });
      }

      // Save the updated cart items to local storage
      localStorage.setItem("cartItems", JSON.stringify(existingCartItems));

      console.log(existingCartItems);
    };

    return (
      <>
        <Layout>
          <Seo />
          <Breadcrumbs
            breadcrumbItems={breadcrumbItems}
            title={detail?.detail.name}
          />
          <section className="py-5">
            <Container>
              <Row>
                <Col lg={6}>
                  {items.length > 0 && <Slider images={items} />}
                </Col>
                <Col lg={6}>
                  <div className="">
                    <div className="product__details__text">
                      <h2>{detail?.detail.name}</h2>
                    </div>
                    <div class="product__details__cart__option available">
                      <div className="carting"></div>
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
                    </div>
                  </div>
                </Col>
              </Row>

              <Row>
                <div>
                  <Row className="vasees">
                    {detail?.categories.map((category, index) => (
                      <Col lg={3} md={3} className="mb-4">
                        <p>Category - {index + 1}</p>
                        {category.map((item) => (
                          <Col key={item.id} lg={12} md={12} className="mb-4">
                            <div className="img">
                              <img
                                src={item.default_image_url}
                                alt={item.name}
                              />
                            </div>
                            <div className="name">{item.name}</div>
                            <div className="price">
                              <strong>€{item.price}</strong>
                            </div>
                            <button onClick={() => handleAddToCart(item)}>
                              Add To Cart
                            </button>
                          </Col>
                        ))}
                      </Col>
                    ))}
                  </Row>
                </div>
              </Row>
            </Container>
          </section>
        </Layout>
      </>
    );
  }

  return <Counter />;
};

export default bouquetDetail;
