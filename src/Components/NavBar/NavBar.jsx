import { NavLink } from "react-router-dom";
import Banner from "../Banner/Banner";
const NavBar = () => {
    // const links = <>
    // <li> <NavLink to="/">Home</NavLink></li>
    // <li> <NavLink to="/Statistic">Statistic</NavLink></li>
    // <li> <NavLink to="/Dashboard">Dashboard</NavLink></li>
    //   </>
    return (
        <div className=" bg-pink-500 h-auto mx-auto">
        <div className="navbar text-white">

           <div className="navbar-start">
             <a className="btn btn-ghost font-bold text-2xl">Gadget Heaven</a>
           </div>

         <div className="navbar-center  lg:flex ">
             <ul className="menu menu-horizontal px-1 text-lg">
               <li><a>Home</a></li>
               <li><a>Statistic</a></li>
               <li><a>Dashboard</a></li>
            </ul>
         </div>

         <div className="navbar-end">
          <a className="btn">Button</a>
         </div>
       </div>
       <div>
          <Banner></Banner>
       </div>
       
   </div>
    );
};

export default NavBar;