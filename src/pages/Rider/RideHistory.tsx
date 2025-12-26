import { MobileCardSkeleton } from "@/components/layout/MobileSkeleton";
import { TableSkeleton } from "@/components/layout/TableSkeleton";
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

  if (isLoading)
    return (
      <div className="max-w-5xl mx-auto">
        <MobileCardSkeleton />
        <TableSkeleton />
      </div>
    );
  if (rideHistory.length === 0)
    return <p className="text-center mt-10 font-bold">No rides found.</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6  text-slate-800">
        My Ride History
      </h1>

      {/* ===== 📌 Mobile Cards ===== */}
      <div className="space-y-4 md:hidden">
        {rideHistory.map((ride) => {
          const canCancel = ride.status === "requested";
          return (
            <div
              key={ride._id}
              className="border rounded-xl shadow-sm p-4 space-y-3 bg-white"
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold">
                  {ride.status.toUpperCase()}
                </span>
                <span className="text-xs text-gray-500">
                  {new Date(ride.createdAt).toLocaleString()}
                </span>
              </div>

              <div className="text-sm">
                <div className="flex items-center gap-2 mb-1">
                  <FaMapMarkerAlt className="text-green-500" />
                  <span>{ride.pickup.address}</span>
                </div>
                <span className="ml-6 text-gray-500">↓</span>
                <div className="flex items-center gap-2 mt-1">
                  <FaMapMarkerAlt className="text-red-500 rotate-180" />
                  <span>{ride.destination.address}</span>
                </div>
              </div>

              <p className="flex items-center gap-1 text-sm">
                <FaDollarSign className="text-yellow-500" /> {ride.fare} BDT
              </p>

              <p className="text-sm text-gray-600">
                Driver:{" "}
                {ride.driverId ? ride.driverId.name : "Not assigned yet"}
              </p>

              {canCancel && (
                <button
                  onClick={() => handleCancelRide(ride._id)}
                  disabled={cancelLoading}
                  className="w-full py-2 mt-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 transition"
                >
                  {cancelLoading ? "Cancelling..." : "Cancel Ride"}
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* ===== 🖥 Desktop Table ===== */}
      <div className="hidden md:block overflow-x-auto rounded-lg shadow-sm bg-white space-y-6 max-w-5xl mx-auto mt-6">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Pickup → Destination</th>
              <th className="p-3 text-left">Fare</th>
              <th className="p-3 text-left">Driver</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {rideHistory.map((ride) => {
              const canCancel = ride.status === "requested";

              return (
                <tr
                  key={ride._id}
                  className="border-b hover:bg-gray-50 transition text-gray-600"
                >
                  <td className="p-3 font-medium ">
                    {ride.status.toUpperCase()}
                  </td>
                  <td className="p-3">
                    <span className="text-gray-600 font-medium">
                      {ride.pickup.address}
                    </span>{" "}
                    <span className="text-gray-600">→</span>{" "}
                    <span>{ride.destination.address}</span>
                  </td>
                  <td className="p-3 font-medium">{ride.fare} BDT</td>
                  <td className="p-3">
                    {ride.driverId ? ride.driverId.name : "Not assigned"}
                  </td>
                  <td className="p-3">
                    {new Date(ride.createdAt).toLocaleString()}
                  </td>
                  <td className="p-3 gap-8">
                    {canCancel && (
                      <button
                        onClick={() => handleCancelRide(ride._id)}
                        disabled={cancelLoading}
                        className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition disabled:opacity-50"
                      >
                        {cancelLoading ? "..." : "Cancel"}
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RideHistory;
