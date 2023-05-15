import { Link, NavLink } from "react-router-dom";
import logo from "../../../../assets/logo.svg";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const navItem = (
    <>
      <li >
        <Link to='/' className="px-3 text-lg font-semibold hover:text-theme-100 ease-in duration-300">
          Home
        </Link>
      </li>
      <li >
        <Link to='about' className="px-3 text-lg font-semibold hover:text-theme-100 ease-in duration-300">
          About
        </Link>
      </li>
      <li >
        <Link to='service' className="px-3 text-lg font-semibold hover:text-theme-100 ease-in duration-300">
          Service
        </Link>
      </li>
      <li >
        <Link to='blog' className="px-3 text-lg font-semibold hover:text-theme-100 ease-in duration-300">
          Blog
        </Link>
      </li>
      <li >
        <Link to='contact' className="px-3 text-lg font-semibold hover:text-theme-100 ease-in duration-300">
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar container mx-auto bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navItem}
          </ul>
        </div>
        <NavLink>
          <img className="md:w-24 w-18" src={logo} alt="" />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {navItem}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="mx-8">
          <button className="px-3 text-xl">
            <FaSearch></FaSearch>
          </button>
          <button className="px-3 text-xl">
            <FaShoppingCart></FaShoppingCart>
          </button>
        </div>
        <NavLink to="login">
          <label htmlFor="my-modal-3" className="btn normal-case btn-outline border-theme-100 text-theme-100 ease-in duration-300">Appointment</label>
        </NavLink>
        
        
      </div>
    </div>
  );
};

export default Navbar;
