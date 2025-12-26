import { MobileCardSkeleton } from "@/components/layout/MobileSkeleton";
import { TableSkeleton } from "@/components/layout/TableSkeleton";
import {
  useAcceptRideMutation,
  useGetRideRequestQuery,
  useRejectRideMutation,
} from "@/components/redux/features/driver/driver.api";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

const GetRideRequest = () => {
  const {
    data: rides = [],
    isLoading,
    isError,
  } = useGetRideRequestQuery(undefined);

  const [rejectRide, { isLoading: rejecting }] = useRejectRideMutation();
  const [acceptRide, { isLoading: accepting }] = useAcceptRideMutation();

  const handleAccept = async (rideId: string) => {
    try {
      await acceptRide(rideId).unwrap();
      toast.success("Ride accepted successfully");
    } catch {
      toast.error("Failed to accept ride");
    }
  };

  const handleReject = async (rideId: string) => {
    try {
      await rejectRide(rideId).unwrap();
      toast.success("Ride rejected");
    } catch {
      toast.error("Failed to reject ride");
    }
  };

  if (isLoading) {
    return (
      <div className="p-6 space-y-4">
        <MobileCardSkeleton />
        <TableSkeleton />
      </div>
    );
  }

  if (isError) {
    return (
      <p className="text-center text-red-500 dark:text-red-400 mt-10">
        Failed to load ride requests
      </p>
    );
  }

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto text-slate-800 dark:text-slate-200">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-800 dark:text-slate-200">
        🚕 Ride Requests
      </h2>

      {rides.length === 0 ? (
        <p className="text-slate-500 dark:text-slate-400 text-center mt-10">
          No ride requests available
        </p>
      ) : (
        <>
          {/* ================= MOBILE VIEW (CARDS) ================= */}
          <div className="grid gap-4 md:hidden">
            {rides.map((ride: any) => (
              <div
                key={ride._id}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-md p-4 space-y-3"
              >
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">
                    {ride?.riderId?.name || "Unknown Rider"}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {ride?.riderId?.email}
                  </p>
                </div>

                <div className="text-sm text-slate-600 dark:text-slate-300">
                  <p>
                    <span className="font-medium">Pickup:</span>{" "}
                    {ride?.pickup?.address}
                  </p>
                  <p>
                    <span className="font-medium">Destination:</span>{" "}
                    {ride?.destination?.address}
                  </p>
                </div>

                <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                  ৳{ride?.fare}
                </p>

                <div className="flex gap-3">
                  <Button
                    className="flex-1 bg-indigo-600 hover:bg-indigo-700"
                    disabled={accepting}
                    onClick={() => handleAccept(ride._id)}
                  >
                    Accept
                  </Button>
                  <Button
                    className="flex-1 bg-red-600 hover:bg-red-700"
                    disabled={rejecting}
                    onClick={() => handleReject(ride._id)}
                  >
                    Reject
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* ================= DESKTOP VIEW (TABLE) ================= */}
          <div className="hidden md:block bg-white dark:bg-slate-800 shadow-md overflow-x-auto">
            <table className="w-full min-w-[1000px] text-sm border border-gray-200 dark:border-slate-700">
              <thead className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                <tr>
                  <th className="px-4 py-3 text-left">Rider</th>
                  <th className="px-4 py-3 text-left">Email</th>
                  <th className="px-4 py-3 text-left">Pickup</th>
                  <th className="px-4 py-3 text-left">Destination</th>
                  <th className="px-4 py-3 text-left">Fare</th>
                  <th className="px-4 py-3 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {rides.map((ride: any) => (
                  <tr
                    key={ride._id}
                    className="border-t border-gray-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition"
                  >
                    <td className="px-4 py-3 font-medium text-slate-800 dark:text-slate-200">
                      {ride?.riderId?.name}
                    </td>
                    <td className="px-4 py-3 text-slate-500 dark:text-slate-400">
                      {ride?.riderId?.email}
                    </td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">
                      {ride?.pickup?.address}
                    </td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">
                      {ride?.destination?.address}
                    </td>
                    <td className="px-4 py-3 font-semibold text-indigo-600 dark:text-indigo-400">
                      ৳{ride?.fare}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex justify-center gap-4">
                        <Button
                          size="sm"
                          className="bg-indigo-600 hover:bg-indigo-700"
                          disabled={accepting}
                          onClick={() => handleAccept(ride._id)}
                        >
                          Accept
                        </Button>
                        <Button
                          size="sm"
                          className="bg-red-600 hover:bg-red-700"
                          disabled={rejecting}
                          onClick={() => handleReject(ride._id)}
                        >
                          Reject
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default GetRideRequest;
