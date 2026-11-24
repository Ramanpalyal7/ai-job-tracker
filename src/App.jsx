import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import './App.css'
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Layout from "./Layout/Layout";
import Signup from "./pages/Signup";
import ProtectedRoute from "./features/auth/ProtectedRoute";

function App() {

const router = createBrowserRouter(
    [
      {
        path:"/",
        element:<Layout/>,
        children:[
          {
            index:true,
            element:<Navigate to="/dashboard" replace />
          },
          {
            path:"/dashboard",
            element:
            (<ProtectedRoute> 
            <Dashboard/>
              </ProtectedRoute>)
          },
          { // may be it known as wildcard path as user got to any unkown path will get navigate to this not found page . 
            path:"*",
            element:<NotFound/>
          }
        ],

      },
      {   
            path:"/login",
            element:<Login/>
     },

      {
        path:"/signup",
        element:<Signup/>
      }

    ]
  )
  
// console.log(import.meta.env.VITE_SUPABASE_URL);
  return (
  <>

    <RouterProvider router={router}/>
    

  </>
  )
}
export default  App;
