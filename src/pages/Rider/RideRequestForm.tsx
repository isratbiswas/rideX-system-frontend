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

export default function RideRequestForm() {
  const [createRideRequest] = useCreateRideRequestMutation();
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
    console.log(data, "rid3");
    try {
      const result = await createRideRequest(data).unwrap();
      console.log(result);
      toast.success("Ride request created successfully");
      form.reset();
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error("Failed to create ride request");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Ride Request</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Pickup */}
          <div className="border rounded-lg p-4 space-y-4">
            <h3 className="font-semibold">Pickup</h3>

            <FormField
              control={form.control}
              name="pickup.address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pickup Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter pickup address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              {/* Pickup Latitude */}
              <FormField
                control={form.control}
                name="pickup.coords.lat"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Latitude</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.0001"
                        value={field.value ?? ""} // ← prevents NaN error
                        onChange={(e) => {
                          const v = e.target.value;
                          field.onChange(v === "" ? "" : Number(v));
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Pickup Longitude */}
              <FormField
                control={form.control}
                name="pickup.coords.lng"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Longitude</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.0001"
                        value={field.value ?? ""} // ← prevents NaN error
                        onChange={(e) => {
                          const v = e.target.value;
                          field.onChange(v === "" ? "" : Number(v));
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Destination */}
          <div className="border rounded-lg p-4 space-y-4">
            <h3 className="font-semibold">Destination</h3>

            <FormField
              control={form.control}
              name="destination.address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Destination Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter destination address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              {/* Destination Latitude */}
              <FormField
                control={form.control}
                name="destination.coords.lat"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Latitude</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.0001"
                        value={field.value ?? ""} // ← prevents NaN error
                        onChange={(e) => {
                          const v = e.target.value;
                          field.onChange(v === "" ? "" : Number(v));
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Destination Longitude */}
              <FormField
                control={form.control}
                name="destination.coords.lng"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Longitude</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.0001"
                        value={field.value ?? ""} // ← prevents NaN error
                        onChange={(e) => {
                          const v = e.target.value;
                          field.onChange(v === "" ? "" : Number(v));
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Fare */}
          <FormField
            control={form.control}
            name="fare"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fare</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    value={field.value ?? ""} // ← prevents NaN error
                    onChange={(e) => {
                      const v = e.target.value;
                      field.onChange(v === "" ? "" : Number(v));
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Request Ride
          </Button>
        </form>
      </Form>
    </div>
  );
}
