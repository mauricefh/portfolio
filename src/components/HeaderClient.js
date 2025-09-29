"use client";
import { useState } from "react";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import HamburgerMenuIcon from "./HamburgerMenuIcon";
import Logo from "./Logo";

export default function HeaderClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuAlignLeft = false;

  return (
    <header className="flex justify-between items-center py-6 border-b border-gray-200">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="w-full flex justify-between items-center">
          <HamburgerMenuIcon
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
          <Logo withLink={true} />
        </div>
        <Navbar />
        <NavbarMobile isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </header>
  );
}
