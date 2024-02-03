import { Link } from "react-router-dom";
import { FaTimes, FaBars } from 'react-icons/fa';
import { useState } from "react";


function Navbar() {
    const [nav, setNav] = useState(false);

    return (
        <div className="flex justify-between h-20 bg-black text-white sticky w-full items-center">
            <div>
                <h1 className="pt-10 text-3xl -mt-10px md:text-5xl font-bold ml-2">Ahmed Alam</h1>
            </div>
            {/* Menu button for small screens */}
            <div className="absolute top-2 right-0 md:hidden">
                <button onClick={() => setNav(!nav)} className="text-gray-500  focus:outline-none">
                    {nav ? <FaTimes size={30}/> : <FaBars size={30} />}
                </button>
            </div>
            {/* Navigation links */}
            <div className={`pt-10  md:flex ${nav ? 'block' : 'hidden'} md:items-center`}>
                <ul className="mt-4 md:flex md:space-x-4">
                <NavItem to={'/'}>Home</NavItem>
                   
                    <NavItem to={'/portfolio'}>Portfolio</NavItem>
                    <NavItem to={'/certificates'}>Certificates</NavItem>
                    <NavItem to={'/contact'}>Contact</NavItem>
                    <NavItem className="   ">
<a href="/Ahmed Alam Jr.Mecahnical cv-2.pdf" download={'true'}  target="true" className="font-bold text-xl">CV  </a>
    </NavItem>
                    
                </ul>
            </div>
        </div>
    );
}

// NavItem component for navigation links
const NavItem = ({ to, children }) => (
    <li>
        <Link className="capitalize px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200" to={to}>{children}</Link>
    </li>
);

export default Navbar;
