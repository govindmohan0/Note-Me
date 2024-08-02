import React from "react";
import { useAuth } from "../../contexts/authContext";
import Example from "../Example";
import ResourceGrid from "../Resources/ResourceGrid";
import "./Home.css";
import Bottom from "../Bottom";
import Study from '../../assets/study1.json';
import IDE from "../IDE/IDE";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// Define theme if not already defined
const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

const Home = () => {
  const { currentUser } = useAuth();

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-between p-8">
        <div className="w-full md:w-1/2">
          <div className="text-5xl font-bold pb-20">
            Hello <span className="text-yellow-500">{currentUser.displayName ? currentUser.displayName : currentUser.email}</span>,
          </div>
          <h1 className="text-6xl font-bold text-red-700">
            Learn <span className="text-black">With Note Me</span>
          </h1>
          <p className="mt-4 text-3xl text-gray-800">
            Prepare for academic exams and placement in minimum time without any hassle.
          </p>
          <Link to="/notes">
            <button className="mt-8 bg-red-700 text-white px-6 py-3 rounded-full text-xl font-semibold hover:bg-red-800">
              Let's Go
            </button>
          </Link>
        </div>
        <div className="hidden md:block w-1/2 flex justify-end">
          <Example animationData={Study} />
        </div>
      </div>

      <div className="p-8 bg-gray-100">
        <ResourceGrid />
      </div>
      
      <Bottom />
    </>
  );
};

export default Home;
