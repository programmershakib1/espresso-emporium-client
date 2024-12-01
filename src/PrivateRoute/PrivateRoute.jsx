import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <div>
            <span className="loading loading-infinity loading-lg text-primary"></span>
        </div>
    }

    if(user && user?.email){
        return children;
    }

    return (
        <Navigate to="/signIn"></Navigate>
    );
};

export default PrivateRoute;