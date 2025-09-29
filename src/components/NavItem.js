export default function NavItem({ text, title, href, active, onClick }) {
  return (
    <li className={`${active ? "active" : ""}`} onClick={onClick}>
      <a href={href} title={title ? title : ""}>
        {text}
      </a>
    </li>
  );
}
