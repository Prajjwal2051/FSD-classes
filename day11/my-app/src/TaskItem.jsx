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

export default TaskItem;

