import links from "../constants/navigation.json";
import NavItem from "./NavItem";
import Logo from "./Logo";

export default function NavbarMobile({
  isMenuOpen,
  setIsMenuOpen,
  leftAlign = true,
}) {
  const staticClasses = `fixed top-0 ${leftAlign ? "left-0" : "right-0"} h-full w-full bg-background shadow-xl z-50 transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center gap-6 p-8`;
  const dynamicClass = isMenuOpen
    ? "translate-x-0"
    : `${leftAlign ? "-translate-x-full" : "translate-x-full"}`;
  return (
    <nav
      id="mobile-nav-menu" // Added for accessibility (aria-controls)
      className={`${staticClasses} ${dynamicClass}`}
    >
      <Logo withLink={true} />
      <ul className="flex flex-col items-center gap-6 p-8">
        {links.map((link) => {
          return (
            <NavItem
              key={link.id}
              text={link.text}
              href={link.href}
              // Add an onClick handler to close the menu when a link is tapped
              onClick={() => setIsMenuOpen(false)}
            />
          );
        })}
      </ul>
      {/* Optional: Add a backdrop/overlay here to close the menu on tap outside */}
    </nav>
  );
}
