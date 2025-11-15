import { z } from "zod";

export const rideFormSchema = z.object({
  pickup: z.object({
    address: z.string().min(1, "Pickup address required"),
    coords: z.object({
      lat: z.number(),
      lng: z.number(),
    }),
  }),
  destination: z.object({
    address: z.string().min(1, "Destination address required"),
    coords: z.object({
      lat: z.number(),
      lng: z.number(),
    }),
  }),
  fare: z.number().min(0, "Fare must be positive"),
});

export type RideFormInput = z.infer<typeof rideFormSchema>;
