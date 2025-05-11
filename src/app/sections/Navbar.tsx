import { useState } from "react";

import {
  navLinks,
  firstName,
  business,
  slogan,
} from "@/app/constants/index.ts";

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <a href={item.href} className="nav-li_a" onClick={onClick}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-black/90">
      <div className="mx-auto max-w-7xl">
        <div className="c-space mx-auto flex items-center justify-between py-5">
          <a
            href="/"
            className="text-xl font-bold text-neutral-400 transition-colors hover:text-white"
          >
            <div className="flex flex-col">
              <span>{business}</span>
              <span className="text-xs text-muted">{slogan}</span>
            </div>
          </a>

          <button
            onClick={toggleMenu}
            className="flex text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="h-6 w-6"
            />
          </button>

          <nav className="hidden sm:flex">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
