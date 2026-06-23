import { useState, useEffect } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [priority, setPriority] = useState("Medium");

  useEffect(() => {
    const savedTasks =
      JSON.parse(localStorage.getItem("tasks")) || [];

    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  const addTask = () => {
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      date,
      time,
      priority,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    setTitle("");
    setDate("");
    setTime("");
    setPriority("Medium");
  };

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  const editTask = (id) => {
    const updatedTitle = prompt(
      "Edit Task",
      tasks.find((t) => t.id === id)?.title
    );

    if (!updatedTitle) return;

    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              title: updatedTitle,
            }
          : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) =>
    task.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks =
    totalTasks - completedTasks;

  const productivity =
    totalTasks === 0
      ? 0
      : Math.round(
          (completedTasks / totalTasks) * 100
        );

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          TaskFlow
        </div>

      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>
            Organize Your Work &
            Life Efficiently
          </h1>

          <p>
            Stay productive and manage
            all your daily tasks in one place.
          </p>

          <div className="hero-buttons">
            <input
              type="text"
              placeholder="Task Name"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              style={{
                padding: "14px",
                borderRadius: "12px",
                border: "none",
                minWidth: "220px",
              }}
            />

            <input
              type="date"
              value={date}
              onChange={(e) =>
                setDate(e.target.value)
              }
              style={{
                padding: "14px",
                borderRadius: "12px",
                border: "none",
              }}
            />

            <input
              type="time"
              value={time}
              onChange={(e) =>
                setTime(e.target.value)
              }
              style={{
                padding: "14px",
                borderRadius: "12px",
                border: "none",
              }}
            />

            <select
              value={priority}
              onChange={(e) =>
                setPriority(e.target.value)
              }
              style={{
                padding: "14px",
                borderRadius: "12px",
                border: "none",
              }}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>

            <button
              className="primary-btn"
              onClick={addTask}
            >
              Add Task
            </button>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stat-card">
          <h2>{totalTasks}</h2>
          <p>Total Tasks</p>
        </div>

        <div className="stat-card">
          <h2>{completedTasks}</h2>
          <p>Completed</p>
        </div>

        <div className="stat-card">
          <h2>{pendingTasks}</h2>
          <p>Pending</p>
        </div>

        <div className="stat-card">
          <h2>{productivity}%</h2>
          <p>Productivity</p>
        </div>
      </section>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      <section className="tasks">
        <h2>My Tasks</h2>

        {filteredTasks.length === 0 ? (
          <div className="task-card">
            <h3>
              🎉 No tasks found
            </h3>
          </div>
        ) : (
          filteredTasks.map((task) => (
            <div
              key={task.id}
              className="task-card"
            >
              <div>
                <h3
                  style={{
                    textDecoration:
                      task.completed
                        ? "line-through"
                        : "none",
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

                <br />

                <span
                  className={`priority ${task.priority.toLowerCase()}`}
                >
                  {task.priority}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                <button
                  className="primary-btn"
                  onClick={() =>
                    toggleTask(task.id)
                  }
                >
                  {task.completed
                    ? "Undo"
                    : "Done"}
                </button>

                <button
                  className="primary-btn"
                  onClick={() =>
                    editTask(task.id)
                  }
                >
                  Edit
                </button>

                <button
                  className="primary-btn"
                  onClick={() =>
                    deleteTask(task.id)
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
           </section>

      <footer className="footer">
        <div className="footer-content">

          <div className="footer-left">
            <h2>TaskFlow</h2>

            <p>
              A modern task management application built
              using React.js to help users organize tasks,
              manage deadlines and improve productivity.
            </p>

            <p className="author">
              Author: <strong>Anuj Jha</strong>
            </p>
          </div>

          <div className="footer-links">
            <h3>Connect</h3>

            <a
              href="https://github.com/ANJx24"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/jha-anuj/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:anujjha2412@gmail.com">
              Email
            </a>
          </div>

          <div className="footer-links">
            <h3>Tech Stack</h3>

            <p>React.js</p>
            <p>JavaScript</p>
            <p>CSS3</p>
            <p>Local Storage</p>
          </div>

        </div>

        <div className="footer-bottom">
          © 2026 TaskFlow • Built by Anuj Jha
        </div>
      </footer>

    </div>
  );
}