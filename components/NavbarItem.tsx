import React from "react";

interface NavbarItemProps {
  label: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label }) => {
  return (
    <div
      className="text-white cursor-pointer hover:text-green-300
        transition hover:scale-110"
    >
      {label}
    </div>
  );
};

export default NavbarItem;
