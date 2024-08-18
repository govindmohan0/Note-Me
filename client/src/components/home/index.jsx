import React from "react";
import { useAuth } from "../../contexts/authContext";
import Example from "../Example";
import ResourceGrid from "../Resources/ResourceGrid";
import "./Home.css";
import Bottom from "../Bottom";
import Study from '../../assets/study1.json';
import { Link } from "react-router-dom";
import Tutorial from "../Resources/Tutorial";
import DropdownInfo from "../DropdownInfo";
import StudentReview from "../StudentReview";

const Home = () => {
  const { currentUser } = useAuth();

  return (
    <div className="min-h-screen bg-black p-4 md:p-14">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between">
        {/* Left Column */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="text-4xl md:text-5xl font-bold pb-4 md:pb-8 text-gray-300">
            Hello{" "}
            <span className="text-yellow-500">
              {currentUser ? (currentUser.displayName ? currentUser.displayName : currentUser.email) : 'Guest'}
            </span>
            ,
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-red-700">
            Learn <span className="text-red-700">With Note Me</span>
          </h1>
          <p className="mt-4 text-xl md:text-3xl text-gray-300">
            Prepare for academic exams and placement in minimum time without any hassle.
          </p>
          <Link to="/notes">
            <button className="mt-8 bg-red-700 text-white px-6 py-3 rounded-full text-lg md:text-xl font-semibold hover:bg-red-800 transition duration-300">
              Let's Go
            </button>
          </Link>
        </div>

        {/* Right Column (Desktop Only) */}
        <div className="hidden md:block w-1/2 flex justify-end">
          <Example animationData={Study} />
        </div>
      </div>

      {/* Resource Grid */}
      <div className="mt-12">
        <ResourceGrid />
      </div>

      <div className="mt-12">
        <Tutorial />
      </div>

      <div className="mt-12">
        <DropdownInfo />
      </div>

      <div className="mt-12">
        <StudentReview />
      </div>

      {/* Bottom Component */}
      <div className="mt-12">
        <Bottom />
      </div>
    </div>
  );
};

export default Home