import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import classes from "./index.module.scss"

import Layout from '../../Layout'
import Seo from '../../Seo/Seo';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Faq from '../../components/Faq';
import { Fade, Zoom } from "react-awesome-reveal";

const Faqs = () => {

    const breadcrumbItems = [
        { title: "Home", href: "/" },
        { text: "F.A.Q", href: "#" },
    ];
    return (
        <Layout>
            <Seo />
            <Breadcrumbs breadcrumbItems={breadcrumbItems} title={"F.A.Q"} />
            <section className={classes.faqs}>
                <Container>
                    <Row>
                        <Col lg={8} >
                            <Faq faqPage button={false} />
                        </Col>
                        <Col lg={4} >
                        <Fade direction="left">
                            <div className={classes.image}>
                                <img src="/images/contact-us.jpg" />
                            </div>
                            </Fade>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Layout>
    )
}
export default Faqs;


