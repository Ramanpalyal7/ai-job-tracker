import { Link } from "react-router"
function Login() {

  return (
    <div>
    <h2 className='bg-red-300 text-4xl'>Login Page</h2>

    <Link to ="/signup" > Create an account  </Link>

    </div>
  )
}

export default Login
