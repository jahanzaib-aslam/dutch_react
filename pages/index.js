import Layout from "../Layout";
import Seo from "../Seo/Seo";
import Faqs from "../components/Faq";
import IntroSection from "../components/Intro";
import Banner from "../components/banner";
import Blog from "../components/blog";
import Card from "../components/card";
import Dutchflowers from "../components/dutchflowers";
import ExploreProducts from "../components/explore-products";
import TestimonialSlider from "../components/testimonial-slider";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    // Define the URL of your API endpoint
    const apiUrl = "https://dutchflowers.devsfolio.com/api/home";

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Set the fetched data to the state
        setHomeData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      {homeData && (
        <Layout>
          <Seo />
          <Banner />
          <IntroSection pageData={homeData.data.home_content.section_1} />
          <ExploreProducts products={homeData.data.products} home={true} />
          <Dutchflowers pageData={homeData.data.home_content.section_3} />
          <Card
            text={homeData.data.home_content.section_4}
            cards={homeData.data.home_content.section_5}
          />
          <Blog
            useSlider={true}
            text={homeData.data.home_content.section_6}
            blogs={homeData.data.blog}
          />
          <TestimonialSlider pageData={homeData.data.home_content.section_7} />
          <Faqs button={true} faqs={homeData.data.faq} />
        </Layout>
      )}
    </>
  );
}
