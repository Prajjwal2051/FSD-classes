import { Component } from "react";

// TaskItem must be a function component that only receives props (the task and two handlers)
export function TaskItem({ task, onToggle, onDelete, toggleTask, deleteTask }) {
  const handleToggle = onToggle || toggleTask;
  const handleDelete = onDelete || deleteTask;

  return (
    <li
      onClick={() => handleToggle && handleToggle(task.id)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 14px",
        margin: "8px 0",
        backgroundColor: "#f9f9f9",
        border: "1px solid #e0e0e0",
        borderRadius: "6px",
        cursor: "pointer",
        userSelect: "none"
      }}
    >
      <span
        style={{
          textDecoration: task.done ? "line-through" : "none",
          color: task.done ? "#888888" : "#222222",
          flex: 1,
          wordBreak: "break-word"
        }}
      >
        {task.text}
      </span>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          if (handleDelete) {
            handleDelete(task.id);
          }
        }}
        style={{
          marginLeft: "12px",
          padding: "5px 12px",
          backgroundColor: "#ff4d4f",
          color: "#ffffff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: 500
        }}
      >
        Delete
      </button>
    </li>
  );
}

// App must be a class component that holds the state (text and tasks)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      tasks: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInputChange(e) {
    this.setState({ text: e.target.value });
  }

  handleAddTask(e) {
    if (e) e.preventDefault();
    const trimmedText = this.state.text.trim();
    // Do not add empty tasks
    if (!trimmedText) return;

    const newTask = {
      id: Date.now(),
      text: trimmedText,
      done: false
    };

    // Use setState, never change this.state directly
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask],
      text: ""
    }));
  }

  handleToggle(id) {
    // Clicking a task marks it done (strike-through). Clicking it again undoes it.
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    }));
  }

  handleDelete(id) {
    // Each task has a Delete button
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id)
    }));
  }

  render() {
    const totalTasks = this.state.tasks.length;
    const completedTasks = this.state.tasks.filter((t) => t.done).length;

    return (
      <div style={{ maxWidth: "450px", margin: "40px auto", fontFamily: "sans-serif", padding: "20px" }}>
        <h2>To-Do App</h2>

        {/* Input box and Add button */}
        <form onSubmit={this.handleAddTask} style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
          <input
            type="text"
            placeholder="Add a new task..."
            value={this.state.text}
            onChange={this.handleInputChange}
            style={{
              flex: 1,
              padding: "8px 12px",
              fontSize: "15px",
              border: "1px solid #ccc",
              borderRadius: "4px"
            }}
          />
          <button
            type="submit"
            style={{
              padding: "8px 16px",
              fontSize: "15px",
              backgroundColor: "#1677ff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            Add
          </button>
        </form>

        {/* If there are no tasks, show "No tasks yet. Add one!". Otherwise show counter and list */}
        {totalTasks === 0 ? (
          <p style={{ color: "#666", fontStyle: "italic" }}>No tasks yet. Add one!</p>
        ) : (
          <>
            {/* Show a counter: "2 of 5 tasks done" */}
            <p style={{ fontWeight: "bold", margin: "12px 0" }}>
              {completedTasks} of {totalTasks} tasks done
            </p>
            {/* Render the list with .map() and a key */}
            <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
              {this.state.tasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onToggle={this.handleToggle}
                  onDelete={this.handleDelete}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}

export default App;

