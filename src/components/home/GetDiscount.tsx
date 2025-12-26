import { useState } from "react";
import { Gift, Bike, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import SectionWrapper from "../layout/SectionWrapper";

const GetDiscount = () => {
  const [referralLink] = useState("https://yourapp.com/referral?code=XYZ123");

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    toast.success("Referral link copied!");
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <SectionWrapper>
        {/* Title */}
        <div className="max-w-lg mx-auto space-y-3 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Invite Friends & Earn Discounts 🎁
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            Share your referral link with friends & get exclusive discounts on
            rides and food orders. The more friends join — the more you save!
          </p>
        </div>

        {/* Cards */}
        <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {/* Ride Discount */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition p-5 sm:p-6 border border-orange-100 dark:border-orange-400 flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <Bike className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">
                Invite on Ride
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              Get{" "}
              <span className="font-bold text-orange-600 dark:text-orange-400">
                40% OFF
              </span>{" "}
              on your next 3 rides for every friend who joins and completes
              their first ride.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                className="w-full sm:w-1/2 border-orange-300 dark:border-orange-500 text-orange-600 dark:text-orange-400"
              >
                Details
              </Button>
              <Button className="w-full sm:w-1/2 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white">
                Invite Friend
              </Button>
            </div>
          </div>

          {/* Food Discount */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition p-5 sm:p-6 border border-green-100 dark:border-green-400 flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <UtensilsCrossed className="w-7 h-7 sm:w-8 sm:h-8 text-green-500" />
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">
                Invite on Food
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              Enjoy{" "}
              <span className="font-bold text-green-600 dark:text-green-400">
                50% OFF
              </span>{" "}
              on food orders + your friend gets free delivery on their 1st
              order!
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                className="w-full sm:w-1/2 border-green-300 dark:border-green-500 text-green-600 dark:text-green-400"
              >
                Details
              </Button>
              <Button className="w-full sm:w-1/2 bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white">
                Invite Friend
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-6 md:mt-8 bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            <Gift className="w-8 h-8 sm:w-10 sm:h-10 text-purple-500" />
            <p className="text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base">
              Earn extra rewards when 5+ friends sign up using your link!
            </p>
          </div>
          <Button
            onClick={copyReferralLink}
            className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800 text-white"
          >
            Copy Referral Link
          </Button>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default GetDiscount;
