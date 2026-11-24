import { useState } from "react";
import {  useNavigate } from "react-router";
import { useAuth } from "../features/auth/useAuth";



function Dashboard() {

  const[error,setError] = useState(null);
    const[loading,setLoading] = useState(false);

  const{user , logOut} = useAuth();
  const navigate = useNavigate();

  const logOutFun = async()=>{

    setError(null);
          
    try {
        setLoading(true);

   const { error :authError } = await logOut();
   if (authError) {
      setError("Unable to log out. Please try again.");

    }
    else{
      navigate("/login");
    }
      
    }
     catch (err)
    {
      console.error("LogOut failed unexpectedly:", err); // for  the developer
      setError("Something went wrong. Please try again."); 
      
      
    } 
    
    finally
    {  console.log(user);
      setLoading(false);
      
    }
  
  }

  return (
    <div 
    className="flex justify-between items-center"
    >
       <h2 className='bg-blue-300 text-4xl'>Dashboard</h2>

       <div>

       <p> User : {user?.email}</p>
       
       <button
       onClick={logOutFun}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer mb-5"
        disabled={loading}
       >
        {loading ?"Logging Out....":"Logout"}
      </button>
      {error && <p className="text-red-500">{error}</p>}
       </div>

       </div>
  )
}

export default Dashboard

