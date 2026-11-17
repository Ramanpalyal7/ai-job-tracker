import { useState } from "react";
import { useAuth } from "./useAuth";
import { useNavigate  } from "react-router";
// import { Dashboard } from "../../pages/Dashboard";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  //
  const { signUp } = useAuth();

  // navigate after successfull signup
  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();
    setError(null);
    
    try {
      setLoading(true);

      const { error } = await signUp(email, password);
       if (error) {
      setError(error.message);

    }
    else{
        navigate("/dashboard");
    }
      
    }
     catch (error)
    {
        setError(error.message);
        // console.log("Error is : " + error);
      
    } 
    
    finally
    {
      setLoading(false);
      
    }
  

  };

  return (
    <div className="bg-gray-300 mt-5 flex flex-col gap-4 items-center">
     <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
    Create Your Account
  </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 justify-around items-start text-gray-500 mt-2 text-sm"
      >
        <p>enter your details to get started</p>
        <label htmlFor="email">
          <p>Email</p>

          <input
            type="email"
            id="email"
            required
            className="border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="password">
          <p>Password</p>

          <input
            type="password"
            id="password"
            required
            className="border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {error && <p className="text-red-600">{error}</p>}
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer mb-5"
            type="submit"
            disabled={loading}
          >
            {loading ? "Creating account .... " : "Submit"}
          </button>      
      </form>
  
    </div>
  );
};

export default SignupForm;
