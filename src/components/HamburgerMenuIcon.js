export default function HamburgerMenuIcon({ isMenuOpen, setIsMenuOpen }) {
  return (
    <button
      className="z-100 md:hidden"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <img src="/hamburger_menu.svg" className="h-8 w-auto object-cover" />
    </button>
  );
}
