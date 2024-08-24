import React from 'react';
import { Link } from 'react-router-dom';

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
    <div className="min-h-8 bg-black flex flex-col items-center p-4 sm:p-6 md:p-8 rounded-3xl">
      <p className="text-center text-3xl font-bold mb-8 text-gray-100">Resources</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8 bg-transparent rounded-2xl glowing-shadow">
        {resources.map((resource, index) => (
          <Link 
            to={resource.route} 
            key={index} 
            className="relative block">
            <div 
              className={`${resource.bgColor} p-6 rounded-lg flex flex-col items-center justify-between transition-transform transform hover:scale-105 hover:shadow-2xl min-h-[200px] aspect-w-1 aspect-h-1`}>
              <div className="text-4xl sm:text-5xl mb-3">{resource.icon}</div>
              <h2 className="text-lg sm:text-xl font-bold text-white">{resource.title}</h2>
              <p className="text-sm sm:text-md text-gray-300 text-center">{resource.description}</p>
            </div>
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity rounded-lg"></div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ResourceGrid;
