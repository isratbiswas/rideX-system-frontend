import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className="pt-8 ">
      <section className=" ml-4 mr-4 bg-gray-50  rounded-md lg:grid  lg:place-content-center">
        <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
          <div className="max-w-prose text-left lg:ml-10">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              🚖 RideX – Your Journey, Our Priority
            </h1>

            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              Book safe, fast, and affordable rides anytime, anywhere with
              trusted drivers.
            </p>

            <div className="mt-4 flex gap-4 mb-6 sm:mt-6">
              <Button>Book a Ride</Button>
              <Button>Become a Driver</Button>
            </div>
          </div>

          <div className="mx-auto ">
            <img
              src="https://cdn-icons-png.freepik.com/256/8271/8271240.png?semt=ais_white_label"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
