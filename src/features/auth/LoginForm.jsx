import { useState } from "react"
import { useNavigate } from "react-router";
import { useAuth } from "./useAuth";


const LoginForm = () =>{

    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[error,setError] = useState(null);
    const[loading,setLoading] = useState(false);


    const navigate = useNavigate();

    const {logIn} = useAuth();

    const handleSubmit = async(e)=>{

        e.preventDefault();

            setError(null);
    try {
        setLoading(true);

        const { error :authError } = await logIn(email, password);
   if (authError) {
      setError("Invalid email or password.");

    }
    else{
        navigate("/dashboard");
    }
      
    }
     catch (err)
    {
      console.error("Login failed unexpectedly:", err); // for  the developer
      setError("Something went wrong. Please try again."); 
      
      
    } 
    
    finally
    {
      setLoading(false);
    
    }
  


    }


    return (
        <div className="bg-gray-300 mt-5 flex flex-col gap-4 items-center">
     <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
    Login in your Account
    </h1>

        <form 
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 justify-around items-start text-gray-500 mt-2 text-sm"
      >
            <p>Enter your details</p>

            <label htmlFor="email">
            <p>Email</p>
            <input 
            type="email" 
            id="email" 
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="rounded w-32 border  "
            />

            </label>

            <label htmlFor="password">
                <p>Password</p>
                <input 
                type="password" 
                id="password"
                required
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="rounded w-32 border  "
                />
            </label>
            {error && <p className="text-red-500 text-3xl">{error}</p>}
            <button
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer mb-5"
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in.... " : "Login"}

            </button>

        </form>

        </div>
    )

}
export default LoginForm;