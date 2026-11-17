import { Outlet } from "react-router"

const Layout = () => {
  return (
   <div>
      <header>
        <nav>
        <p>Navbar section</p>
        </nav>
      </header>
      <main className="h-max w-screen-full">
    <Outlet/>
      </main>
 
 <footer className="bg-gray-700 h-36 mt-122 w-full text-white  text-center ">
  
  <p>Footer</p>
  <p>Ai Job application Tracker <br /> Made with 💖 by Raman</p>

 </footer>
 
    </div>
  )
}

export default Layout
