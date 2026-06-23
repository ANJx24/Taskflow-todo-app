export default function Stats({ tasks }) {
  const total = tasks.length;

  const completed =
    tasks.filter((t) => t.completed)
      .length;

  const pending =
    total - completed;

  const progress =
    total === 0
      ? 0
      : Math.round(
          (completed / total) * 100
        );

  return (
    <div>
      <div className="stats">

        <div className="stat-card">
          <h3>{total}</h3>
          <p>Total</p>
        </div>

        <div className="stat-card">
          <h3>{completed}</h3>
          <p>Completed</p>
        </div>

        <div className="stat-card">
          <h3>{pending}</h3>
          <p>Pending</p>
        </div>

      </div>

      <div className="progress-wrapper">
        <div
          className="progress-fill"
          style={{
            width: `${progress}%`
          }}
        />
      </div>

      <p className="progress-text">
        {progress}% Complete
      </p>
    </div>
  );
}