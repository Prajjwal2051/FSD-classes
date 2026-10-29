import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import { useState } from "react";

// Mock task data
const tasks = [
  { id: "1", title: "Learn React Basics", desc: "Study functional components, props, and hooks." },
  { id: "2", title: "Master React Router", desc: "Build single-page apps with dynamic routes and params." },
  { id: "3", title: "Complete College Lab", desc: "Submit all lab exercises for FSD-classes." }
];

// Navigation Menu
function Navigation() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "14px 20px", background: "#0f172a" }}>
      <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: 500 }}>Dashboard</Link>
      <Link to="/settings" style={{ color: "white", textDecoration: "none", fontWeight: 500 }}>Settings</Link>
      <Link to="/unknown" style={{ color: "#94a3b8", textDecoration: "none" }}>Test 404</Link>
    </nav>
  );
}

// 1. Dashboard Page
function Dashboard() {
  return (
    <div style={{ maxWidth: "600px", margin: "30px auto", padding: "20px" }}>
      <h2>Tasks Dashboard</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ margin: "10px 0", padding: "12px", background: "#f1f5f9", borderRadius: "6px" }}>
            <Link to={`/task/${task.id}`} style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>
              {task.title} →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 2. Task Details Page (dynamic route /task/:taskId)
function TaskDetails() {
  const { taskId } = useParams();
  const task = tasks.find((t) => t.id === taskId);

  if (!task) {
    return (
      <div style={{ maxWidth: "600px", margin: "30px auto", padding: "20px", color: "#dc2626" }}>
        <h2>Task Not Found</h2>
        <Link to="/" style={{ color: "#2563eb" }}>← Back to Dashboard</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "600px", margin: "30px auto", padding: "20px", background: "#fff", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
      <h2>Task Details (ID: {taskId})</h2>
      <h3>{task.title}</h3>
      <p style={{ color: "#475569" }}>{task.desc}</p>
      <Link to="/" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 500 }}>← Back to Dashboard</Link>
    </div>
  );
}

// 3. Settings Page (user preferences)
function Settings() {
  const [theme, setTheme] = useState("Light");
  const [notifications, setNotifications] = useState(true);

  return (
    <div style={{ maxWidth: "600px", margin: "30px auto", padding: "20px" }}>
      <h2>User Settings</h2>
      <div style={{ marginBottom: "15px" }}>
        <label>
          Theme:{" "}
          <select value={theme} onChange={(e) => setTheme(e.target.value)} style={{ padding: "6px 10px" }}>
            <option>Light</option>
            <option>Dark</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
          />
          {" "}Enable Notifications
        </label>
      </div>
      <p style={{ marginTop: "15px", color: "#64748b" }}>
        Saved preference: {theme} mode, Notifications {notifications ? "Enabled" : "Disabled"}.
      </p>
    </div>
  );
}

// 4. Page Not Found (Invalid Routes)
function NotFound() {
  return (
    <div style={{ maxWidth: "600px", margin: "30px auto", padding: "20px", textAlign: "center", color: "#dc2626" }}>
      <h2>404 - Page Not Found</h2>
      <p style={{ color: "#64748b" }}>Sorry, the page you requested does not exist.</p>
      <Link to="/" style={{ color: "#2563eb" }}>Return to Dashboard</Link>
    </div>
  );
}

// Main App Router Setup
export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/task/:taskId" element={<TaskDetails />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
