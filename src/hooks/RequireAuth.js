import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Progress from "../components/Progress";
import useAuthState from "../components/useAuthState";

const RequireAuth = ({ children }) => {
  const {user, loading} = useAuthState();
  const location = useLocation();

  if (loading) {
    return <Progress />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default RequireAuth;