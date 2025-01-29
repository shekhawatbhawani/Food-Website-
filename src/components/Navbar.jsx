import { Link } from "react-router-dom";
import { LOGO } from "../../Common/Constant";
import { useState } from "react";
import { GiKnifeFork } from "react-icons/gi";

const Navbar = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);


  const toggel = ()=>{
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="bg-gray-800 text-white shadow-lg lg:flex md:flex justify-between py-4 px-10">



      {/* navbar is open to laptop */}

      <div className="flex gap-2 pb-1 text-center align-middle text-3xl">
      <GiKnifeFork className="text-red-500 font-bold" /> Food
      </div>
      {/* <img src={LOGO} alt="" className="w-14 rounded-lg "/> */}
      {/* toggel menu open is phone only  */}

     <button className="bg-white lg:hidden md:hidden" onClick={toggel}>
      {setMenuOpen ? "✕" : "☰"}
     </button>
      <ul className=" lg:flex lg:gap-20 lg:text-xl md:flex md:gap-20 md:text-2xl hidden">
        <li className="hover:underline cursor-pointer hover:text-red-500">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:underline cursor-pointer hover:text-red-500">About</li>
        <li className="hover:underline cursor-pointer hover:text-red-500">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="hover:underline cursor-pointer hover:text-red-500">
          <Link to="/sig-in">Sig in</Link>
        </li> 
      </ul>
    { menuOpen && (
      <ul className="lg:hidden flex gap-20 text-2xl">
        <li className="hover:underline cursor-pointer hover:text-red-500">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:underline cursor-pointer hover:text-red-500">About</li>
        <li className="hover:underline cursor-pointer hover:text-red-500">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="hover:underline cursor-pointer hover:text-red-500">
          <Link to="/sig-in">Sig in</Link>
        </li>
      </ul>
    )}
    </nav>
  );
};

export default Navbar;
