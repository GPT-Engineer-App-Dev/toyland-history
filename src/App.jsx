import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import History from "./pages/History.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
