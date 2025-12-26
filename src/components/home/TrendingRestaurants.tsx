import { Star } from "lucide-react";
import SectionWrapper from "../layout/SectionWrapper";

const trendingRestaurants = [
  {
    id: 1,
    name: "Italian Bistro",
    img: "https://i.pinimg.com/736x/66/03/20/660320df147125ea7ef51e84c503d5af.jpg",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Sushi Place",
    img: "https://i.pinimg.com/736x/e2/ad/7d/e2ad7d551c9edac8af45a18afbf13f79.jpg",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Burger House",
    img: "https://i.pinimg.com/1200x/18/cb/1f/18cb1f5530f0391c4744645fa53ac0ba.jpg",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Vegan Delight",
    img: "https://i.pinimg.com/736x/ab/09/14/ab091451a1ea1f20c48f6a23d40de3a2.jpg",
    rating: 4.5,
  },
  {
    id: 5,
    name: "Steak Corner",
    img: "https://i.pinimg.com/736x/b7/f9/16/b7f91642b98431367cb4c0b40552ae46.jpg",
    rating: 4.9,
  },
  {
    id: 6,
    name: "Cafe Mocha",
    img: "https://i.pinimg.com/736x/ae/36/95/ae3695f39c91093e61e81105684f3021.jpg",
    rating: 4.4,
  },
  {
    id: 7,
    name: "Seafood Shack",
    img: "https://i.pinimg.com/1200x/95/06/95/95069563f2d9a5e378c9f252c39e1db8.jpg",
    rating: 4.7,
  },
];

const TrendingRestaurants = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <SectionWrapper>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2 transition-colors duration-500">
              Trending Restaurants
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto transition-colors duration-500">
              Discover the most popular restaurants loved by our community.
            </p>
          </div>

          {/* Mobile scrollable carousel */}
          <div className="flex space-x-4 overflow-x-auto pb-4 md:hidden">
            {trendingRestaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="min-w-[200px] flex-shrink-0 relative rounded-xl shadow-lg overflow-hidden group cursor-pointer"
              >
                <img
                  src={restaurant.img}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent dark:from-black/60 p-2 text-white font-semibold text-center flex flex-col items-center">
                  <span>{restaurant.name}</span>
                  <div className="flex items-center mt-1">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>{restaurant.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Grid for tablets & desktops */}
          <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {trendingRestaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={restaurant.img}
                  alt={restaurant.name}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent dark:from-black/60 p-3 text-white font-semibold text-center flex flex-col items-center">
                  <span>{restaurant.name}</span>
                  <div className="flex items-center mt-1">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>{restaurant.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default TrendingRestaurants;
