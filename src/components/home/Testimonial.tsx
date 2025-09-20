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
    text: "“RideX is always on time and super affordable. It’s my go-to app whenever I need a quick ride.”",
    rating: 5,
  },
];
const Testimonial = () => {
  return (
    <section className="py-16 ml-2 mr-2 text-center">
      <h1 className="text-3xl font-bold mb-4 ">What Our Riders Say</h1>
      <div className="grid lg:grid-cols-4    sm:grid-cols-1 gap-4 m-4">
        {feedbacks.map((feedback, i) => (
          <div key={i} className="mt-6 mb-4">
            <div className="bg-white shadow border-1 rounded-md h-50  px-4 py-14">
              <h2 className=" text-xl text-gray-800">{feedback.name}</h2>
              <p className="text-md  text-gray-600">{feedback.text}</p>
              <h5
                className="text-orange-400
"
              >
                {feedback.rating}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
