import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./index.module.scss";
import { Fade, Flip, JackInTheBox, Zoom } from "react-awesome-reveal";
import Link from "next/link";

const Blog = ({ useSlider, blogPage, data, text, blogs }) => {
  const blogSlider = [
    {
      id: 1,
      date: "3/1/2023",
      title: "Title of Blog 1",
      content:
        "Lees meer over de ontwikkeling van de grootste online bloemenwinkel Dutchflowers",
      imageUrl: "images/blog1.jpg",
      link: "/blog/blog1",
    },
    {
      id: 2,
      date: "2/1/2023",
      title: "Title of Blog 2",
      content:
        "Als het gaat om bloemen, is Jack Brasser absoluut een expert. Met meer dan 20 jaar ervaring in de bloemensector,",
      imageUrl: "images/blog2.jpg",
      link: "/blog/blog2",
    },
    {
      id: 3,
      date: "1/1/2023",
      title: "Title of Blog 2",
      content:
        "Bent u op zoek naar verse bloemen voor een speciale gelegenheid of gewoon om uw huis op te fleuren? ",
      imageUrl: "images/blog3.jpg",
      link: "/blog/blog2",
    },
    {
      id: 4,
      date: "3/1/2023",
      title: "Title of Blog 1",
      content:
        "Lees meer over de ontwikkeling van de grootste online bloemenwinkel Dutchflowers",
      imageUrl: "images/blog2.jpg",
      link: "/blog/blog1",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      <div className={`${classes.trends} ${blogPage && classes.noBg}`}>
        <div className={classes.blogBg}>
          <Container>
            {blogPage ? (
              ""
            ) : (
              <div className={classes.heading}>
                <Fade direction="left">
                  <h2>{text[0].heading}</h2>
                  <p>{text[0].text}</p>
                </Fade>
              </div>
            )}

            <div className={classes.content}>
              {useSlider ? (
                <Slider {...settings} className="blog-slider">
                  {blogs.map((blog) => (
                    <div key={blog.id}>
                      <Row>
                        <Col>
                          <div className={classes.blogCard}>
                            <JackInTheBox>
                              <div className={classes.imgBox}>
                                <img
                                  src={blog.image}
                                  width={100}
                                  height={100}
                                  alt="Blog Image"
                                />
                              </div>
                            </JackInTheBox>
                            <Zoom>
                              <span>{blog.date}</span>
                              <p>{blog.title}</p>
                              <div className="d-flex justify-content-between">
                                <Link href={"blog/edit/" + blog.id}>
                                  <a>Learn more</a>
                                </Link>

                                <img
                                  src="images/arrow.png"
                                  width={40}
                                  alt="Arrow"
                                />
                              </div>
                            </Zoom>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  ))}
                </Slider>
              ) : (
                <Row>
                  {data.map((blog) => (
                    <Col key={blog.id} sm={12} md={6} lg={4}>
                      <div className={classes.blogCard}>
                        <JackInTheBox>
                          <div className={classes.imgBox}>
                            <img
                              src={blog.imageUrl}
                              width={100}
                              height={100}
                              alt="Blog Image"
                            />
                          </div>
                        </JackInTheBox>
                        <Zoom>
                          <span>{blog.date}</span>
                          <p>{blog.content}</p>
                          <div className="d-flex justify-content-between">
                            <a href={blog.link}>Learn more</a>
                            <img
                              src="images/arrow.png"
                              width={40}
                              alt="Arrow"
                            />
                          </div>
                        </Zoom>
                      </div>
                    </Col>
                  ))}
                </Row>
              )}
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default Blog;
