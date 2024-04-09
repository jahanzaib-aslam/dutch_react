import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import classes from "./index.module.scss"

function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(1);

  function plusSlides(n) {
    setSlideIndex(slideIndex + n);
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }

  return (
    <div>
      <Container>
        <div className={classes.mySlides} style={{ display: slideIndex === 1 ? 'block' : 'none' }}>
          <img src="/images/slide1.jpg" style={{ width: "100%" }} alt="Slide 1" />
        </div>
        <div className={classes.mySlides} style={{ display: slideIndex === 2 ? 'block' : 'none' }}>
          <img src="/images/slide2.jpg" style={{ width: "100%" }} alt="Slide 2" />
        </div>
        <div className={classes.mySlides} style={{ display: slideIndex === 3 ? 'block' : 'none' }}>
          <img src="/images/slide1.jpg" style={{ width: "100%" }} alt="Slide 3" />
        </div>
        <div className={classes.mySlides}  style={{ display: slideIndex === 4 ? 'block' : 'none' }}>
          <img src="/images/slide2.jpg" style={{ width: "100%" }} alt="Slide 4" />
        </div>
        <div className={classes.mySlides} style={{ display: slideIndex === 5 ? 'block' : 'none' }}>
          <img src="/images/slide1.jpg" style={{ width: "100%" }} alt="Slide 2" />
        </div>
        <a  className={classes.prev} onClick={() => plusSlides(-1)}>❮</a>
        <a  className={classes.next} onClick={() => plusSlides(1)}>❯</a>
        <div className="caption-container">
          <p id="caption"></p>
        </div>
        <Row  className={classes.row}>
          <div className={classes.column}>
            <img className="demo cursor" src="/images/slide1.jpg" style={{ width: "100%", height:"80px !important" }} onClick={() => currentSlide(1)} alt="Slide 1" />
          </div>
          <div className={classes.column}>
            <img className="demo cursor" src="/images/slide2.jpg" style={{ width: "100%", height:"80px !important" }} onClick={() => currentSlide(2)} alt="Slide 2" />
          </div>
          <div className={classes.column}>
            <img className="demo cursor" src="/images/slide1.jpg" style={{ width: "100%", height:"80px !important" }} onClick={() => currentSlide(3)} alt="Slide 3" />
          </div>
          <div className={classes.column}>
            <img className="demo cursor" src="/images/slide2.jpg" style={{ width: "100%", height:"80px !important" }} onClick={() => currentSlide(2)} alt="Slide 4" />
          </div>
          <div className={classes.column}>
            <img className="demo cursor" src="/images/slide1.jpg" style={{ width: "100%", height:"80px !important" }} onClick={() => currentSlide(1)} alt="Slide 5" />
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Slideshow;
