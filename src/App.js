import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import Form from "./components/Form";
import NotesList from "./components/NotesList";

function App() {
  return (
    <div className="App">
      <Search />
      <Form />
      <NotesList />
    </div>
  );
}

export default App;
