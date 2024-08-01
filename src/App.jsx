import React from "react";
import { Route, Routes, useState, useEffect } from "react-router-dom";
import Login from "./components/auth/login"; // Ensure this path is correct
import Register from "./components/auth/register"; // Ensure this path is correct
import Header from "./components/header"; // Ensure this path is correct
import Home from "./components/home"; // Ensure this path is correct
import Contribute from "./components/nav/Contribute"; // Ensure this path is correct
import { AuthProvider } from "./contexts/authContext";
import NotFound from "./components/nav/NotFound";
import AboutUs from "./components/nav/AboutUs";
import Prevquestion from "./components/Resources/Prevquestion";
import Notes from "./components/Resources/Notes";
import Ebook from "./components/Resources/Ebook";
import CLanguage from "./components/Resources/CLanguage";
import CPP from "./components/Resources/CPP";
import Python from "./components/Resources/Python";
import Java from "./components/Resources/Java";
import Syllabus from "./components/Resources/Syllabus";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(()=>{
setLoading(false)
    },8000)
  }, []);
  return (
    <AuthProvider>
      <Header />
      <div className="w-full h-screen flex flex-col">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/contribute"
            element={<Contribute title="Contribute" />} />
          <Route
            path="/contactus"
            element={<Contribute title="Contact Us" />}
          />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/previous-paper" element={<Prevquestion />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/ebooks" element={<Ebook />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/c" element={<CLanguage />} />
          <Route path="/java" element={<CPP />} />
          <Route path="/python" element={<Python />} />
          <Route path="/java" element={<Java />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
