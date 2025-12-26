import { Star } from "lucide-react";
import SectionWrapper from "../layout/SectionWrapper";

const feedbacks = [
  {
    name: "Nabiha Islam",
    text: "RideX is super reliable and fast!",
    rating: 4.5,
  },
  {
    name: "Niaz-ul-Islam",
    text: "Affordable fares & friendly drivers.",
    rating: 4,
  },
  {
    name: "Rafi Ahmad",
    text: "Easy to book rides anytime, anywhere.",
    rating: 3.5,
  },
  {
    name: "Ali-ul-Islam",
    text: "RideX is always on time and super affordable. It’s my go-to app whenever I need a quick ride.",
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <div className="bg-[#D8C9A7]/15 dark:bg-[#0D0D0D] transition-colors duration-300">
      <SectionWrapper>
        <section className="py-16 mx-2 text-center">
          <h1 className="text-4xl font-extrabold mb-6 text-[#DE802B] dark:text-orange-400">
            What Our Riders Say
          </h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg mb-10">
            Thousands of satisfied riders trust RideX every day. Here's what
            they think.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-6">
            {feedbacks.map((feedback, i) => (
              <div
                key={i}
                className="bg-white dark:bg-[#1A1A1A] shadow-md rounded-2xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {feedback.name}
                </h2>

                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-4">
                  {feedback.text}
                </p>

                {/* Rating stars */}
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, index) => {
                    const fullStar = index + 1 <= Math.floor(feedback.rating);
                    const halfStar =
                      feedback.rating % 1 !== 0 &&
                      index + 1 === Math.ceil(feedback.rating);

                    return (
                      <Star
                        key={index}
                        size={20}
                        className={
                          fullStar || halfStar
                            ? "text-orange-500 fill-orange-400"
                            : "text-gray-300 dark:text-gray-600"
                        }
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      </SectionWrapper>
    </div>
  );
};

export default Testimonial;
