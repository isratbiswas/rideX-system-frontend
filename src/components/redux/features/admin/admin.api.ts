import type { IUser } from "@/types";
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
    // users
    getAllUsers: builder.query({
      query: ({ role }) => ({
        url: "/user/all-users",
        params: { role },
        method: "GET",
      }),
      providesTags: ["USER"],
      transformResponse: (response: { data: IUser[] }) => response.data,
    }),
    // ✅ Approve driver
    approveDriver: builder.mutation({
      query: (driverId) => ({
        url: `/admin/approve/${driverId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["DRIVER"],
    }),

    // ❌ Reject driver
    suspendDriver: builder.mutation({
      query: (driverId) => ({
        url: `/admin/suspend/${driverId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["DRIVER"],
    }),

    // 🚫 Block user (rider or driver)
    blockUser: builder.mutation({
      query: (userId) => ({
        url: `/admin/block/${userId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["USER"],
    }),
    unBlockUser: builder.mutation({
      query: (userId) => ({
        url: `/admin/unblock/${userId}`,
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
  useSuspendDriverMutation,
  useBlockUserMutation,
  useUnBlockUserMutation,
  useGetAllUsersQuery,
} = adminApi;
