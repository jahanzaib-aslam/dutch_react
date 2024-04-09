import React, { useRef, useEffect } from "react";
import classes from "./index.module.scss";

const Banner = () => {
  return (
    <div className={classes.banner}>
      <video
        autoPlay
        muted
        id="heroVideo"
        playsInline
        poster="/video/thumb.jpg"
      >
        <source src="video/about.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Banner;
