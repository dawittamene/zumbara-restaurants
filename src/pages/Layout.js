import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className=" bg-slate-900 py-5 text-white justify-around flex">

        <div>
          <div>
            
          </div>
          Zumbara Restaurant
        </div>
        <div className=" font-[popins] font-medium">
          <ul className=" flex ml-2">
            <li className=" ml-3">
              <Link to="/">Home</Link>
            </li>
            <li className=" ml-3">
              <Link to="/services">Services</Link>
            </li>
            <li className=" ml-3">
              <Link to="/contact">Contact</Link>
            </li>
            <li className=" ml-3">
              <Link to="/testimonial">Testimonial</Link>
            </li>
          </ul>
          </div>
        </nav>
     

      <Outlet />
      
    </>
  )
};

export default Layout;