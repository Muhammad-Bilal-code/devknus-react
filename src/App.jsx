import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BlogDetails from "./pages/BlogDetails";
import FetchApi from "./pages/FetchApi";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/fetch-api" element={<FetchApi />} />
        <Route path="/blog/:id/:blogTitle" element={<BlogDetails />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
