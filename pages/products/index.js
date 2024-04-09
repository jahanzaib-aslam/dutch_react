import React from "react";
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
            <Filter/>
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
              <ExploreProducts products/>
            </div>
          </section>
        </Container>
      </Layout>
    </>
  );
};

export default products;
