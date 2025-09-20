const steps = [
  { title: "Book Your Ride", desc: "Choose pickup & drop location easily." },
  { title: "Driver Accepts", desc: "Nearby drivers accept your request." },
  { title: "Reach Safely", desc: "Arrive fast, safely, and affordably." },
];
const HowItWorks = () => {
  return (
    <section className="py-16 bg-neutral-light text-center">
      <h2 className="text-3xl font-bold mb-10">How It's Work</h2>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6 px-8">
        {steps.map((step, i) => (
          <div key={i} className="bg-white shadow-md p-6 border-1 rounded-xl">
            <h3 className="text-xl font-semibold text-primary">{step.title}</h3>
            <p className="text-gray-600 mt-2">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
