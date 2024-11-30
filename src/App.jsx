import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import BlogDetail from "./pages/BlogDetail";

const App = () => {
  return (
    <div className="bg-light min-h-screen font-inter">
      <Router>
        <Navbar />
        <div className="mt-[72px] tablet:mt-[80px] lg:px-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/*" element={<BlogDetail />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
