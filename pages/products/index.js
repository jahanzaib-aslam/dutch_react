import React, { useState, useEffect } from "react";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import Layout from "../../Layout";
import Seo from "../../Seo/Seo";
import classes from "./index.module.scss";
import { FaTruck } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";
import { Col, Container, Row } from "react-bootstrap";
import ExploreProducts from "../../components/explore-products";
import Filter from "../../components/filter";

const products = () => {
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    // Define the URL of your API endpoint
    const apiUrl = "https://dutchflowers.devsfolio.com/api/product/list";

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Set the fetched data to the state
        setProducts(data.data.products.data);
        setCategories(data.data.categories);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const breadcrumbItems = [
    { title: "Home", href: "/" },
    { text: "Shop", href: "#" },
  ];
  return (
    <>
      <Layout>
        <Seo />
        <Breadcrumbs breadcrumbItems={breadcrumbItems} title={"Shop"} />
        <Container>
          <section className={`mt-0 py-4`}>
            <div className={`${classes.slogan} d-flex`}>
              <Fade direction="top">
                <FaTruck />
                <span>
                  Ordered on weekdays before 10:00 AM = shipped the same day!
                </span>
              </Fade>
            </div>
            <Filter categories={categories} />
            <div className="shopProducts">
              <div className="letter-block">
                <div className="inner">
                  <div className="letter">a</div>
                  <div className="letter">b</div>
                  <div className="letter">c</div>
                  <div className="letter">d</div>
                  <div className="letter">e</div>
                  <div className="letter">f</div>
                  <div className="letter">g</div>
                  <div className="letter">h</div>
                  <div className="letter">i</div>
                  <div className="letter">j</div>
                  <div className="letter">k</div>
                  <div className="letter">l</div>
                  <div className="letter">m</div>
                  <div className="letter">n</div>
                  <div className="letter">o</div>
                  <div className="letter">p</div>
                  <div className="letter">q</div>
                  <div className="letter">r</div>
                  <div className="letter">s</div>
                  <div className="letter">t</div>
                  <div className="letter">u</div>
                  <div className="letter">v</div>
                  <div className="letter">w</div>
                  <div className="letter">x</div>
                  <div className="letter">y</div>
                  <div className="letter">z</div>
                  <div className="letter">★</div>
                </div>
              </div>
              <ExploreProducts products={products} home={false} />
            </div>
          </section>
        </Container>
      </Layout>
    </>
  );
};

export default products;
