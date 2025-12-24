import {
  useAcceptRideMutation,
  useGetRideRequestQuery,
  useRejectRideMutation,
} from "@/components/redux/features/driver/driver.api";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
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
    } catch (err) {
      toast.error("Failed to accept ride");
    }
  };

  const handleReject = async (rideId: string) => {
    try {
      await rejectRide(rideId).unwrap();
      toast.success("Ride rejected");
    } catch (err) {
      toast.error("Failed to reject ride");
    }
  };

  if (isLoading) {
    return (
      <div className="p-6 space-y-4">
        <Skeleton className="h-20 w-full rounded-xl" />
        <Skeleton className="h-20 w-full rounded-xl" />
      </div>
    );
  }

  if (isError) {
    return (
      <p className="text-center text-red-500 mt-10">
        Failed to load ride requests
      </p>
    );
  }

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-800">
        🚕 Ride Requests
      </h2>

      {rides.length === 0 ? (
        <p className="text-slate-500 text-center mt-10">
          No ride requests available
        </p>
      ) : (
        <>
          {/* ================= MOBILE VIEW (CARDS) ================= */}
          <div className="grid gap-4 md:hidden">
            {rides.map((ride: any) => (
              <div
                key={ride._id}
                className="bg-white rounded-2xl shadow-md p-4 space-y-3"
              >
                <div>
                  <p className="font-semibold text-slate-800">
                    {ride?.riderId?.name || "Unknown Rider"}
                  </p>
                  <p className="text-sm text-slate-500">
                    {ride?.riderId?.email}
                  </p>
                </div>

                <div className="text-sm text-slate-600">
                  <p>
                    <span className="font-medium">Pickup:</span>{" "}
                    {ride?.pickup?.address}
                  </p>
                  <p>
                    <span className="font-medium">Destination:</span>{" "}
                    {ride?.destination?.address}
                  </p>
                </div>

                <p className="text-lg font-bold text-indigo-600">
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
          <div className="hidden md:block  bg-white shadow-md overflow-x-auto">
            <table className="w-full min-w-[1000px] text-sm border border-gray-200">
              <thead className="bg-slate-100 text-slate-700">
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
                    className="border-t hover:bg-slate-50 transition"
                  >
                    <td className="px-4 py-3 font-medium">
                      {ride?.riderId?.name}
                    </td>
                    <td className="px-4 py-3 text-slate-500">
                      {ride?.riderId?.email}
                    </td>
                    <td className="px-4 py-3">{ride?.pickup?.address}</td>
                    <td className="px-4 py-3">{ride?.destination?.address}</td>
                    <td className="px-4 py-3 font-semibold text-indigo-600">
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
