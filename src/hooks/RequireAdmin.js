
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Progress from "../components/Progress";
import useAuthState from "../components/useAuthState";

const RequireAdmin = ({ children }) => {
  const {user,isAdmin, loading} = useAuthState();
  const location = useLocation();

  if (loading) {
    return <Progress />;
  }

  if (!user || !isAdmin) {
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default RequireAdmin;