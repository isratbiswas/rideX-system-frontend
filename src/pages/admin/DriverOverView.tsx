import { useState } from "react";
import {
  useApproveDriverMutation,
  useGetPendingDriversQuery,
  useSuspendDriverMutation,
} from "@/components/redux/features/admin/admin.api";
import toast from "react-hot-toast";
import { CheckCircle, XCircle, Clock } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const DriverOverView = () => {
  const { data: drivers = [], isLoading } =
    useGetPendingDriversQuery(undefined);
  const [approveDriver] = useApproveDriverMutation();
  const [suspendDriver] = useSuspendDriverMutation();

  // Local state to track driver status
  const [driverStatus, setDriverStatus] = useState<
    Record<string, "PENDING" | "APPROVED" | "SUSPENDED">
  >({});

  const handleApprove = async (driverId: string) => {
    try {
      await approveDriver(driverId).unwrap();
      toast.success("Driver approved successfully");
      setDriverStatus((prev) => ({ ...prev, [driverId]: "APPROVED" }));
    } catch (err) {
      console.error("Failed to approve driver", err);
      toast.error("Failed to approve driver");
    }
  };

  const handleSuspend = async (driverId: string) => {
    try {
      await suspendDriver(driverId).unwrap();
      toast.success("Driver suspended successfully");
      setDriverStatus((prev) => ({ ...prev, [driverId]: "SUSPENDED" }));
    } catch (err) {
      console.error("Failed to suspend driver", err);
      toast.error("Failed to suspend driver");
    }
  };

  if (isLoading) {
    return <Skeleton className="h-40 w-full rounded-xl" />;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h3 className="text-3xl font-bold mb-6 text-gray-800">Pending Drivers</h3>

      {drivers.length === 0 ? (
        <p className="text-gray-600">No pending drivers found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {drivers.map((driver: any) => {
            const status = driverStatus[driver._id] || "PENDING";

            return (
              <div
                key={driver._id}
                className="p-5 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex flex-col justify-between"
              >
                {/* Driver Info */}
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {driver.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{driver.email}</p>
                  <p className="text-gray-500 text-sm">
                    Phone: {driver.phone || "N/A"}
                  </p>
                </div>

                {/* Status & Actions */}
                <div className="mt-4 flex items-center gap-2 flex-wrap">
                  {status === "PENDING" && (
                    <button
                      onClick={() => handleApprove(driver._id)}
                      className="flex items-center gap-1 px-4 py-1 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition-colors duration-200 text-sm font-medium"
                    >
                      <Clock size={16} />
                      Pending
                    </button>
                  )}

                  {status === "APPROVED" && (
                    <>
                      <span className="flex items-center gap-1 px-4 py-1 bg-green-400 text-white rounded-lg text-sm font-medium">
                        <CheckCircle size={16} />
                        Approved
                      </span>
                      <button
                        onClick={() => handleSuspend(driver._id)}
                        className="flex items-center gap-1 px-4 py-1 bg-red-400 text-white rounded-lg hover:bg-red-500 transition-colors duration-200 text-sm font-medium"
                      >
                        <XCircle size={16} />
                        Suspend
                      </button>
                    </>
                  )}

                  {status === "SUSPENDED" && (
                    <span className="flex items-center gap-1 px-4 py-1 bg-gray-400 text-white rounded-lg text-sm font-medium">
                      <XCircle size={16} />
                      Suspended
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DriverOverView;
