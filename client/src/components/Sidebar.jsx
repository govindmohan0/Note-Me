import React from 'react';
import { FaBook } from 'react-icons/fa'; // Importing some icons for demonstration

const Sidebar = ({ options, onOptionSelect }) => {
    return (
        <div className="w-full md:w-64 bg-gradient-to-b from-gray-800 to-gray-900 text-white p-4 md:p-6 h-screen shadow-xl flex flex-col">
            {/* Menu Header */}
            <div className="text-lg font-semibold mb-4 md:mb-8 mt-4 md:mt-0 tracking-wide">
                Menu
            </div>

            {/* Scrollable Menu Options */}
            <ul className="space-y-4 flex-grow overflow-y-auto">
                {options.map((option, index) => (
                    <li key={index}>
                        <button
                            className="w-full text-left py-2 px-4 rounded-lg bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center space-x-3 text-sm md:text-base shadow-md"
                            onClick={() => onOptionSelect(option.pdfUrl)}
                        >
                            <FaBook className="text-yellow-500" />
                            <span>{option.name}</span>
                        </button>
                    </li>
                ))}
            </ul>

            {/* Settings Button */}
            <div className="mt-6">
                <button className="w-full py-2 px-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all duration-300 ease-in-out text-sm text-gray-300 shadow-inner">
                    Settings
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
