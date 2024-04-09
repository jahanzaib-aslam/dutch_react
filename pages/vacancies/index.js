import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../../Layout'

const Vacancies = () => {
  return (
    <Layout>
    <div className="home-header pt-3">
    <Container>
        <Row>
            <Col className="col-lg-12 col-md-12 d-flex flex-column justify-content-center">
                <h1>Vacancies</h1>
                <div>
                    <p>We currently have no vacancies online within our company.</p>
                    <p>Do you think you have added value for us?</p>
                    <p>You can always send us an open application.</p>
                    <p>We will save your details and contact you as soon as a vacancy arises that matches your profile</p>
                </div>
                    <a href="/" class="btn mb-4 mx-auto">Home page</a>
                    </Col>
                    </Row>
                    </Container>
                    </div>
                    </Layout>
  )
}

export default Vacancies;
