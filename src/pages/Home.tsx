import CTA from "@/components/home/CTA";
import HeroSection from "@/components/home/HeroSection";
import HighLights from "@/components/home/HighLights";
import HowItWorks from "@/components/home/HowItWorks";
import ImageGallery from "@/components/home/ImageGallary";
import Testimonial from "@/components/home/Testimonial";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <HighLights />
      <ImageGallery />
      <Testimonial />
      <CTA />
    </div>
  );
};

export default Home;
