import { baseApi } from "../../baseApi";

export const driverApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // 👤 Get driver profile
    getDriverProfile: builder.query({
      query: () => ({
        url: "/driver/me",
        method: "GET",
      }),
      providesTags: ["DRIVER"],
      transformResponse: (response) => response.data,
    }),

    // 🧾 Send request for approval
    requestForApprove: builder.mutation({
      query: (approvalData) => ({
        url: "/driver/approveRequest",
        method: "POST",
        body: approvalData,
      }),
      invalidatesTags: ["DRIVER"],
    }),

    // 🚕 Accept ride
    acceptRide: builder.mutation({
      query: (id) => ({
        url: `/driver/accept/${id}`,
        method: "POST",
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
    cancelRide: builder.mutation({
      query: (id) => ({
        url: `/driver/cancel/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["DRIVER"],
    }),

    // 🔄 Update driver status (e.g., Active/Inactive)
    updateStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/driver/status/${id}`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["DRIVER"],
    }),

    // 🟢 Set availability
    setAvailability: builder.mutation({
      query: (availabilityData) => ({
        url: "/driver/availability",
        method: "PATCH",
        body: availabilityData,
      }),
      invalidatesTags: ["DRIVER"],
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
  useGetDriverProfileQuery,
  useRequestForApproveMutation,
  useAcceptRideMutation,
  useCompleteRideMutation,
  useCancelRideMutation,
  useUpdateStatusMutation,
  useSetAvailabilityMutation,
  useViewEarningsQuery,
} = driverApi;
