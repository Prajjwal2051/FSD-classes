import { Component } from "react";
import type { ReactNode, ErrorInfo } from "react";
import { Component } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import TaskItem from './TaskItem.tsx';
import type { Task } from './TaskItem.tsx';

interface ErrorBoundaryProps {
  children: ReactNode;
}
interface AppProps {}

interface ErrorBoundaryState {
  hasError: boolean;
  message: string;
interface AppState {
  text: string;
  tasks: Task[];
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      hasError: false,
      message: "",
      text: "",
      tasks: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      message: error.message,
  handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ text: e.target.value });
  }

  handleAddTask(e?: FormEvent) {
    if (e) {
      e.preventDefault();
    }
    const trimmedText = this.state.text.trim();
    if (!trimmedText) {
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      text: trimmedText,
      done: false
    };

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask],
      text: ""
    }));
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log("Caught Error:", error);
    console.log("Details:", info);
  handleToggle(id: number) {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    }));
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Error Occurred!</h2>
          <p>{this.state.message}</p>
        </div>
      );
    }
    return this.props.children;
  handleDelete(id: number) {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id)
    }));
  }
}

class DivisionError extends Component {
  render() {
    let x = 10;
    let y = 0;
    if (y === 0) {
      throw new Error("Cannot divide by zero");
    }
    return <h3>Result: {x / y}</h3>;
  }
}
    const totalTasks = this.state.tasks.length;
    const completedTasks = this.state.tasks.filter((t) => t.done).length;

class ArrayError extends Component {
  render() {
    let numbers = [10, 20, 30];
    let pos = 5;
    if (pos >= numbers.length) {
      throw new Error("Array index is out of bounds");
    }
    return <h3>Element: {numbers[pos]}</h3>;
    return (
      <div style={{ maxWidth: "450px", margin: "40px auto", fontFamily: "sans-serif", padding: "20px" }}>
        <h2>To-Do App</h2>

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

        {totalTasks === 0 ? (
          <p style={{ color: "#666", fontStyle: "italic" }}>No tasks yet. Add one!</p>
        ) : (
          <>
            <p style={{ fontWeight: "bold", margin: "12px 0" }}>
              {completedTasks} of {totalTasks} tasks done
            </p>
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

function App() {
  return (
    <div>
      <h1>Error Boundary Demo</h1>
      <ErrorBoundary>
        <DivisionError />
      </ErrorBoundary>
      <hr />
      <ErrorBoundary>
        <ArrayError />
      </ErrorBoundary>
    </div>
  );
}

export default App;