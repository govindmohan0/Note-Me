import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './components/auth/login'; 
import Register from './components/auth/register';
import Header from './components/header';
import Home from './components/home';
import Contribute from './components/nav/Contribute';
import { AuthProvider } from './contexts/authContext';
import { LoadingProvider } from './components/Loading/LoadingContext';
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
import LoadingSpinner from './components/Loading/LoadingSpinner';
import Landing from './components/IDE/CodeEditor/Landing';
import REACTjs from './components/Resources/REACTjs';
import SQL from './components/Resources/SQL';
import DAA from './components/Resources/DAA';
import JS from './components/Resources/JS';
import DSA from './components/Resources/DSA';
import OS from './components/Resources/OS';
import CN from './components/Resources/CN';
import DBMS from './components/Resources/DBMS';

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2300); // Simulate loading for demonstration purposes
    return () => clearTimeout(timer);
  }, [location]);

  const isOnlineCompiler = location.pathname === '/onlinecompiler';

  return (
    <AuthProvider>
      <LoadingProvider>
        {/* Conditionally render Header based on the current path */}
        {!isOnlineCompiler && <Header />}
        {loading && <LoadingSpinner loading={loading} />}
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
              <Route path="/onlinecompiler" element={<Landing />} />
              <Route path="/dsa" element={<DSA />} />
              <Route path="/os" element={<OS />} />
              <Route path="/cn" element={<CN />} />
              <Route path="/dbms" element={<DBMS />} />
              <Route path="/js" element={<JS />} />
              <Route path="/daa" element={<DAA />} />
              <Route path="/sql" element={<SQL />} />
              <Route path="/react" element={<REACTjs />} />
            {/*  <Route path="/c/:courseId/topic/:topicId" component={AboutUs} />   */}


            </Routes>
          </div>
        )}
      </LoadingProvider>
    </AuthProvider>
  );
}

export default App;
