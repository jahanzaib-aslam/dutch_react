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
    { text: "Login", href: "#" },
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

    try {
      const config = {
        headers: {
          ...axios.defaults.headers,
          "content-type": "multipart/form-data",
        },
      };
      const res = await axios.post(
        "https://dutchflowers.devsfolio.com/api/customer/login",
        formData,
        config,
      );

      localStorage.setItem("user", JSON.stringify(res.data.data));

      setFormData({
        email: "",
        password: "",
      });

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "You have Logged In successfully",
      }).then((result) => {
        // Redirect to home page after user clicks "OK"
        if (result.isConfirmed) {
          // Perform redirection here
          window.location.href = "/"; // Replace "/home" with your home page URL
        }
      });
    } catch (error) {
      if (error.response) {
        console.log("Error status:", error.response.status);
        console.log("Error data:", error.response.data);
      }
      // Handle error
      console.error("Login error:", error);
      // You can show an error message to the user or handle the error in another way
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.response.data.error[0],
      });
    }
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
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      name="email"
                      type="email"
                      required=""
                      onChange={handleChange}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group className="form-group">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      name="password"
                      type="password"
                      required=""
                      onChange={handleChange}
                    ></Form.Control>
                  </Form.Group>

                  <Zoom>
                    <Form.Group class="form-group">
                      <div className="d-flex justify-content-between align-items-center  mt-3">
                        <Button type="submit" class="btn btn-primary px-2">
                          Login
                        </Button>
                        <div class="forgot_password">
                          <a href="/forgetpassword" class="navbar-brand">
                            <span>Forgot password?</span>
                          </a>
                        </div>
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
  );
};

export default Signin;
