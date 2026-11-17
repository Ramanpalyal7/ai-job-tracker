
import { useAuth } from "../features/auth/useAuth";



function Dashboard() {

  const{user, loading} = useAuth();

  // console.log("loading details : "+loading);
  // console.log("User details : "+user);
  return (
    <div>
       <h2 className='bg-blue-300 text-4xl'>Dashboard</h2>
       <p>{user?.email}</p>
       
       

       </div>
  )
}

export default Dashboard

