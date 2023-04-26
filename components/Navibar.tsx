import NavbarItem from "./NavbarItem";
import { BsChevronDown } from "react-icons/bs";
import MobileMenu from "./MobileMenu";
import { useState, useCallback } from "react";

const Navibar = () => {
 const [showMobileMenu, setShowMobileMenu] = useState(false);

 const toggleMobileMenu = useCallback(() => {
  setShowMobileMenu((current) => !current);
 }, [showMobileMenu]);
 return (
  <nav className="w-full fixed z-40">
   <div className="px-4 md:px16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-90">
    <img className="h-4 lg:h-7" src="/images/logo.png" alt="netflix logo" />
    <ul className="flex-row ml-8 gap-7 hidden lg:flex">
     <NavbarItem label="Home" />
     <NavbarItem label="TV Shows" />
     <NavbarItem label="Movies" />
     <NavbarItem label="New & Popular" />
     <NavbarItem label="My List" />
     <NavbarItem label="Browse by Languages" />
    </ul>
    <div
     onClick={toggleMobileMenu}
     tabIndex={0}
     className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
    >
     <p className="text-white text-sm"> Browse</p>
     <BsChevronDown className="text-white transition" />
     <MobileMenu visible={showMobileMenu} />
    </div>
   </div>
  </nav>
 );
};
export default Navibar;
