import {
  Pencil,
  Trash2,
  Check
} from "lucide-react";

export default function TaskCard({
  task,
  toggleTask,
  deleteTask,
  editTask
}) {
  return (
    <div
      className={`task-card ${task.priority.toLowerCase()}`}
    >
      <div>

        <h3
          style={{
            textDecoration:
              task.completed
                ? "line-through"
                : "none"
          }}
        >
          {task.title}
        </h3>

        <p>
          📅 {task.date || "No Date"}
        </p>

        <p>
          🕒 {task.time || "No Time"}
        </p>

        <p>
          Priority:
          {" "}
          {task.priority}
        </p>

      </div>

      <div className="actions">

        <button
          onClick={() =>
            toggleTask(task.id)
          }
        >
          <Check size={18} />
        </button>

        <button
          onClick={() =>
            editTask(task.id)
          }
        >
          <Pencil size={18} />
        </button>

        <button
          onClick={() =>
            deleteTask(task.id)
          }
        >
          <Trash2 size={18} />
        </button>

      </div>
    </div>
  );
}