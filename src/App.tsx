import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Resume from "./pages/Resume";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div id="page-body">
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/resume" Component={Resume} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
