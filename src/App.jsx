import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhosWatching from "./Pages/whoswatching";
import Home from "./Pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WhosWatching />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;