import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.svg"
import { FaSearch } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";
import FotterSection from "../component/FotterSection";


const Layout = () => {
  return (
    <>
    <div class="w-full text-center p-2 bg-[#00A736] text-white font-medium">
      Free Shipping On $200 Shopping
    </div>
    <div class="w-full grid grid-cols-3 gap-4 border-b border-[#00000033]">
      <div >
      <img src={logo}/>
      </div>
      <nav class="my-auto">
        <ul class="grid grid-cols-5 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/Aboutus">About us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact us</Link>
          </li>
        </ul>
      </nav>
      <div class="flex gap-3 mx-auto my-auto">
        <FaSearch size={24} />
        <RiShoppingBagLine size={24} />
      </div>
      </div>

      <Outlet />

      <FotterSection />
    </>
  )
};

export default Layout;
