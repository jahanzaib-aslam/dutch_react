import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import classes from "./index.module.scss";

function Slideshow({ images }) {
  const [slideIndex, setSlideIndex] = useState(0); // Change initial index to 0

  function plusSlides(n) {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex >= images.length) {
        newIndex = 0; // Wrap around to the first slide
      } else if (newIndex < 0) {
        newIndex = images.length - 1; // Wrap around to the last slide
      }
      return newIndex;
    });
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }

  return (
    <div>
      <Container className="position-relative">
        {images.map((image, index) => (
          <div
            key={index}
            className={classes.mySlides}
            style={{ display: index === slideIndex ? "block" : "none" }}
          >
            <img
              src={image.imgSrc}
              style={{ width: "100%" }}
              alt={`slide ${index}`}
            />
          </div>
        ))}

        <a className={classes.prev} onClick={() => plusSlides(-1)}>
          ❮
        </a>
        <a className={classes.next} onClick={() => plusSlides(1)}>
          ❯
        </a>
        <div className="caption-container">
          <p id="caption"></p>
        </div>
        <Row className={classes.row}>
          {images.map((image, index) => (
            <div key={index} className={classes.column}>
              <img
                className="demo cursor"
                src={image.imgSrc}
                style={{ width: "100%", height: "80px" }} // Remove !important
                onClick={() => currentSlide(index)}
                alt={`Slide ${index}`}
              />
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Slideshow;
