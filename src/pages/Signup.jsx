import SignupForm from "../features/auth/SignupForm";
import { Link } from "react-router";

const Signup = () => {
  return (
    <div>
      <h2 className="mb-4">Signup Page </h2>
      <SignupForm />

   <Link to="/login" > Already have an account ?  click Login </Link>

    </div>
  );
};

export default Signup;
