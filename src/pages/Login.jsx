import { Link } from "react-router"
import LoginForm from "../features/auth/LoginForm"
function Login() {

  return (
    <div>
    <h2 className='bg-red-300 text-4xl'>Login Page</h2>


    <LoginForm/>

    <Link to ="/signup" > Create an account  </Link>

    </div>
  )
}

export default Login
