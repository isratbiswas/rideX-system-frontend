import { useCreateRideRequestMutation } from "@/components/redux/features/rider/rider.api";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { rideFormSchema, type RideFormInput } from "@/zod";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import Loader from "@/components/layout/Loader";

export default function RideRequestForm() {
  const [createRideRequest, isLoading] = useCreateRideRequestMutation();
  const navigate = useNavigate();

  const form = useForm<RideFormInput>({
    resolver: zodResolver(rideFormSchema),
    defaultValues: {
      pickup: { address: "", coords: { lat: 0, lng: 0 } },
      destination: { address: "", coords: { lat: 0, lng: 0 } },
      fare: 0,
    },
  });

  const onSubmit = async (data: RideFormInput) => {
    try {
      const result = await createRideRequest(data).unwrap();
      console.log(result);
      toast.success("Ride request created successfully");
      form.reset();
      navigate("/rider/rideHistory");
    } catch (err) {
      console.error(err);
      toast.error("Failed to create ride request");
    }
  };

  if (isLoading) <Loader />;

  return (
    <div className="w-full min-h-screen p-6 md:p-10 lg:p-16 bg-gray-50">
      <h2 className="text-3xl font-semibold mb-6 text-slate-800">
        Ride Request
      </h2>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-full"
        >
          {/* Pickup */}
          <div className="border rounded-lg p-6 space-y-4 bg-white shadow-sm">
            <h3 className="font-semibold text-lg ">Pickup</h3>

            <FormField
              control={form.control}
              name="pickup.address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-500">
                    Pickup Address
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter pickup address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="pickup.coords.lat"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500">Latitude</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.0001"
                        value={field.value ?? ""}
                        onChange={(e) =>
                          field.onChange(
                            e.target.value === "" ? "" : Number(e.target.value)
                          )
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="pickup.coords.lng"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500">Longitude</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.0001"
                        value={field.value ?? ""}
                        onChange={(e) =>
                          field.onChange(
                            e.target.value === "" ? "" : Number(e.target.value)
                          )
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Destination */}
          <div className="border rounded-lg p-6 space-y-4 bg-white shadow-sm">
            <h3 className="font-semibold text-lg">Destination</h3>

            <FormField
              control={form.control}
              name="destination.address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-500">
                    Destination Address
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter destination address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="destination.coords.lat"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500">Latitude</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.0001"
                        value={field.value ?? ""}
                        onChange={(e) =>
                          field.onChange(
                            e.target.value === "" ? "" : Number(e.target.value)
                          )
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="destination.coords.lng"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500">Longitude</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.0001"
                        value={field.value ?? ""}
                        onChange={(e) =>
                          field.onChange(
                            e.target.value === "" ? "" : Number(e.target.value)
                          )
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Fare */}
          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <FormField
              control={form.control}
              name="fare"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fare</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      value={field.value ?? ""}
                      onChange={(e) =>
                        field.onChange(
                          e.target.value === "" ? "" : Number(e.target.value)
                        )
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold px-6 py-3 w-full  mt-4 rounded-xl shadow-lg hover:from-orange-500 hover:to-orange-700 hover:scale-105 transition-transform duration-300"
          >
            Request Ride
          </Button>
        </form>
      </Form>
    </div>
  );
}
