import React from 'react';
import { FaRegClock, FaCode, FaFileAlt, FaUserFriends } from 'react-icons/fa'; // Import icons
import Bottom from '../Bottom'
const AboutUs = () => {
  return (
    <div className="bg-black py-12 px-6 md:px-16 text-white">
      {/* About Section */}
      <div className="max-w-7xl mx-auto text-center mt-5">
        <h1 className="text-4xl font-bold text-white mb-6">
          About <span className="text-blue-500">NoteMe</span>
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-12">
          NoteMe is a comprehensive web application designed for CSE (Computer Science Engineering) students to streamline their access to essential study resources. It provides a centralized platform to help students focus on their learning without wasting time searching for various resources across the web.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {/* Features List */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Centralized Study Materials</h2>
            <p className="text-gray-300">
              Access a wide range of previous exam papers, PDF handwritten notes, and other study materials submitted by students. This saves time and effort in searching for resources online.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Topic-wise Organization</h2>
            <p className="text-gray-300">
              NoteMe organizes study materials by topics, ensuring students can quickly find resources related to specific subjects such as Data Structures, Algorithms, or Operating Systems.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Integrated Online Compiler</h2>
            <p className="text-gray-300">
              The built-in online compiler allows students to practice coding instantly without switching to another platform. Supporting over 20 programming languages, students can write, test, and refine their code right within the platform.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">AI-Driven Flashcards</h2>
            <p className="text-gray-300">
              The AI-powered flashcards provide personalized revision tools. Students can input their notes or study material, and the system will generate flashcards to aid in active recall and retention.
            </p>
          </div>
        </div>

        {/* How NoteMe Helps Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-white mb-8">How <span className="text-blue-500">NoteMe</span> Helps Students</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105">
              <FaRegClock className="text-blue-400 text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Time-Saving</h3>
              <p className="text-gray-300 text-center">
                Instead of searching for resources across multiple platforms, students can access all necessary materials, from previous papers to notes, on one platform.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105">
              <FaFileAlt className="text-blue-400 text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Better Organization</h3>
              <p className="text-gray-300 text-center">
                NoteMe organizes resources by topic, helping students easily find study materials for specific subjects, especially during exam preparation.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105">
              <FaCode className="text-blue-400 text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Seamless Coding Experience</h3>
              <p className="text-gray-300 text-center">
                The integrated online compiler allows students to practice coding without leaving the platform, making it ideal for interviews and quick learning.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105">
              <FaUserFriends className="text-blue-400 text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Collaborative Learning</h3>
              <p className="text-gray-300 text-center">
                Students can contribute their own notes, creating a growing repository of resources that benefits the entire community.
              </p>
            </div>
          </div>
        </div>

        {/* Flashcards Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-white mb-8">Where <span className="text-blue-500">Flashcards</span> Can Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Flashcard Usage 1 */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Reinforce Key Concepts</h3>
              <p className="text-gray-300 leading-relaxed">
                Whether it's learning data structures, algorithms, or system programming concepts, flashcards help reinforce essential topics through active recall, improving long-term retention.
              </p>
            </div>

            {/* Flashcard Usage 2 */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Efficient Revision</h3>
              <p className="text-gray-300 leading-relaxed">
                Flashcards offer a fast way to revise important points before exams, helping students quickly assess their understanding of core concepts without rereading large volumes of material.
              </p>
            </div>

            {/* Flashcard Usage 3 */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Personalized Learning</h3>
              <p className="text-gray-300 leading-relaxed">
                The AI-driven flashcards are tailored to individual needs, allowing students to focus on their weak areas and learn at their own pace, maximizing efficiency in study sessions.
              </p>
            </div>

            {/* Flashcard Usage 4 */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Exam Preparation</h3>
              <p className="text-gray-300 leading-relaxed">
                Flashcards are a powerful tool for exam preparation, allowing students to quickly review critical material in an engaging format, improving recall and comprehension.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Bottom></Bottom>
     
    </div>
  );
};

export default AboutUs;
