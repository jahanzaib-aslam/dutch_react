import React from 'react'
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import Layout from "../../Layout";
import Seo from "../../Seo/Seo";
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Bounce, Flip, Roll, Rotate, Slide, Zoom } from "react-awesome-reveal";

const Signin = () => {
    const breadcrumbItems = [
        { title: "Home page", href: "/" },
        { text: "Register", href: "#" },
    ];
    return (
        <>
            <Layout>
                <Seo />
                <Breadcrumbs breadcrumbItems={breadcrumbItems} title={"Register"} />
                <div className='form-wrapper'>
                    <Container>
                        <Row >
                            <Col className="offset-md-3 col-md-6">
                                <Form action="">
                                    <Form.Group className="form-group">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control
                                            name="fullname"
                                            type="text"
                                            required=""
                                        ></Form.Control>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control
                                            name="fullname"
                                            type="text"
                                            required=""
                                        ></Form.Control>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control
                                            name="email"
                                            type="email"
                                            required=""
                                        ></Form.Control>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            name="password"
                                            type="password"
                                            required=""
                                        ></Form.Control>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label>Telephone</Form.Label>
                                        <Form.Control
                                            name="tel"
                                            type="number"
                                            required=""
                                        ></Form.Control>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label>Street</Form.Label>
                                        <Form.Control
                                            name="street"
                                            type="street"
                                            required=""
                                        ></Form.Control>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label>Street number</Form.Label>
                                        <Form.Control
                                            name="tel"
                                            type="number"
                                            required=""
                                        ></Form.Control>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label>Postal code</Form.Label>
                                        <Form.Control
                                            name="tel"
                                            type="number"
                                            required=""
                                        ></Form.Control>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control
                                            name="city"
                                            type="text"
                                            required=""
                                        ></Form.Control>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label>Land</Form.Label>
                                        <Form.Control
                                            name="land"
                                            type="text"
                                            required=""
                                        ></Form.Control>
                                    </Form.Group>
                                    <Zoom>
                                        <Form.Group class="form-group mt-3" >
                                            <Button type="submit" class="btn btn-primary px-2">
                                            Registration
                                            </Button>
                                        </Form.Group>
                                    </Zoom>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Layout>
        </>
    )
}

export default Signin
