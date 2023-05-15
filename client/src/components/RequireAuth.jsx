import { useLocation, Navigate, Outlet} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useStateContext } from "../context/ContextProvider";
import { useState } from "react";

const RequireAuth = () => {
    // const {auth} = useAuth();
    // const [auth, setAuth] = useState(false) 
    const {auth, setAuth} = useStateContext();
    setAuth(localStorage.getItem('auth'))
    const location = useLocation();

    return (
        auth
            ? <Outlet />
            : <Navigate to="/login" state={{from: location}} replace />
    )
}

export default RequireAuth;