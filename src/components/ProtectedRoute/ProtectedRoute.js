import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRouteElement =  ({isLogined, children}) => {
    return isLogined ? children : <Navigate to="/" replace />
  }

export default ProtectedRouteElement; 