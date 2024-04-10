import React, { useEffect, useState } from "react";
import Layout from "../../Layout";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import Seo from "../../Seo/Seo";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { MdSignpost } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { Bounce, Flip, Roll, Rotate, Slide, Zoom } from "react-awesome-reveal";

const Contact = () => {
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    const contact_info = localStorage.getItem("contact_info");
    const parsedData = JSON.parse(contact_info);
    setContactData(parsedData);
  }, []);

  const breadcrumbItems = [
    { title: "Home", href: "/" },
    { text: "Contact", href: "#" },
  ];

  const data = [
    {
      icon: <MdSignpost />,
      title: "Address",
      des: contactData?.data.address,
      link: "#",
    },
    {
      icon: <IoMail />,
      title: "Email Address ",
      des: contactData?.data.email,
      link: "mailto:mail@dutchflowers.com",
    },
    {
      icon: <FaWhatsapp />,
      title: "Whatsapp",
      des: contactData?.data.mobile,
      link: "tel:+314562476452",
    },
  ];

  const listData = [
    {
      title: "Address",
      list: [contactData?.data.contact_address],
    },
    {
      title: "contact.openings",
      list: [
        contactData?.data.contact_open_monday,
        contactData?.data.contact_open_tuesday,
        contactData?.data.contact_open_wednesday,
        contactData?.data.contact_open_thursday,
        contactData?.data.contact_open_friday,
        contactData?.data.contact_open_saturday,
        contactData?.data.contact_open_sunday,
      ],
    },
    {
      title: "Business",
      list: [contactData?.data.contact_business],
    },
  ];

  return (
    <Layout>
      <Seo />
      <Breadcrumbs breadcrumbItems={breadcrumbItems} title={"Contact"} />
      <section className="py-5">
        <Container>
          <Row>
            {data.map((item, ind) => {
              return (
                <Col md={4} key={ind}>
                  <Bounce>
                    <div className="ContactItem mb-3 md-mb-0">
                      <div className="inner">
                        <span className="icon">{item.icon}</span>
                        <div className="text">
                          <p>{item.title}</p>
                          <a href={item.link}>{item.des}</a>
                        </div>
                      </div>
                    </div>
                  </Bounce>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      <section className="pb-5">
        <Container>
          <Row>
            <Col md={8}>
              <Slide direction="left">
                <div className="contactTitle">
                  <h2>Complete the form below, or give us a call</h2>
                  <p>The DutchFlowers team is always there for you.</p>
                </div>
                <div className="contactForm">
                  <Form action="">
                    <Form.Group className="form-group">
                      <Form.Label>FirstName</Form.Label>
                      <Form.Control
                        name="name"
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
                      <Form.Label>Phone</Form.Label>
                      <Form.Control name="phone" type="text"></Form.Control>
                    </Form.Group>
                    <Form.Group className="form-group">
                      <Form.Label>Appendix</Form.Label>
                      <Form.Control
                        class="form-control h-auto"
                        name="contact_file"
                        type="file"
                        data-v-7ca6ca36=""
                      />
                    </Form.Group>
                    <Form.Group className="form-group">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        name="message"
                        type="text"
                        as={"textarea"}
                        rows={5}
                        required=""
                        style={{ minHeight: "65px" }}
                      ></Form.Control>
                    </Form.Group>
                    <Zoom>
                      <Form.Group>
                        <Form.Check>
                          <Form.Check.Input type="checkbox" id="privacy" />
                          <Form.Check.Label htmlFor="privacy">
                            I have read the{" "}
                            <a href="/privacy" style={{ color: "#f1652a" }}>
                              Privacy Policy
                            </a>{" "}
                            and agree to it
                          </Form.Check.Label>
                        </Form.Check>
                      </Form.Group>
                      <Form.Group class="form-group mt-2" data-v-7ca6ca36="">
                        <Button type="submit" class="btn btn-primary px-2">
                          Confirm
                        </Button>
                      </Form.Group>
                    </Zoom>
                  </Form>
                </div>
              </Slide>
            </Col>
            <Col md={4}>
              <Slide direction="right">
                <div className="ContactImage">
                  <img src="/images/contact-us.jpg" alt="" />
                </div>
              </Slide>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pb-5">
        <Container>
          <Row>
            {listData.map((item, ind) => {
              return (
                <Col md={4}>
                  <div className="detailsItem">
                    <Flip direction="left">
                      <h4>{item.title}</h4>
                    </Flip>
                    <div>
                      {item.list.map((list, ind) => {
                        return <p className="mb-0">{list}</p>;
                      })}
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Contact;
