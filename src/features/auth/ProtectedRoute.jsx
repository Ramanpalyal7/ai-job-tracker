import { Navigate } from "react-router";
import { useAuth } from "./useAuth"

const ProtectedRoute = ({children}) =>{

    const { user,loading} = useAuth();

    if(loading)
    {
        return <p>Loading ....</p>;
    }

    if(!user)
    {
        return <Navigate to="/login" replace />;
    }

 

    return children ;  


}
export default ProtectedRoute;