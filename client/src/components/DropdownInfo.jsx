import React, { useState } from 'react';
import Not from '../../src/assets/Confused.json';
import Example from './Illustrator';

const DropdownInfo = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleDropdown = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const dropdownData = [
        { question: "How does Note Me help you?", answer: "Note Me offers a comprehensive collection of university exam study materials alongside top-tier coding resources, empowering you to excel academically and enhance your programming skills—all in one place." },
        { question: "Is Note Me provide everything free?", answer: "Yes, here every resource is free of cost." },
        { question: "What courses are available on Note Me?", answer: "Currently, we offer an extensive range of notes for B.Tech CSE & IT, along with previous year papers for all B.Tech courses. Whether you're looking to ace your exams or sharpen your coding expertise, Note Me has got you covered." },
        { question: "What are the requirements for Note Me?", answer: "There are no prerequisites to join Note Me. Whether you're aiming for top marks in your university exams or simply exploring new courses, Note Me is your gateway to self-improvement and academic excellence!" },
        { question: "How can somebody connect themselves to Note Me?", answer: "You’re just one email away from us! If you have any queries or wish to contribute notes and resources, feel free to reach out through our Contact Us or Contribute sections. You can also connect with us on Instagram, YouTube, and Telegram—find these handles at the bottom in the Contact Us section. Simply click on the icons to be directed to our respective profiles. We look forward to hearing from you!" },
    ];

    return (
        <div className="flex flex-row-reverse items-start space-x-8">
            <div className="flex-1 flex justify-center items-center">
                <Example animationData={Not} className="w-10 h-10 object-contain" /> {/* Adjust the width and height here */}
            </div>
            <div className="flex-2 w-full max-w-3xl mx-auto p-6 bg-gray-900 rounded-2xl shadow-lg mt-14 px-10">
                <h2 className="text-2xl font-semibold text-center mb-6 text-gray-100">Doubts? Ask Away!</h2>
                {dropdownData.map((item, index) => (
                    <div key={index} className="mb-4">
                        <div
                            className="cursor-pointer py-3 px-5 bg-gray-700 rounded-lg shadow-md flex justify-between items-center transition-transform duration-300 ease-in-out transform hover:bg-gray-600"
                            onClick={() => toggleDropdown(index)}
                            aria-expanded={activeIndex === index}
                            aria-controls={`dropdown-content-${index}`}
                        >
                            <span className="text-gray-200 text-lg font-medium">{item.question}</span>
                            <span className={`transform transition-transform ${activeIndex === index ? 'rotate-180' : ''} text-gray-300`}>
                                ▼
                            </span>
                        </div>
                        <div
                            id={`dropdown-content-${index}`}
                            className={`mt-2 px-5 py-3 bg-gray-600 text-gray-300 rounded-lg shadow-md transition-all duration-300 ease-in-out ${activeIndex === index ? 'block' : 'hidden'}`}
                        >
                            {item.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DropdownInfo;
