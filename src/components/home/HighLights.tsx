import { MdOutlinePriceCheck } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdTimeToLeave } from "react-icons/md";
import SectionWrapper from "../layout/SectionWrapper";

const services = [
  {
    icon: <MdOutlinePriceCheck />,
    title: "Affordable Pricing",
    desc: "Best fares with no hidden charges.",
  },
  {
    icon: <MdTimeToLeave />,
    title: "24/7 Availability",
    desc: "Ride anytime, day or night.",
  },
  {
    icon: <GrUserManager />,
    title: "Trusted Drivers",
    desc: "Verified drivers for your safety.",
  },
  {
    icon: <RiSecurePaymentLine />,
    title: "Easy Payments",
    desc: "Multiple options: Cash, Card, Wallet.",
  },
];

const HighLights = () => {
  return (
    <div className="bg-[#D8C9A7]/15 dark:bg-[#0D0D0D] transition-colors duration-300">
      <SectionWrapper>
        <section className="py-16 text-center">
          <h1 className="text-4xl font-extrabold mb-4 text-[#DE802B] dark:text-orange-400">
            Why Choose RideX?
          </h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto mb-10 text-lg">
            Your comfort and safety are our top priorities. Here's what makes
            RideX stand out.
          </p>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white dark:bg-[#1A1A1A] rounded-2xl shadow-md hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 p-6 flex flex-col items-center"
              >
                <div className="text-orange-500 dark:text-orange-400 text-5xl mb-4">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>

                <p className="text-base text-gray-600 dark:text-gray-300 max-w-[200px] mx-auto leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </SectionWrapper>
    </div>
  );
};

export default HighLights;
