import CTA from "@/components/home/CTA";
import HeroSection from "@/components/home/HeroSection";
import HighLights from "@/components/home/HighLights";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonial from "@/components/home/testimonial";
import React from "react";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <HighLights />
      <Testimonial />
      <CTA />
    </div>
  );
};

export default Home;
