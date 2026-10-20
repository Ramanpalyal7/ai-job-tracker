import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import './App.css'
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Layout from "./Layout/Layout";
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
            element:<Dashboard/>
          },
          {
            path:"/login",
            element:<Login/>
          },
          { // may be it known as wildcard path as user got to any unkown path will get navigate to this not found page . 
            path:"*",
            element:<NotFound/>
          }
        ]
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
