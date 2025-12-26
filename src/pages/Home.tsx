import CTA from "@/components/home/CTA";
import GetDiscount from "@/components/home/GetDiscount";
import HeroSection from "@/components/home/HeroSection";
import HighLights from "@/components/home/HighLights";
import HowItWorks from "@/components/home/HowItWorks";
import ImageGallery from "@/components/home/ImageGallary";
import Testimonial from "@/components/home/Testimonial";
import TrendingRestaurants from "@/components/home/TrendingRestaurants";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <TrendingRestaurants />
      <HighLights />
      <ImageGallery />
      <Testimonial />
      <GetDiscount />
      <CTA />
    </div>
  );
};

export default Home;
