import React from "react";

const CTA = () => {
  return (
    <section className="bg-gray-50 rounded-md  py-16 text-center">
      <h2 className="text-3xl text-gray-900 font-bold mb-4">
        Ready to Ride with RideX?
      </h2>
      <p className="mb-6 text-gray-700">
        Download our app and book your first ride today.
      </p>
      <div className="flex justify-center gap-4">
        <button className="bg-gray-400 text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-600">
          App Store
        </button>
        <button className="bg-gray-400 text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-600">
          Google Play
        </button>
      </div>
    </section>
  );
};

export default CTA;
