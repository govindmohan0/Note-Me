import React from 'react';
import { FaBook } from 'react-icons/fa'; // Importing some icons for demonstration

const Sidebar = ({ options, onOptionSelect }) => {
    return (
        <div className="w-full md:w-64 bg-gradient-to-b from-gray-850 to-gray-700 text-white p-4 md:p-6 h-screen shadow-xl flex flex-col">
            {/* Menu Header */}
            <div className="text-lg font-bold mb-4 md:mb-8 mt-4 md:mt-0">Menu</div>
            
            <ul className="space-y-4 flex-grow">
                {options.map((option, index) => (
                    <li key={index}>
                        <button
                            className="w-full text-left py-2 px-4 rounded-lg bg-gradient-to-r from-gray-850 to-gray-700 hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 flex items-center space-x-3 text-sm md:text-base"
                            onClick={() => onOptionSelect(option.pdfUrl)}
                        >
                            <FaBook className="text-yellow-600" />
                            <span>{option.name}</span>
                        </button>
                    </li>
                ))}
            </ul>

            <div className="mt-6">
                <button className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 transition-all duration-200 ease-in-out text-sm text-gray-300">
                    Settings
                </button>
            </div>
        </div>
    );
};

export default Sidebar;