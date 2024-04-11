import React, { useState } from "react";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import Layout from "../../Layout";
import Seo from "../../Seo/Seo";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Bounce, Flip, Roll, Rotate, Slide, Zoom } from "react-awesome-reveal";
import axios from "axios";
import Swal from "sweetalert2";

const Signin = () => {
  const breadcrumbItems = [
    { title: "Home page", href: "/" },
    { text: "Register", href: "#" },
  ];

  const [formData, setFormData] = useState([]);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const k in formData) {
      data.append(k, formData[k]);
    }

    const config = {
      headers: {
        ...axios.defaults.headers,
        "content-type": "multipart/form-data",
      },
    };
    await axios.post(
      "https://dutchflowers.devsfolio.com/api/customer/register",
      formData,
      config,
    );

    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      phone: "",
      street: "",
      street_number: "",
      postal_code: "",
      city: "",
      land: "",
    });

    Swal.fire({
      icon: "success",
      title: "Success",
      text: "You have registered successfully",
    });
  };

  return (
    <>
      <Layout>
        <Seo />
        <Breadcrumbs breadcrumbItems={breadcrumbItems} title={"Register"} />
        <div className="form-wrapper">
          <Container>
            <Row>
              <Col className="offset-md-3 col-md-6">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="form-group">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      name="first_name"
                      type="text"
                      required=""
                      onChange={handleChange}
                      value={formData.first_name}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      name="last_name"
                      type="text"
                      required=""
                      onChange={handleChange}
                      value={formData.last_name}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      name="email"
                      type="email"
                      required=""
                      onChange={handleChange}
                      value={formData.email}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      name="password"
                      type="password"
                      required=""
                      onChange={handleChange}
                      value={formData.password}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label>Telephone</Form.Label>
                    <Form.Control
                      name="phone"
                      type="number"
                      required=""
                      onChange={handleChange}
                      value={formData.phone}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label>Street</Form.Label>
                    <Form.Control
                      name="street"
                      type="street"
                      required=""
                      onChange={handleChange}
                      value={formData.street}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label>Street number</Form.Label>
                    <Form.Control
                      name="street_number"
                      type="number"
                      required=""
                      onChange={handleChange}
                      value={formData.street_number}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label>Postal code</Form.Label>
                    <Form.Control
                      name="postal_code"
                      type="number"
                      required=""
                      onChange={handleChange}
                      value={formData.postal_code}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      name="city"
                      type="text"
                      required=""
                      onChange={handleChange}
                      value={formData.city}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label>Land</Form.Label>
                    <Form.Control
                      name="land"
                      type="text"
                      required=""
                      onChange={handleChange}
                      value={formData.land}
                    ></Form.Control>
                  </Form.Group>
                  <Zoom>
                    <Form.Group class="form-group mt-3">
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
  );
};

export default Signin;
