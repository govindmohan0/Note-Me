import React from "react";
import { useAuth } from "../../contexts/authContext";
import Example from "../Example";
import Card from "../Card";
import "./Home.css";

const Home = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-between p-8">
        <div className="w-1/2">
          <h1 className="text-6xl font-bold text-red-700">
            Learn <span className="text-black">With Note Me</span>
          </h1>
          <p className="mt-4 text-3xl text-gray-800">
            Prepare for academic exam and placement in minimum time without any
            hassle.
          </p>
          <button className="mt-8 bg-red-700 text-white px-6 py-3 rounded-full text-xl font-semibold">
            Let's Go
          </button>
        </div>
        <div className="w-1/2 flex justify-end">
          <Example />
        </div>
      </div>
      <div className="card-container">
        <Card icon="📄" title="Previous Paper" description="B.Tech, BCA, BBA" link="/previous-paper" />
        <Card icon="📝" title="Notes" description="(B.Tech)" link="/notes" />
        <Card icon="📚" title="E-Books" description="Digital & Handwritten" link="/ebooks" />
        <Card icon="📄" title="Syllabus" description="SRM-AP (B.Tech)" link="/syllabus" />
        <Card icon="🐍" title="Important DSA Questions Asked in Companies" description="Programming" link="/dsa-questions" />
        <Card icon="💻" title="C Programming" description="Programming" link="/c-programming" />
        <Card icon="💻" title="C++ Programming" description="Programming" link="/cpp-programming" />
        <Card icon="💻" title="Java Programming" description="Programming" link="/java-programming" />
        <Card icon="🐍" title="Python Programming" description="Programming" link="/python-programming" />
      </div>
    </>
  );
};

export default Home;
