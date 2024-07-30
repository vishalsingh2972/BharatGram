import * as React from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
// import { useNavigate } from "react-router-dom"; //can also use useNavigate instead of <Navigate> Component

interface IProtectedRoutesProps { }

const ProtectedRoutes: React.FunctionComponent<IProtectedRoutesProps> = (props) => {

  const isAuth: boolean = false;
  const location = useLocation();

  return isAuth ?
    (<Outlet />)
    :
    (
      <Navigate to="/login" state={{ from: location }} /> //The state prop in <Navigate /> allows you to pass additional data to the redirected component, In this case, we're passing the current location object to the login page. This information can be used on the login page to redirect the user back to the original page after he logins successfull.
    );
};

export default ProtectedRoutes;