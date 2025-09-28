export default function NavItem({ text, title, href, active }) {
  return (
    <li className={`${active ? "active" : ""}`}>
      <a href={href} title={title ? title : ""}>
        {text}
      </a>
    </li>
  );
}
