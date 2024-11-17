import { NavLink } from "react-router-dom";
import Banner from "../Banner/Banner";

const NavBar = () => {
    const links= <>
        <li><NavLink to="/">Home</NavLink></li>

        <li><NavLink to="static">Statistic</NavLink></li>
        <li><NavLink to="dashboard">Dashboard</NavLink></li>
    
    </>

    
    return (
        <div className=" bg-pink-500 h-auto mx-auto">
          <div className="navbar text-white">

           <div className="navbar-start">
             <a className="btn btn-ghost font-bold text-2xl">Gadget Heaven</a>
           </div>

          <div className="navbar-center  lg:flex ">
              <ul className="menu menu-horizontal px-1 text-lg">
              {links}
             </ul>
          </div>

            <div className="navbar-end">
             <a className="btn">Button</a>
            </div>
         </div>
     </div>
    );
};

export default NavBar;