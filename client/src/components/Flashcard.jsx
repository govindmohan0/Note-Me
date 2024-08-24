import React, { useState } from 'react';

const Flashcard = ({ question, answer }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="max-w-xs w-full bg-gray-800 text-white rounded-lg shadow-md p-4 m-2 mt-14">
            <div className="h-40 flex items-center justify-center">
                <p className="text-sm leading-relaxed text-center">
                    {isFlipped ? answer : question}
                </p>
            </div>
            <div className="flex justify-between items-center mt-4">
                <button
                    onClick={handleFlip}
                    className="flex items-center justify-center w-full py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 rounded transition duration-300 ease-in-out"
                >
                    <span>{isFlipped ? 'UNFLIP' : 'FLIP'}</span>
                </button>
            </div>
        </div>
    );
};

export default Flashcard;
