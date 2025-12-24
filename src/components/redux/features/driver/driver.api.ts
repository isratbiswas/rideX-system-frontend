import { baseApi } from "../../baseApi";

export const driverApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //  Get driver profile
    GetDriverHistory: builder.query({
      query: () => ({
        url: "/driver/me",
        method: "GET",
      }),
      providesTags: ["DRIVER"],
      transformResponse: (response) => response.data,
    }),

    //get Ride request
    GetRideRequest: builder.query({
      query: () => ({
        url: "/driver/getRequest",
        method: "GET",
      }),
      providesTags: ["DRIVER"],
      transformResponse: (response) => response.data,
    }),

    //  Send request for approval
    requestForApprove: builder.mutation({
      query: () => ({
        url: "/driver/approveRequest",
        method: "POST",
      }),
      invalidatesTags: ["DRIVER"],
    }),

    // 🚕 Accept ride
    acceptRide: builder.mutation({
      query: (rideId) => ({
        url: `/driver/accept/${rideId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["DRIVER"],
    }),

    // ✅ Complete ride
    completeRide: builder.mutation({
      query: (id) => ({
        url: `/driver/completed/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["DRIVER"],
    }),

    // ❌ Cancel ride
    rejectRide: builder.mutation({
      query: (rideId) => ({
        url: `/driver/reject/${rideId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["DRIVER"],
    }),

    // 🔄 Update driver status (e.g., Active/Inactive)
    updateStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/driver/status/${id}`,
        method: "PATCH",
        data: { status },
      }),
      invalidatesTags: ["DRIVER"],
    }),

    // 🟢 Set availability
    setAvailability: builder.mutation({
      query: (availabilityStatus: "ONLINE" | "OFFLINE") => ({
        url: "/driver/availability",
        method: "PATCH",
        data: { availabilityStatus }, // { availabilityStatus: "ONLINE" }
      }),
      invalidatesTags: ["DRIVER", "USER"],
    }),
    // 💰 View driver earnings
    viewEarnings: builder.query({
      query: () => ({
        url: "/driver/earnings",
        method: "GET",
      }),
      providesTags: ["DRIVER"],
      transformResponse: (response) => response.data,
    }),
  }),
});

export const {
  useGetDriverHistoryQuery,
  useGetRideRequestQuery,
  useRequestForApproveMutation,
  useAcceptRideMutation,
  useCompleteRideMutation,
  useRejectRideMutation,
  useUpdateStatusMutation,
  useSetAvailabilityMutation,
  useViewEarningsQuery,
} = driverApi;
