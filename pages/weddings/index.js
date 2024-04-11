import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../../Layout";

const Weddings = () => {
  return (
    <Layout>
      <div className="home-header pt-3">
        <Container>
          <Row>
            <Col className="col-lg-12 col-md-12 d-flex flex-column justify-content-center">
              <h1>Weddings and Customization</h1>
              <div>
                <p>
                  <p>
                    We at Dutchflowers.com specialize in the sale of exclusive
                    cut flowers. As the largest florist in Europe, we purchase
                    3,000 lots of fresh and beautiful flowers directly from
                    growers and flower auctions every day.
                  </p>
                  <p>
                    Because we have an extensive network within the flower
                    auction and grower base, we can in principle supply almost
                    everything in the field of flowers and plants. Can't find
                    what you're looking for in our online store? Please contact
                    us.
                  </p>
                  <p>
                    Even if you have seen a beautiful flower, plant or flower
                    arrangement in a magazine or somewhere else. If you email us
                    a photo, we will see if we can deliver it.
                  </p>
                  <p>
                    <strong>Are you getting married?</strong>
                  </p>
                  <p>
                    Do you want something unique delivered for a special
                    occasion? Our Customization team is happy to help you
                    realize all your wishes.
                  </p>
                  <p>
                    Don't know exactly what you want yet? Then we can really do
                    something for you. With great enthusiasm and extensive
                    professional knowledge, we also turn your assignment into
                    something extraordinary.
                  </p>
                  <p>
                    <strong> Order large quantities.</strong>
                  </p>
                  <p>
                    For large quantities, please contact us personally so that
                    we can see which discount applies to you.
                  </p>
                  <strong>
                    Request a{" "}
                    <a title="offers" href="https://dutchflowers.com/contact">
                      quote
                    </a>
                    .
                  </strong>
                  <p>
                    Would you like a quote first? Let us know what your wishes
                    are and call or email us. We will then prepare a quote for
                    you as quickly as possible.
                  </p>
                  <p>
                    <em>
                      We ship throughout <u>Europe and even beyond!</u>
                    </em>
                  </p>
                  <Col lg={7}>
                    {" "}
                    <img style={{ width: "100%" }} src="/images/rose.jpg" />
                  </Col>
                </p>
              </div>
              <a href="/" class="btn mb-4 mx-auto">
                Home page
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default Weddings;
