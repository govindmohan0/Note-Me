import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed

const resources = [
  { title: 'Previous Paper', description: 'B.Tech, BCA, MCA', bgColor: 'bg-gray-200', icon: '📝', route: '/previous-paper' },
  { title: 'Notes', description: 'KUK, AKTU (B.Tech)', bgColor: 'bg-blue-200', icon: '📒', route: '/notes' },
  { title: 'Syllabus', description: 'KUK, AKTU (B.Tech)', bgColor: 'bg-yellow-200', icon: '📋', route: '/syllabus' },
  { title: 'E-Books', description: 'Digital & Handwritten', bgColor: 'bg-gray-200', icon: '📚', route: '/ebooks' },
  { title: 'C', description: 'Programming', bgColor: 'bg-green-200', icon: '💻', route: '/c' },
  { title: 'C++', description: 'Programming', bgColor: 'bg-blue-200', icon: '💻', route: '/cpp' },
  { title: 'Java', description: 'Programming', bgColor: 'bg-red-200', icon: '💻', route: '/java' },
  { title: 'Python', description: 'Programming', bgColor: 'bg-blue-900 text-white', icon: '🐍', route: '/python' },
];

const ResourceGrid = () => {
  return (
    <div className="min-h-8 bg-blue-50 flex flex-col items-center p-8">
      <p className="text-center text-3xl font-bold mb-8">Resources</p>
      <div className="grid grid-cols-4 gap-8 p-8 bg-gray-800 rounded-lg shadow-xl">
        {resources.map((resource, index) => (
          <Link to={resource.route} key={index} className="relative block">
            <div className={`${resource.bgColor} p-6 rounded-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl`}>
              <div className="text-5xl mb-3">{resource.icon}</div>
              <h2 className="text-xl font-bold">{resource.title}</h2>
              <p className="text-md">{resource.description}</p>
            </div>
            {/* Optionally, you can use an overlay to give a clickable feel */}
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity rounded-lg"></div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ResourceGrid;
