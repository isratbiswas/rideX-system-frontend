import { baseApi } from "../../baseApi";

export const rideApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // 🚗 Rider sends a ride request
    createRideRequest: builder.mutation({
      query: (rideData) => ({
        url: "/rider/request",
        method: "POST",
        data: rideData, // ✅ use "body", not "data"
      }),
      invalidatesTags: ["RIDER"], // ✅ use colon
    }),

    // 👤 Get current rider’s rides
    getMe: builder.query({
      query: () => ({
        url: "/rider/me",
        method: "GET",
      }),
      providesTags: ["RIDER"], // ✅ "providesTags" for GET
      transformResponse: (response) => response.data,
    }),

    // ❌ Rider cancels a request
    cancelRide: builder.mutation({
      query: ({ rideId }) => ({
        url: `/rider/cancel/${rideId}`, // ✅ dynamic id
        method: "PATCH",
      }),
      invalidatesTags: ["RIDER"],
    }),
  }),
});

export const {
  useCreateRideRequestMutation,
  useCancelRideMutation,
  useGetMeQuery,
} = rideApi;
