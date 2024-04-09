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
                                name="assword"
                                type="password"
                                required=""
                            ></Form.Control>
                        </Form.Group>

                        <Zoom>
                            <Form.Group class="form-group" >
                            <div className='d-flex justify-content-between align-items-center  mt-3'>
                                <Button type="submit" class="btn btn-primary px-2">
                                Register
                                </Button>
                                <div class="forgot_password"><a href="/forgetpassword" class="navbar-brand" ><span >Forgot password?</span></a></div>
                                </div>
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
