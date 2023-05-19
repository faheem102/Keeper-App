import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import { Note } from "./Components/Note";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
