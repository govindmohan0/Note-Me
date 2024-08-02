import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './components/auth/login'; // Ensure these paths are correct
import Register from './components/auth/register';
import Header from './components/header';
import Home from './components/home';
import Contribute from './components/nav/Contribute';
import { AuthProvider } from './contexts/authContext';
import { LoadingProvider } from './components/Loading/LoadingContext'; // Ensure this path is correct
import NotFound from './components/nav/NotFound';
import AboutUs from './components/nav/AboutUs';
import Prevquestion from './components/Resources/Prevquestion';
import Notes from './components/Resources/Notes';
import Ebook from './components/Resources/Ebook';
import CLanguage from './components/Resources/CLanguage';
import CPP from './components/Resources/CPP';
import Python from './components/Resources/Python';
import Java from './components/Resources/Java';
import Syllabus from './components/Resources/Syllabus';
import LoadingSpinner from './components/Loading/LoadingSpinner'; // Ensure this path is correct

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Simulate loading for demonstration purposes
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <AuthProvider>
      <LoadingProvider>
        <Header />
        {loading && <LoadingSpinner loading={loading} />} {/* Render LoadingSpinner component */}
        {!loading && (
          <div className="w-full h-screen flex flex-col">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/contribute" element={<Contribute title="Contribute" />} />
              <Route path="/contactus" element={<Contribute title="Contact Us" />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/previous-paper" element={<Prevquestion />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/ebooks" element={<Ebook />} />
              <Route path="/syllabus" element={<Syllabus />} />
              <Route path="/c" element={<CLanguage />} />
              <Route path="/cpp" element={<CPP />} />
              <Route path="/python" element={<Python />} />
              <Route path="/java" element={<Java />} />
            </Routes>
          </div>
        )}
      </LoadingProvider>
    </AuthProvider>
  );
}

export default App;