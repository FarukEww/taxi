import { Navigate, Route, Routes } from "react-router-dom";

import React, { Children } from "react";

import { PrivateRouteProps, PrivateRouterOutlet } from "./Privateroutes";
import { PublicRouterOutlet } from "./Publicroutes";

import PrivateAppLayout from "../layouts/PrivateAppLayout";
import { lazyImport } from "../utilities/lazyImport";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import register from "../pages/auth/register";
import login from "../pages/auth/login";
import enterOTP from "../pages/auth/enterOTP";
import enterMobileNum from "../pages/auth/enterMobileNum";
import TripHistory from "../pages/TripHistory";
// const { Home } = lazyImport(() => import("../pages/Home"), "Home");

const AppRouting = () => {
  return (
    <>
      <Routes>
        <Route key={""} path="/" Component={Home}></Route>

        <Route
          path="/"
          element={<PublicRouterOutlet {...defaultPublicRouteProps} />}
        >
          {/* here */}
          <Route path="/dashboard" Component={Dashboard}></Route>
          <Route path="/mytrips" Component={TripHistory}></Route>
          <Route path="/login" Component={login}></Route>
          <Route path="/entermobilenum" Component={enterMobileNum}></Route>
          <Route path="/register" Component={register}></Route>
          <Route path="/enterotp" Component={enterOTP}></Route>
        </Route>

        <Route
          path="/"
          element={
            <PrivateRouterOutlet
              {...defaultPrivateRouteProps}
              outlet={<PrivateAppLayout />}
            />
          }
        >
          {/* here */}
        </Route>
        <Route path="*" element={<Navigate to="/sign-in" />} />
      </Routes>
    </>
  );
};

export default AppRouting;

export const defaultPrivateRouteProps: Omit<PrivateRouteProps, "outlet"> = {
  authenticationPath: "/sign-in",
};

export const defaultPublicRouteProps: Omit<PrivateRouteProps, "outlet"> = {
  authenticationPath: "/",
};
