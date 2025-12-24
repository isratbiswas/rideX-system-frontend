import { useGetDriverHistoryQuery } from "@/components/redux/features/driver/driver.api"; // Replace with your API slice
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const DriverHistoryPage = () => {
  const {
    data: driverData,
    isLoading,
    isError,
  } = useGetDriverHistoryQuery(undefined);
  console.log(driverData, "driverDaat");

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading driver data.</p>;

  const driver = driverData?.data;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Driver History</h1>

      {/* Driver Info Card */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{driver.name}</CardTitle>
          <CardDescription>{driver.email}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            <strong>Status:</strong>{" "}
            <Badge
              variant={driver.isActive === "ACTIVE" ? "default" : "destructive"}
            >
              {driver.isActive}
            </Badge>
          </p>
          <p>
            <strong>Availability:</strong>{" "}
            <Badge
              variant={
                driver.availabilityStatus === "ONLINE"
                  ? "default"
                  : "destructive"
              }
            >
              {driver.availabilityStatus}
            </Badge>
          </p>
          <p>
            <strong>Request Status:</strong> {driver.requestStatus}
          </p>
          <p>
            <strong>Current Ride ID:</strong> {driver.currentRideId || "None"}
          </p>
          <p>
            <strong>Earnings:</strong> ${driver.earnings}
          </p>
          <p>
            <strong>Joined:</strong>{" "}
            {new Date(driver.createdAt).toLocaleDateString()}
          </p>
        </CardContent>
      </Card>

      {/* Completed Rides */}
      <Card>
        <CardHeader>
          <CardTitle>Completed Rides</CardTitle>
          <CardDescription>
            {driver.completedRides.length > 0
              ? `Total ${driver.completedRides.length} ride(s)`
              : "No completed rides yet."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {driver.completedRides.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ride ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Fare</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {driver.completedRides.map((ride: any) => (
                  <TableRow key={ride._id}>
                    <TableCell>{ride._id}</TableCell>
                    <TableCell>
                      {new Date(ride.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell>${ride.fare}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          ride.status === "COMPLETED"
                            ? "default"
                            : "destructive"
                        }
                      >
                        {ride.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p>No completed rides to show.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DriverHistoryPage;
