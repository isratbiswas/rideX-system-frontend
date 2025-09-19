export default function Features() {
  const features = {
    Rider: [
      "Book rides easily",
      "Real-time tracking",
      "Multiple payment options",
      "Ride history & support",
    ],
    Driver: [
      "Accept/decline requests",
      "Earnings dashboard",
      "Navigation & maps",
      "Rating system",
    ],
    Admin: [
      "User management",
      "Monitor rides",
      "Handle disputes",
      "Analytics dashboard",
    ],
  };

  return (
    <section className="py-16 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-12">RideX Features</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {Object.entries(features).map(([role, items], i) => (
          <div key={i} className="bg-white border-1 shadow-md p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-primary mb-4">{role}</h3>
            <ul className="list-disc list-inside text-gray-600">
              {items.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
