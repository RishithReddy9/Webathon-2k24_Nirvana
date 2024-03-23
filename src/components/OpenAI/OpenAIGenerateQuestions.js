import React, { useState } from 'react';
import openai from 'openai'; // Import the OpenAI SDK or API client

const OpenAIQuestions = () => {
    const [generatedQuestions, setGeneratedQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const generateQuestions = async () => {
        setIsLoading(true);

        // Make API request to OpenAI to generate questions
        try {
            const response = await openai.Completion.create({
                engine: 'text-davinci-002', // Choose the appropriate engine
                prompt: 'Cricket', // Provide the text or context for generating questions
                max_tokens: 150, // Adjust max_tokens as needed
                n: 5, // Number of questions to generate
                stop: ['\n'], // Stop generation at new lines
            });

            // Extract generated questions from the response and update state
            setGeneratedQuestions(response.data.choices.map(choice => choice.text.trim()));
        } catch (error) {
            console.error('Error generating questions:', error);
        }

        setIsLoading(false);
    };

    return (
        <div>
            <h1>OpenAI Questions Generator</h1>
            <button onClick={generateQuestions} disabled={isLoading}>
                {isLoading ? 'Generating...' : 'Generate Questions'}
            </button>
            <div>
                {generatedQuestions.length > 0 && (
                    <ul>
                        {generatedQuestions.map((question, index) => (
                            <li key={index}>{question}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default OpenAIQuestions;
