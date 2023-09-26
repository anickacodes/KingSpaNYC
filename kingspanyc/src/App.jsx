import { useState } from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./assets/kingspalogo23094785.png";
import "./App.css";

function Home() {
  return (
    <header>
      <nav>
        <div>
          <img src={logo} alt="brown dog in blue clothing and white sneakers" />
          <h1>King Spa NYC </h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <div>
          <a href="/about"> About</a>
          <a href="/services"> Services</a>
          <a href="/contact"> Contact</a>
        </div>
      </nav>
    </header>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
