export default function Sidebar({
  currentFilter,
  setCurrentFilter
}) {
  const filters = [
    "All",
    "Completed",
    "Pending",
    "High",
    "Medium",
    "Low"
  ];

  return (
    <aside className="sidebar">
      <h2>🦇 Gotham Tasks</h2>

      {filters.map((item) => (
        <button
          key={item}
          className={
            currentFilter === item
              ? "sidebar-btn active"
              : "sidebar-btn"
          }
          onClick={() =>
            setCurrentFilter(item)
          }
        >
          {item}
        </button>
      ))}
    </aside>
  );
}