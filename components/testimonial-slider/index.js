import React from 'react';
import Slider from 'react-slick';
import classes from "./index.module.scss"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Fade, Zoom } from 'react-awesome-reveal';


class TestimonialSlider extends React.Component {
  render() {
    const testimonials = [
      {
        content: "Clear information, fast delivery and well-packaged, receive feedback when it has arrived. The flowers are also of very good quality and can last for 3 to 4 weeks in the vase.",
        author: "Ellen",
        location: "Belgium",
        icon: "/images/testimo1.png"

      },
      {
        content: "“Beautiful flowers and a happy recipient. I appreciate it when the recipient tells me that they have received the beautiful roses and are very happy with them. It's a great way to congratulate someone from a distance with something beautiful.”",
        author: "Jorg",
        location: "Germany",
        icon: "/images/testimo2.png"

      }
    ];

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <section className={classes.testimonial}>
      <Container>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <Row>
                <Col lg={8} className='d-flex flex-column justify-content-center'>
                <Zoom direction="left">
                  <div>
                  <p className={classes.title}>{testimonial.content}</p>
                  <span>{testimonial.author}</span>
                  <p style={{ color: 'rgb(128, 126, 126)' }}>{testimonial.location}</p>
                  </div>
                  </Zoom>
                </Col>
                <Col lg={4}>
                <Zoom direction="right">
                  <div>
                  <img src={testimonial.icon} alt="img" style={{width:"100%"}} />
                  </div>
                  </Zoom>
                </Col>
              </Row>
            </div>
          ))}
        </Slider>
      </Container>
      </section>
    );
  }
}

export default TestimonialSlider;