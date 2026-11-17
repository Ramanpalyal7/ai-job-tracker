import { createContext,  useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

// context is like universal state store

export const AuthContext = createContext(null);

export function AuthProvider  ({ children }) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  


  //------------- start

  // 1. Check existing session
  useEffect(() => {
    async function checkSession() {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.log("Error checking session : ", error);
      }

      setUser(data.session?.user ?? null);
      setLoading(false);
    }

    // 2. Listen for authentication changes

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // 3. Check existing session
    checkSession();

    // 4. Cleanup listener
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Authentication Functions
  
  
  // signUp for new user



  const signUp = async (email, password) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    return{error};

  };


  // login or signIn for existing users

  const login = async(email,password) =>{
  const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    return {error };
  }


  // logOut close current User Session

  const logOut = async ()=>{
    const {error} = await supabase.auth.signOut();

    return {error};
  }




  return(
   <AuthContext.Provider value={ { user, loading , signUp , login , logOut } }>
    {children}
    </AuthContext.Provider>
)
  //--------- end
};


 