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
import ExploreBouquets from "../../components/explore-bouquets";

const bouquet = () => {
  const [bouquets, setBouquets] = useState(null);

  useEffect(() => {
    // Define the URL of your API endpoint
    const apiUrl = "https://dutchflowers.devsfolio.com/api/bouquet/list";

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Set the fetched data to the state
        setBouquets(data.data);
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
            <div className="shopProducts">
              <div className="letter-block"></div>
              <ExploreBouquets bouquets={bouquets} />
            </div>
          </section>
        </Container>
      </Layout>
    </>
  );
};

export default bouquet;
