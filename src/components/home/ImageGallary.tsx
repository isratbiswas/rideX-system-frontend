const images = [
  "https://i.pinimg.com/736x/99/f6/2d/99f62dcb2aa601f90a2d94d2faf0c452.jpg",
  "https://i.pinimg.com/1200x/a6/87/26/a6872603ffb123402a7276724317f3f5.jpg",
  "https://i.pinimg.com/1200x/14/c1/fb/14c1fb01bccf09ffa5523c5c2ca18735.jpg",
  "https://i.pinimg.com/736x/3f/31/60/3f31601947c498388838683c88aad8c4.jpg",
  "https://i.pinimg.com/736x/21/f5/71/21f571579df9f7aeda51a04c3f5e3c74.jpg",
  "https://i.pinimg.com/736x/25/9e/bf/259ebfeedddf4c395fee7ff028c4166a.jpg",
  "https://i.pinimg.com/1200x/a6/87/26/a6872603ffb123402a7276724317f3f5.jpg",
  "https://i.pinimg.com/1200x/a6/87/26/a6872603ffb123402a7276724317f3f5.jpg",
];

export default function ImageGallery() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#DE802B] ">
            Our Gallery
          </h2>
          <p className="text-gray-600 mt-3">
            Explore our latest work & moments
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {images.map((src, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-md"
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium">
                  View Image
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
