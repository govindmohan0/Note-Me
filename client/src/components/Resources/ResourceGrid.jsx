import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed

const resources = [
  { title: 'Previous Paper', description: 'B.Tech, BCA, MCA', bgColor: 'bg-gray-800', icon: '📝', route: '/previous-paper' },
  { title: 'Notes', description: 'SRM AP (B.Tech)', bgColor: 'bg-indigo-600', icon: '📒', route: '/notes' },
  { title: 'Syllabus', description: 'SRM AP (B.Tech)', bgColor: 'bg-yellow-500', icon: '📋', route: '/syllabus' },
  { title: 'Node Js', description: 'Programming', bgColor: 'bg-green-600', icon: '📚', route: '/nodejs' },
  { title: 'C', description: 'Programming', bgColor: 'bg-teal-500', icon: '💻', route: '/c' },
  { title: 'C++', description: 'Programming', bgColor: 'bg-blue-500', icon: '💻', route: '/cpp' },
  { title: 'Java', description: 'Programming', bgColor: 'bg-red-500', icon: '💻', route: '/java' },
  { title: 'Python', description: 'Programming', bgColor: 'bg-purple-700 text-white', icon: '🐍', route: '/python' },
];

const ResourceGrid = () => {
  return (
    <div className="min-h-8 bg-black flex flex-col items-center p-8 rounded-3xl">
      <p className="text-center text-3xl font-bold mb-8 text-gray-100">Resources</p>
      <div className="grid grid-cols-4 gap-8 p-8 bg-transparent rounded-2xl glowing-shadow">
        {resources.map((resource, index) => (
          <Link to={resource.route} key={index} className="relative block">
            <div className={`${resource.bgColor} p-6 rounded-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl`}>
              <div className="text-5xl mb-3">{resource.icon}</div>
              <h2 className="text-xl font-bold text-white">{resource.title}</h2>
              <p className="text-md text-gray-300">{resource.description}</p>
            </div>
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity rounded-lg"></div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ResourceGrid;
