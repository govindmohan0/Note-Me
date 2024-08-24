import React, { useState } from 'react';

const FlashcardLanding = () => {
    const [context, setContext] = useState('');
    const [numFlashcards, setNumFlashcards] = useState(3);
    const [flashcardsData, setFlashcardsData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchFlashcardsData = async () => {
        const apiKey = `AIzaSyD8ZBJkzUkpC46RmH6D84K8R9XwzwSAbSU`;
        console.log("API Key:", apiKey); // Debugging log

        if (!apiKey) {
            console.error('API key is not defined. Please set REACT_APP_GEMINI_API_KEY in your environment variables.');
            return [];
        }

        const prompt = `Please generate ${numFlashcards} flashcards with questions and answers based on the following context:\n${context}`;
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

        console.log("Prompt being sent to API:", prompt); // Log the prompt for debugging

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
            console.log("API Response:", data); // Log the API response for debugging

            // Extract flashcards from the API response
            const flashcards = data.candidates?.[0]?.content?.parts?.map((flashcard, index) => ({
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
    };

    return (
        <div className="p-8 bg-gray-900 min-h-screen flex flex-col items-center text-white mt-14">
            <div className="mb-8 w-full max-w-3xl">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">Flashcards • ASD</h1>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                        CANCEL
                    </button>
                </div>

                <textarea
                    value={context}
                    onChange={(e) => setContext(e.target.value)}
                    rows="6"
                    placeholder="Add some context for the AI in order to generate flashcards for you."
                    className="w-full p-4 bg-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div className="flex justify-between items-center mt-6">
                    <button
                        onClick={handleGenerateFlashcards}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out flex items-center"
                        disabled={loading}
                    >
                        {loading ? 'Generating...' : 'GENERATE WITH AI'}
                    </button>
                    <div>
                        <label htmlFor="amount" className="mr-2">Amount:</label>
                        <input
                            type="number"
                            id="amount"
                            value={numFlashcards}
                            onChange={(e) => setNumFlashcards(parseInt(e.target.value, 10) || 1)}
                            min="1"
                            className="w-16 p-2 bg-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full max-w-3xl mt-8">
                <h2 className="text-2xl font-semibold mb-4">Flashcards generated by AI</h2>
                {flashcardsData.map((flashcard, index) => (
                    <div key={flashcard.id} className="bg-gray-800 rounded-md p-4 mb-4 shadow-lg">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-bold">Front</span>
                            <button onClick={() => handleDeleteFlashcard(index)} className="text-gray-400 hover:text-red-500 transition duration-300 ease-in-out">
                                🗑️
                            </button>
                        </div>
                        <textarea
                            value={flashcard.question}
                            onChange={(e) => handleInputChange(index, 'question', e.target.value)}
                            rows="3"
                            className="w-full p-3 bg-gray-900 rounded-md text-white mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter the question..."
                        />

                        <span className="font-bold">Back</span>
                        <textarea
                            value={flashcard.answer}
                            onChange={(e) => handleInputChange(index, 'answer', e.target.value)}
                            rows="3"
                            className="w-full p-3 bg-gray-900 rounded-md text-white mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter the answer..."
                        />
                    </div>
                ))}

                {flashcardsData.length > 0 && (
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out mt-4">
                        SAVE ALL
                    </button>
                )}
            </div>
        </div>
    );
};

export default FlashcardLanding;
