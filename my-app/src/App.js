import "./App.css";
import Header from "./Components/Header";
import { Note } from "./Components/Note";
import { Footer } from "./Components/Footer";
import CreateArea from "./Components/CreateArea";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  //  create a  function to Pass the new note back to the App.
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteitem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
