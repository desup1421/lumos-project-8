import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import BlogDetail from "./pages/BlogDetail";
import Newsletter from "./pages/Newsletter";
import About from "./pages/About";

const App = () => {
  return (
    <div className="bg-light min-h-screen font-inter">
      <Router>
        <Navbar />
        <div className="mt-[72px] tablet:mt-[80px] lg:px-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/*" element={<BlogDetail />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
