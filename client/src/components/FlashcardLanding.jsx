import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ArrObj(str) {
  if (str.startsWith('```json') && str.endsWith('```')) {
    try {
      return JSON.parse(str.slice(7, -3).trim());
    } catch (e) {
      console.error("Failed to parse JSON:", e);
      return [];
    }
  }
  return [];
}

const FlashcardLanding = () => {
  const [context, setContext] = useState('');
  const [numFlashcards, setNumFlashcards] = useState(3);
  const [flashcardsData, setFlashcardsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [flipped, setFlipped] = useState([]);

  const fetchFlashcardsData = async () => {
    const apiKey = 'AIzaSyD8ZBJkzUkpC46RmH6D84K8R9XwzwSAbSU';

    if (!apiKey) {
      console.error('API key is not defined. Please set REACT_APP_GEMINI_API_KEY in your environment variables.');
      return [];
    }

    const prompt = `Please generate ${numFlashcards} flashcards with questions and answers based on the following context:\n${context} with keys - {id, question, answer}. Output should always be JSON format.`;
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: prompt }],
            },
          ],
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('API error:', errorData);
        return [];
      }

      const data = await response.json();
      const resAI = ArrObj(data.candidates?.[0]?.content?.parts[0].text);

      const flashcards = resAI.map((flashcard, index) => ({
        id: index,
        question: flashcard.question || `Question ${index + 1}`,
        answer: flashcard.answer || `Answer ${index + 1}`,
      })) || [];

      return flashcards;
    } catch (error) {
      console.error('Error generating flashcards:', error);
      return [];
    }
  };

  const handleGenerateFlashcards = async () => {
    setLoading(true);
    const flashcards = await fetchFlashcardsData();
    setFlashcardsData(flashcards);
    setFlipped(new Array(flashcards.length).fill(false));
    setLoading(false);
  };

  const handleInputChange = (index, side, value) => {
    const updatedFlashcards = flashcardsData.map((flashcard, i) =>
      i === index ? { ...flashcard, [side]: value } : flashcard
    );
    setFlashcardsData(updatedFlashcards);
  };

  const handleDeleteFlashcard = (index) => {
    const updatedFlashcards = flashcardsData.filter((_, i) => i !== index);
    setFlashcardsData(updatedFlashcards);
    setFlipped(flipped.filter((_, i) => i !== index));
  };

  const handleFlipFlashcard = (index) => {
    const updatedFlipped = flipped.map((isFlipped, i) =>
      i === index ? !isFlipped : isFlipped
    );
    setFlipped(updatedFlipped);
  };

  const handleCancel = () => {
    setContext('');
    setFlashcardsData([]);
    setFlipped([]);
  };

  return (
    <div className="p-4 md:p-8 bg-black min-h-screen flex flex-col text-white mt-14">
      <div className="mb-8 w-full max-w-7xl mx-auto px-2 md:px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 md:mb-0">Flashcards</h1>
          <button
            onClick={handleCancel}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
          >
            CANCEL
          </button>
        </div>

        <textarea
          value={context}
          onChange={(e) => setContext(e.target.value)}
          rows="6"
          placeholder="Add some context for the AI to generate flashcards."
          className="w-full p-4 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400"
        />

        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          <button
            onClick={handleGenerateFlashcards}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out flex items-center mb-4 md:mb-0"
            disabled={loading}
          >
            {loading ? (
              <span className="animate-spin h-5 w-5 mr-3 border-t-2 border-b-2 border-gray-200 rounded-full"></span>
            ) : (
              'GENERATE WITH AI'
            )}
          </button>
          <div className="flex items-center">
            <label htmlFor="amount" className="mr-2 text-gray-300 font-medium">Amount:</label>
            <input
              type="number"
              id="amount"
              value={numFlashcards}
              onChange={(e) => setNumFlashcards(parseInt(e.target.value, 10) || 1)}
              min="1"
              className="w-20 p-2 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 text-center"
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-2 md:px-4 mt-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-6">Flashcards generated by AI</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {flashcardsData.map((flashcard, index) => (
            <div
              key={flashcard.id}
              className="bg-gray-800 rounded-lg p-4 md:p-6 shadow-lg transition transform hover:scale-105 flex flex-col justify-between"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-lg text-gray-200">{flipped[index] ? 'Answer' : 'Question'}</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleFlipFlashcard(index)}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
                  >
                    Flip
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleDeleteFlashcard(index); }}
                    className="text-gray-400 hover:text-red-500 transition duration-300 ease-in-out"
                  >
                    🗑️
                  </button>
                </div>
              </div>
              <textarea
                value={flipped[index] ? flashcard.answer : flashcard.question}
                onChange={(e) => handleInputChange(index, flipped[index] ? 'answer' : 'question', e.target.value)}
                rows="3"
                className="w-full p-3 bg-gray-900 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-500 mt-4"
                placeholder={flipped[index] ? "Enter the answer..." : "Enter the question..."}
              />
            </div>
          ))}
        </div>
        {flashcardsData.length > 0 && (
          <Link to="/flashcard-ai" className="w-full bg-zinc-700 hover:bg-zinc-900 text-white font-bold py-4 px-6 rounded-lg transition duration-300 ease-in-out mt-4 block text-center">
            Try Again
          </Link>
        )}
      </div>
    </div>
  );
};

export default FlashcardLanding;
