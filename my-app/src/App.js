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
  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem) => {
        return <Note title={noteItem.title} content={noteItem.content} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
