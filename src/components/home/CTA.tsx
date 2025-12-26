const CTA = () => {
  return (
    <section className="mx-4 rounded-2xl py-16 px-6 text-center bg-gradient-to-r from-orange-50 to-orange-100 dark:from-[#1E1E1E] dark:to-[#0D0D0D] transition-colors duration-300">
      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
        Ready to Ride with{" "}
        <span className="text-orange-600 dark:text-orange-400">RideX</span>?
      </h2>

      <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 mb-6 text-lg">
        Safe, affordable & quick transportation — right at your fingertips.
        Start your journey today and experience hassle-free travel with just a
        tap.
      </p>

      <p className="max-w-xl mx-auto text-gray-800 dark:text-gray-200 text-base sm:text-lg font-medium">
        🚗 Download our app soon to book your first ride and explore exclusive
        features. More details coming your way — stay connected!
      </p>

      <div className="mt-10">
        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
          Want updates?{" "}
          <span className="text-orange-600 dark:text-orange-400 font-semibold cursor-pointer hover:underline">
            Subscribe to our newsletter
          </span>
        </p>
      </div>
    </section>
  );
};

export default CTA;
