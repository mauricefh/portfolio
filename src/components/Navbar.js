export default function Navbar() {
  return (
    <nav className="py-8">
      <div className="flex justify-between">
        <div>
          <h1 className="font-family-display text-3xl text-primary">
            Mauricefh
          </h1>
        </div>
        <div className="flex gap-8 font-family-body text-xl text-foreground">
          <a className="" href="#about">
            About
          </a>
          <a className="" href="#projects">
            Projects
          </a>
          <a className="" href="#hobbies">
            Hobbies
          </a>
          <a className="" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
