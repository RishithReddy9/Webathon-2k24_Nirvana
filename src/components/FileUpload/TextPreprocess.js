import React, { useState } from 'react';

const TextPreprocess = () => {
    const [extractedText, setExtractedText] = useState('');
    const [preprocessedText, setPreprocessedText] = useState('');

    const preprocessText = (text) => {
        // Remove special characters, punctuation, and non-printable characters
        const cleanedText = text.replace(/[^\w\s]/gi, '').replace(/[\r\n]+/g, ' ');

        // Convert text to lowercase
        const lowercaseText = cleanedText.toLowerCase();

        // Remove extra whitespaces
        const trimmedText = lowercaseText.trim().replace(/\s+/g, ' ');

        return trimmedText;
    };

    const handleTextExtraction = () => {
        // Simulated text extraction (replace with actual text extraction logic)
        const extractedText = "Sample extracted text with noise and artifacts!";
        setExtractedText(extractedText);

        // Preprocess the extracted text
        const processedText = preprocessText(extractedText);
        setPreprocessedText(processedText);
    };

    return (
        <div>
            <h1>Text Preprocessing Example</h1>
            <button onClick={handleTextExtraction}>Extract Text</button>
            <div>
                <h2>Extracted Text:</h2>
                <p>{extractedText}</p>
            </div>
            <div>
                <h2>Preprocessed Text:</h2>
                <p>{preprocessedText}</p>
            </div>
        </div>
    );
};

export default TextPreprocess;
