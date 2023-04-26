import React from "react";

interface NavbarItemProps {
 label: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label }) => {
 //react.FC enables us to pass props as defined above like in react to make label dynamic
 return (
  <li className="text-white cursor-pointer hover:text-gray-300 transition">
   <a href={`#${label}`}>{label}</a>
  </li>
 );
};
export default NavbarItem;
