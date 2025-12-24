import React from "react";
import SectionWrapper from "../layout/SectionWrapper";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className=" ">
      <section className=" ml-4 mr-4 bg-[#5C6F2B] rounded-md lg:grid lg:place-content-center">
        <SectionWrapper>
          <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
            <div className="max-w-prose text-left lg:ml-10">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                🚖 RideX – Your Journey, Our Priority
              </h1>
              <p className="mt-4 text-base text-pretty text-gray-300 sm:text-lg/relaxed">
                Book safe, fast, and affordable rides anytime, anywhere with
                trusted drivers.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4 mb-8 sm:mt-8">
                {/* Primary Button */}
                <Button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:from-orange-500 hover:to-orange-700 hover:scale-105 transition-transform duration-300">
                  Our Service
                </Button>
                {/* Secondary Button */}
                <Button className="bg-transparent border-1 border-orange-500 text-orange-500 font-semibold px-6 py-3 rounded-xl hover:bg-orange-500 hover:text-white hover:scale-105 transition-all duration-300">
                  Our Reviews
                </Button>
              </div>
            </div>
            <div className="mx-auto ">
              <img
                src="https://cdn-icons-png.freepik.com/256/8271/8271240.png?semt=ais_white_label"
                alt=""
              />
            </div>
          </div>
        </SectionWrapper>
      </section>
    </div>
  );
};

export default HeroSection;
