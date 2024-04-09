import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../../Layout'

const B2B = () => {
    return (
        <Layout>
            <div className="home-header pt-3">
                <Container>
                    <Row>
                        <Col className="col-lg-12 col-md-12 d-flex flex-column justify-content-center">
                            <h1>B2B</h1>
                            <div>
                                <p>Do you also want to have a choice from a huge and fresh range for your business?<br></br>
                                    Send an email with business orders to<a href="mailto:info@dutchflowers.com">info@dutchflowers.com</a></p>

                                <Col lg={5}>  <img style={{ width: "100%" }} src="/images/b2b.jpg" /></Col>
                            </div>
                            <a href="/" class="btn mb-4 mx-auto">Home page</a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Layout>
    )
}

export default B2B;
