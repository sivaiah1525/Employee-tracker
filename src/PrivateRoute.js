import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  // const isAuth = localStorage.getItem("auth");
  const isAuth = true
  window.alert(children)

  return isAuth ? children : <Navigate to="/login" replace />;
}
