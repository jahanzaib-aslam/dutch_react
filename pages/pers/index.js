import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../../Layout'

const Pers = () => {
  return (
    <Layout>
    <div className="home-header pt-3">
    <Container>
        <Row>
            <Col className="col-lg-12 col-md-12 d-flex flex-column justify-content-center">
                <h1>Pers</h1>
                <div>
                    <p>For press-related topics, please contact us by email with Press Request to <a href="mailto:info@dutchflowers.com">info@dutchflowers.com</a></p>
                    <p>You can find us at the address below.</p>
                    <p>Prunus 45<br></br>1424 LD<br></br>De Kwakel<br></br>Netherlands</p>
                    <strong><em>Visits take place by appointment only.</em></strong>
                    <p>  <img src="/images/peres.jpg"  style={{width:"285px"}}/></p>
                </div>
                    <a href="/" class="btn mb-4 mx-auto">Home page</a>
                    </Col>
                    </Row>
                    </Container>
                    </div>
                    </Layout>
  )
}

export default Pers;
