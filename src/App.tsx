import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Resume from "./pages/Resume";

function App() {
  return (
    <Router>
      <div id="page-body">
        <Routes>
          <Route path="/" Component={Resume} />
          <Route path="/resume" Component={Resume} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
