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

export default function Home() {
  return (
    <>
      <Layout>
        <Seo />
        <Banner />
        <IntroSection />
        <ExploreProducts/>
        <Dutchflowers/>
        <Card/>
        <Blog useSlider={true}/>
        <TestimonialSlider/>
        <Faqs button={true}/>
      </Layout>
    </>
  );
}
