import React from "react";
import Layout from "../../Layout";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import { Row, Col, Container } from "react-bootstrap";

const ProductDetails = () => {
  const breadcrumbItems = [
    { title: "Home", href: "/" },
    { text: "Shop", href: "#" },
    { text: "10x Agapanthus mediterranee 60cm", href: "#" },
  ];
  return (
    <Layout>
      <Breadcrumbs
        breadcrumbItems={breadcrumbItems}
        title={"10x Agapanthus mediterranee 60cm"}
      />
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={6}></Col>
            <Col lg={6}>
            <div className="product__details__text">
            <h2 className="fw-bold">10x Agapanthus mediterranee 60cm</h2>
            <h3>€13.95</h3>
            <div className="product__details__cart__option available">
            <hr />
            <div className="personalMessage">
            <div className="box">
            <div className="inner">
            <img src="/images/badge.png" alt="img" />
            <p>Add a Card</p>
            </div>
            </div>
            </div>
            </div>
            </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default ProductDetails;
