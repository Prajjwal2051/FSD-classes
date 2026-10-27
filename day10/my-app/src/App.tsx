import { Component } from "react";
import type { ReactNode, ErrorInfo } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  message: string;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      message: "",
    };
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      message: error.message,
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log("Caught Error:", error);
    console.log("Details:", info);
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

class ArrayError extends Component {
  render() {
    let numbers = [10, 20, 30];
    let pos = 5;
    if (pos >= numbers.length) {
      throw new Error("Array index is out of bounds");
    }
    return <h3>Element: {numbers[pos]}</h3>;
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