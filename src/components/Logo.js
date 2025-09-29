export default function Logo({ withLink, link = "/" }) {
  if (withLink) {
    return (
      <a href={link}>
        <div className="aspect-video w-full overflow-hidden">
          <img src="/logo.svg" className="h-8 w-auto object-cover" />
        </div>
      </a>
    );
  } else {
    return (
      <div className="aspect-video w-full overflow-hidden">
        <img src="/logo.svg" className="h-8 w-auto object-cover" />
      </div>
    );
  }
}
