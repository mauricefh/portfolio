export default function Container({ children, className = "" }) {
  return (
    <div className={`${className} container mx-auto px-4`}>{children}</div>
  );
}
