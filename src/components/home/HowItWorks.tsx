import { FaMapMarkedAlt, FaUserCheck, FaShieldAlt } from "react-icons/fa";
import SectionWrapper from "../layout/SectionWrapper";

const steps = [
  {
    icon: <FaMapMarkedAlt />,
    title: "Book Your Ride",
    desc: "Choose pickup & drop location easily.",
  },
  {
    icon: <FaUserCheck />,
    title: "Driver Accepts",
    desc: "Nearby drivers accept your request.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Reach Safely",
    desc: "Arrive fast, safely, and affordably.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-neutral-light dark:bg-[#0D0D0D] transition-colors duration-300 text-center">
      <SectionWrapper>
        <h2 className="text-4xl font-extrabold mb-6 text-[#DE802B] dark:text-orange-400">
          How It Works
        </h2>

        <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto mb-10">
          Getting a ride is super simple! Just follow these steps and you're on
          your way.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#1A1A1A] shadow-md hover:shadow-xl border dark:border-gray-700 rounded-2xl p-8 
              flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl text-[#DE802B] dark:text-orange-400 mb-6">
                {step.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {step.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                {step.desc}
              </p>

              <span className="mt-6 inline-block text-sm font-semibold text-gray-500 dark:text-gray-400">
                Step {i + 1}
              </span>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default HowItWorks;
