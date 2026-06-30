import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  console.log("isAuthenticated:", isAuthenticated);

  if (!isAuthenticated) {
    console.log("Redirecting...");
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;