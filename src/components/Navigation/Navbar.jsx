import { Link, NavLink } from "react-router-dom";
import './nav.css'
const Navbar = () => {
   return (
      <div className="flex text-xl p-1 py-3 justify-between items-center sticky top-0 overflow-hidden bg-white shadow-md z-[1000]">
         <div>
            <Link to={'/'} className="md:text-3xl md:font-bold font-semibold text-sm">Book vibe</Link>
         </div>
         <div className="p-1">
            <NavLink className='sm:ms-3 ms-2 md:ms-8 md:p-2 p-1 text-xs sm:text-sm rounded md:text-xl' to={'/'}>Home</NavLink>
            <NavLink className='sm:ms-3 ms-2 md:ms-8 md:p-2 p-1 text-xs sm:text-sm rounded md:text-xl' to={'/listedBooks'}>Listed Books</NavLink>
            <NavLink className='sm:ms-3 ms-2 md:ms-8 md:p-2 p-1 text-xs sm:text-sm rounded md:text-xl' to={'/pages_to_read'}>Pages to Read</NavLink>
         </div>
         <div className="p-1 text-white flex">
            <Link to={'./signin'}><button type="button" className="bg-green-600 text-xs md:text-sm hidden md:inline-block p-1 md:p-2 rounded md:font-semibold">Sign in </button></Link>
            <Link to={'./signup'}><button type="button" className="bg-violet-500 text-xs md:text-sm p-1 md:p-2 rounded md:font-semibold ms-2">Sign up</button></Link>
         </div>
      </div>
   );
};

export default Navbar;