import React, { useEffect, useState } from "react";
import classes from "./index.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import Image from "next/image";

export const TopHeader = () => {
  const [contactData, setContactData] = useState(null);
  useEffect(() => {
    // Define the URL of your API endpoint
    const apiUrl = "https://dutchflowers.devsfolio.com/api/getContactInfo";

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Set the fetched data to the state
        setContactData(data);
        localStorage.setItem("contact_info", JSON.stringify(data));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className={classes.topHeader}>
      <Container>
        <Row className="m-0 justify-content-between">
          <Col
            sm={3}
            className=" d-flex justify-content-center justify-content-sm-start mb-2 mb-sm-0"
          >
            <a href="#">
              <Image src="/images/facebook.png" alt="" width={20} height={20} />
            </a>
            <a href="#">
              <Image src="/images/insta.png" alt="" width={20} height={20} />
            </a>
            <a href="#">
              <Image src="/images/linkedin.png" alt="" width={20} height={20} />
            </a>
          </Col>
          <Col
            sm={9}
            className="d-flex justify-content-center justify-content-sm-end part2"
          >
            {contactData && (
              <div className={`me-4 ${classes.topLinks}`}>
                <Image
                  src="/images/whatsapp.png"
                  alt="img"
                  width={16}
                  height={16}
                />
                <a href="https://api.whatsapp.com/send/?phone=0633456787">
                  Whatsapp: {contactData.data.mobile}
                </a>
              </div>
            )}
            <div className={` ${classes.topLinks}`}>
              <Image src="/images/mail.png" alt="img" width={16} height={16} />
              <a href="mailto:info@dutchflowers.com">
                {contactData?.data.email}
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
