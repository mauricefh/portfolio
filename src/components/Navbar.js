import NavItem from "./NavItem";
import links from "../constants/navigation.json";

export default function Navbar() {
  return (
    <nav className="hidden md:flex">
      <ul className="flex gap-6">
        {links.map((link) => {
          return (
            <NavItem
              key={link.id}
              text={link.text}
              title={link.title}
              href={link.href}
            />
          );
        })}
      </ul>
    </nav>
  );
}
