import { Outlet } from "react-router"

const Layout = () => {
  return (
   <div>
      <header>
        <nav>
        <p>Navbar section</p>
        </nav>
      </header>
      <main className="h-max w-screen">
    <Outlet/>
      </main>
 
 <footer className="bg-gray-700 h-36 min-w-screen text-white  text-center">
  <p>Ai Job application Tracker <br /> Made with 💖 by Raman</p>
 </footer>
 
    </div>
  )
}

export default Layout
