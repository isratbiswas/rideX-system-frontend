import { baseApi } from "../../baseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // 👀 Get all pending driver accounts
    getPendingDrivers: builder.query({
      query: () => ({
        url: "/admin/pending",
        method: "GET",
      }),
      providesTags: ["ADMIN"],
      transformResponse: (response) => response.data,
    }),

    // 📊 Analytics overview for dashboard
    getAnalyticsOverview: builder.query({
      query: () => ({
        url: "/admin/analytics/overview",
        method: "GET",
      }),
      providesTags: ["ADMIN", "ANALYTICS"],
      transformResponse: (response) => response.data,
    }),

    // ✅ Approve driver
    approveDriver: builder.mutation({
      query: (id) => ({
        url: `/admin/approve/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["DRIVER"],
    }),

    // ❌ Reject driver
    rejectDriver: builder.mutation({
      query: (id) => ({
        url: `/admin/reject/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["DRIVER"],
    }),

    // 🚫 Block user (rider or driver)
    blockUser: builder.mutation({
      query: (id) => ({
        url: `/admin/block/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["USER"],
    }),
  }),
});

export const {
  useGetPendingDriversQuery,
  useGetAnalyticsOverviewQuery,
  useApproveDriverMutation,
  useRejectDriverMutation,
  useBlockUserMutation,
} = adminApi;
