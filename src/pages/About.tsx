import React from "react";
import {
  FaCarSide,
  FaClock,
  FaMoneyBillWave,
  FaShieldAlt,
} from "react-icons/fa";

const teams = [
  {
    img: "https://media.istockphoto.com/id/2165425195/photo/portrait-of-a-man-in-an-office.jpg?s=1024x1024&w=is&k=20&c=tl5FUJDIyFjdvygEKHDPXKhvPq-_PSjfK35SRtdTq7I=",
    name: "Isthiauq Islam",
    role: "CEO & Founder",
    desc: "Visionary behind RideX, focusing on innovation & safety.",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1726718504149-1411b7651bf2?q=80&w=767&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Ayesha Khan",
    role: "CTO",
    desc: "Leading the tech team to build scalable, secure solutions.",
  },
  {
    img: "https://images.unsplash.com/photo-1609048647061-76d541aba9f6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Md. Firoz Khan",
    role: "Operations Head",
    desc: "Ensuring smooth rides and top-notch driver management.",
  },
];
const About = () => {
  return (
    <section className="py-16 px-6 md:px-20">
      <div className="grid grid-cols-2 gap-4">
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1544141687-4a0477ba4ccc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="about-image"
            className="w-full object-cover"
          />
        </div>
        <div className="mt-14">
          <h2 className="text-3xl font-bold text-center mb-4 mt-6">
            About RideX
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            RideX was founded to make city travel faster, safer, and more
            convenient. Our mission is to connect people with reliable rides
            anytime, anywhere. We value affordability, trust, and innovation.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-10 mb-14 text-left mt-12">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border-1 shadow">
          <h3 className="text-xl font-semibold text-teal-600 mb-3">
            Our Mission
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            To simplify urban mobility by providing everyone access to fast,
            secure, and affordable rides with just a few taps.
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border-1 shadow">
          <h3 className="text-xl font-semibold text-teal-600 mb-3">
            Our Vision
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            To become the most trusted ride-sharing service in the region,
            empowering drivers and offering seamless travel experiences for
            millions of riders.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 mt-10">
        Our Core Values
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
        <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 border-1 rounded-2xl shadow">
          <FaShieldAlt className="text-4xl text-teal-600 mb-3" />
          <h4 className="font-semibold text-gray-800 dark:text-white">
            Safety
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Verified drivers & secure rides.
          </p>
        </div>

        <div className="flex flex-col border-1 items-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow">
          <FaClock className="text-4xl text-teal-600 mb-3" />
          <h4 className="font-semibold text-gray-800 dark:text-white">
            Reliability
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Always on time, everywhere.
          </p>
        </div>

        <div className="flex flex-col border-1 items-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow">
          <FaMoneyBillWave className="text-4xl text-teal-600 mb-3" />
          <h4 className="font-semibold text-gray-800 dark:text-white">
            Affordability
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Fair and transparent pricing.
          </p>
        </div>

        <div className="flex flex-col border-1 items-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow">
          <FaCarSide className="text-4xl text-teal-600 mb-3" />
          <h4 className="font-semibold text-gray-800 dark:text-white">
            Innovation
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Smarter travel powered by technology.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-center mb-12 mt-10">
          Meet Our Team
        </h2>
        <div className="grid lg:grid-cols-3  md:grid-cols-3  sm:grid-cols-1 gap-4">
          {teams.map((team, ind) => (
            <div
              key={ind}
              className="bg-white border-1 shadow-md p-6 rounded-xl text-center"
            >
              <img
                src={team.img}
                className="rounded-full w-30 h-20 mx-auto"
                alt={team.name}
              />

              <h2 className="font-bold text-lg text-gray-800 dark:text-gray-800 mt-2 ">
                {team.name}
              </h2>
              <h4 className="text-primary font-semibold text-gray-800 dark:text-gray-800 mt-2 ">
                {team.role}
              </h4>
              <p className="text-gray-600 mt-2">{team.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
