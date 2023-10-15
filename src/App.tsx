import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Resume from "./pages/Resume";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";

function App() {
  return (
    <Router>
      <div id="page-body">
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/aboutme" Component={AboutMePage} />
          <Route path="/resume" Component={Resume} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
