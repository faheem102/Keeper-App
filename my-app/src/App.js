import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import { Note } from "./Components/Note";
import { Footer } from "./Components/Footer";
import notes from "./notes";

function App() {
  return (
    <div className="App">
      <Header />
      {notes.map((noteEntry) => (
        <Note
          key={noteEntry.id}
          title={noteEntry.title}
          content={noteEntry.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
