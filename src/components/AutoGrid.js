export default function AutoGrid({ minSize = "250px", children }) {
  const gridClass = `grid grid-cols-[repeat(auto-fit,minmax(min(${minSize},100%),1fr))] gap-4`;

  return <div className={gridClass}>{children}</div>;
}
