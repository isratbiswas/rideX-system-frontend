import { useUserInfoQuery } from "@/components/redux/features/auth/auth.api";
import type { TRole } from "@/types";
import type { ComponentType } from "react";
import { Navigate } from "react-router";
export const withAuth = (Component: ComponentType, requiredRole?: TRole) => {
  console.log(requiredRole, "supar");
  return function AuthWrraper() {
    const { data, isLoading } = useUserInfoQuery(undefined);
    console.log(data, "vira");
    if (!isLoading && !data?.data?.email) {
      return <Navigate to="/login" />;
    }
    if (requiredRole && !isLoading && requiredRole !== data?.data?.role) {
      return <Navigate to="/unauthorized" />;
    }
    console.log("inside auth", data);
    return <Component />;
  };
};
