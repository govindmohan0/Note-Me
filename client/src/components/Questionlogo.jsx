import React, { useState } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';

const QuestionLogo = () => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }} className='mt-14'>
      <FaQuestionCircle
        onClick={toggleInfo}
        style={{ cursor: 'pointer', fontSize: '24px', color: '#007BFF' }}
        className="ml-2 md:ml-4"
      />
      {showInfo && (
        <div style={{
          position: 'absolute',
          top: '30px',
          right: '0',
          backgroundColor: '#f9f9f9',
          border: '1px solid #ccc',
          padding: '10px',
          borderRadius: '5px',
          width: '250px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          zIndex: 1000,
        }}>
          <h4 className="font-bold text-gray-800">What is a Flashcard?</h4>
          <p className="text-gray-800">
            A flashcard is a card bearing Question and Answer on both sides, used for testing and improving memory. 
            Flashcards can be used to memorize Knowledge and information based on Context provided for Learning Purpose or any subject matter.
          </p>
          <p className="mt-2 text-gray-800">
            <strong>How it works:</strong><br />
            One side typically has a question or prompt, and the other side has the answer or related information that will be fetch from the Context Provided with respect to Amount .
          </p>
        </div>
      )}
    </div>
  );
};

export default QuestionLogo;
