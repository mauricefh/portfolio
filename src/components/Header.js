import Navbar from "./Navbar";
export default function Header() {
  return (
    <header className="flex justify-between items-center mb-8">
      <a href="#">
        <img src="/logo.svg" className="pt-4" width={300} />
      </a>
      <Navbar />
    </header>
  );
}
