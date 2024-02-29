import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
// import { GetUserProfile } from "../api/common/auth";
export const PrivateRouterOutlet = ({
  outlet,
  authenticationPath,
  prevPath,
}: PrivateRouteProps) => {
  const { token, user, accessToken } = useAuthStore();

  if (user && token && accessToken) return outlet;
  console.log(prevPath, "SDFSDFDSFD");

  const location = useLocation();
  const prev = token ? "" : location?.pathname;
  return (
    <Navigate
      to={{
        pathname: authenticationPath,
      }}
      state={{ prev }}
      replace
    />
  );
};

export type PrivateRouteProps = {
  authenticationPath?: string;
  prevPath?: string;
  outlet?: JSX.Element;
};
