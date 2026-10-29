import { useEffect, useState } from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import "./App.css";

function ThemeToggle() {
  const { dark, setDark } = useTheme();

  return (
    <button onClick={() => setDark(!dark)}>
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

function NoteItem({ note, onDelete }) {
  return (
    <div className="note">
      <span>{note.text}</span>
      <button className="delete" onClick={() => onDelete(note.id)}>
        Delete
      </button>
    </div>
  );
}

function NotesApp() {
  const [text, setText] = useState("");
  const [notes, setNotes] = useState(() =>
    JSON.parse(localStorage.getItem("notes") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    document.title = `Notes (${notes.length})`;
  }, [notes]);

  function addNote() {
    if (!text.trim()) return;

    setNotes([...notes, { id: Date.now(), text: text.trim() }]);
    setText("");
  }

  function deleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  return (
    <div className="container">
      <header>
        <h1>Notes ({notes.length})</h1>
        <ThemeToggle />
      </header>

      <div className="input-row">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addNote()}
          placeholder="Write a note..."
        />
        <button onClick={addNote}>Add Note</button>
      </div>

      {notes.length === 0 ? (
        <p>No notes yet.</p>
      ) : (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            onDelete={deleteNote}
          />
        ))
      )}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <NotesApp />
    </ThemeProvider>
  );
}