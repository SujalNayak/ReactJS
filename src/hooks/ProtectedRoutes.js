import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { LoginUser } from '../components/Login';

const useAuth = () => {
  const [isAuth, setisAuth] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setisAuth(true);
    }
  }, []);

  return isAuth;
};

const ProtectedRoutes = () => {
  const auth = useAuth();
  return auth == true ? <Outlet /> : <LoginUser />;
};
export default ProtectedRoutes;