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
    <div className="bg-[#D8C9A7]/15">
      <SectionWrapper>
        <section className="py-16    text-center">
          <h1 className="text-3xl font-bold mb-4 text-[#DE802B] ">
            Why Choose RideX?
          </h1>
          <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-4 px-8">
            {services.map((service, i) => (
              <div key={i} className="mt-6 mb-4">
                <div className="bg-white rounded shadow-md border-1 h-48  px-4 py-14">
                  <h2 className="text-3xl text-gray-900 font-bold  ml-21">
                    {service.icon}
                  </h2>

                  <h3 className="mt-2 text-xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-md  text-gray-700">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </SectionWrapper>
    </div>
  );
};

export default HighLights;
