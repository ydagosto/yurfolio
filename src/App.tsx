import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div id="page-body">
        <NavBar />
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/hola" Component={HomePage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
