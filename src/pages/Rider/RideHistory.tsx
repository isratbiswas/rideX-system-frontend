import {
  useCancelRideMutation,
  useGetMeQuery,
} from "@/components/redux/features/rider/rider.api";
import toast from "react-hot-toast";
import { FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";

interface Ride {
  _id: string;
  pickup: { address: string };
  destination: { address: string };
  driverId: { name?: string; email?: string } | null;
  fare: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}

const RideHistory = () => {
  const { data: getMe, isLoading } = useGetMeQuery(undefined);
  const [cancelRide, { isLoading: cancelLoading }] = useCancelRideMutation();

  const rideHistory: Ride[] = getMe?.rides || [];
  console.log(rideHistory, "ride2");
  const handleCancelRide = async (rideId: string) => {
    try {
      console.log({ rideId }, "cancel-1");
      const result = await cancelRide({ rideId }).unwrap();
      console.log(result.data, "cancel-2");
      toast.success("Ride cancelled successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to cancel ride!");
    }
  };

  if (isLoading) return <p className="text-center mt-10">Loading rides...</p>;
  if (rideHistory.length === 0)
    return <p className="text-center mt-10">No rides found.</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">My Ride History</h1>

      <div className="space-y-4">
        {rideHistory.map((ride) => {
          const canCancel = ride.status === "requested";

          return (
            <div
              key={ride._id}
              className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-2 gap-2">
                <span className="font-md">
                  Status: {ride.status.toUpperCase()}
                </span>

                <span className="text-sm text-gray-500">
                  {new Date(ride.createdAt).toLocaleString()}
                </span>
              </div>

              <div className="flex items-center gap-4 mb-2">
                <FaMapMarkerAlt className="text-green-500" />
                <span>{ride.pickup.address}</span>
                <span className="mx-2">→</span>
                <span>{ride.destination.address}</span>
              </div>

              <div className="flex items-center gap-4 mb-2">
                <FaDollarSign className="text-yellow-500" />
                <span>Fare: {ride.fare} BDT</span>
              </div>

              <div className="text-sm text-gray-600 mb-3">
                Driver:{" "}
                {ride.driverId ? ride.driverId.name : "Not assigned yet"}
              </div>

              {canCancel && (
                <button
                  onClick={() => handleCancelRide(ride._id)}
                  disabled={cancelLoading}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition disabled:opacity-50"
                >
                  {cancelLoading ? "Cancelling..." : "Cancel Ride"}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RideHistory;
