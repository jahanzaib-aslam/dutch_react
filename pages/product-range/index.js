import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../../Layout'

const ProductRange = () => {
  return (
    <Layout>
    <div className="home-header pt-3">
    <Container>
        <Row>
            <Col className="col-lg-12 col-md-12 d-flex flex-column justify-content-center">
                <h1>shop</h1>
                <div>
                <p>Shop the most beautiful flowers online and safely in our <a href="">webshop</a>. <br></br><strong>Dutchflowers.com</strong> has been active <u>since 1997</u> and <br></br>is the largest online flower shop in the entire EU.</p>

                </div>
                    <a href="/" class="btn mb-4 mx-auto">Home page</a>
                    </Col>
                    <Col lg={6}>  <img style={{ width: "100%" }} src="/images/blog3.jpg" /></Col>
                    <a href="/" class="btn mb-4 mx-auto">Home page</a>
                    </Row>
                    </Container>
                    </div>
                    </Layout>
  )
}

export default ProductRange;
