import NavItem from "./NavItem";

export default function Navbar() {
  const links = [
    {
      id: 1,
      text: "About",
      title: "about",
      href: "#about",
    },
    {
      id: 2,
      text: "Projects",
      title: "projects",
      href: "#projects",
    },
    {
      id: 3,
      text: "Hobbies",
      title: "hobbies",
      href: "#hobbies",
    },
    {
      id: 4,
      text: "Contact",
      title: "contact",
      href: "#contact",
    },
  ];

  return (
    <nav>
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
