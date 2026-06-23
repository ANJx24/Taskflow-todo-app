import { useState } from "react";

export default function TaskForm({
  addTask
}) {
  const [title, setTitle] =
    useState("");

  const [date, setDate] =
    useState("");

  const [time, setTime] =
    useState("");

  const [priority, setPriority] =
    useState("Medium");

  const submitTask = () => {
    if (!title.trim()) return;

    addTask({
      id: Date.now(),
      title,
      date,
      time,
      priority,
      completed: false
    });

    setTitle("");
    setDate("");
    setTime("");
    setPriority("Medium");
  };

  return (
    <div className="form">

      <input
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        placeholder="Task name"
      />

      <input
        type="date"
        value={date}
        onChange={(e) =>
          setDate(e.target.value)
        }
      />

      <input
        type="time"
        value={time}
        onChange={(e) =>
          setTime(e.target.value)
        }
      />

      <select
        value={priority}
        onChange={(e) =>
          setPriority(e.target.value)
        }
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button onClick={submitTask}>
        Add Task
      </button>

    </div>
  );
}