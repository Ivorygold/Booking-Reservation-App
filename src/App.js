import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import List from "./pages/List";
import Hotel from "./pages/Hotel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hotels" element={<List />} />
        <Route path="/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
