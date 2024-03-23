import React, { useState } from 'react';
import './TextExtraction.css'; // Import CSS file
import ManualType from './ManualType';

function OCRSpaceExample() {
    const [extractedText, setExtractedText] = useState('');
    const [segmentedQuestions, setSegmentedQuestions] = useState([]);

    async function handleUpload() {
        const fileInput = document.getElementById('fileInput');
        const selectedImage = fileInput.files[0];

        if (!selectedImage) {
            alert('Please select an image file.');
            return;
        }

        const formData = new FormData();
        formData.append('image', selectedImage);

        try {
            const response = await fetch('https://api.ocr.space/parse/image', {
                method: 'POST',
                body: formData,
                headers: {
                    'apikey': 'YK89455222688957', // Replace 'YOUR_API_KEY' with your actual OCR.space API key
                },
            });

            const data = await response.json();

            if (data && data.ParsedResults && data.ParsedResults.length > 0) {
                const extractedText = data.ParsedResults[0].ParsedText;
                setExtractedText(extractedText);

                const segmentedQuestions = segmentTextIntoQuestions(extractedText);
                setSegmentedQuestions(segmentedQuestions);
            } else {
                setExtractedText('No text found in the image.');
                setSegmentedQuestions([]);
            }
        } catch (error) {
            console.error('Error during OCR:', error);
            setExtractedText('Error occurred during text extraction.');
            setSegmentedQuestions([]);
        }
    }

    function segmentTextIntoQuestions(text) {
        const regex = /\b\d+\.\s+/;
        const splitText = text.split(regex);

        return splitText.map((question, index) => {
            const [questionText, ...options] = question.split(/\s(?=[A-D]\))/);

            const questionObject = {
                question: questionText.trim(),
                correctOption: '', // Add a property to hold the correct option
            };

            options.forEach((option, optionIndex) => {
                const letter = String.fromCharCode(65 + optionIndex);
                questionObject[letter] = option.trim();

                // Defaulting the correct option to the first option (A) for now
                if (optionIndex === 0) {
                    questionObject.correctOption = letter;
                }
            });

            return questionObject;
        });
    }

    function handleOptionChange(questionIndex, option) {
        // Update the correct option for the specific question
        const updatedQuestions = [...segmentedQuestions];
        updatedQuestions[questionIndex].correctOption = option;
        setSegmentedQuestions(updatedQuestions);
    }

    return (
        <div className="quiz-container">
            <h1 className="quiz-title">OCR with OCR.space Example</h1>
            <input type="file" className="file-input" accept="image" id="fileInput" />
            <button onClick={handleUpload} className="upload-btn">Upload & Extract Text</button>
            <div className="extracted-text">
                <h2 className="section-title">Extracted Text:</h2>
                <pre>{extractedText}</pre>
            </div>
            <div className="segmented-questions">
                <h2 className="section-title">Segmented Questions:</h2>
                <div className="questions-container">
                    {segmentedQuestions.map((question, index) => (
                        <ul key={index} className="question-list">
                            <li className="question-item">
                                <strong>Question:</strong> {question.question}<br /><br />
                                <label>
                                    <input
                                        type="radio"
                                        value="A"
                                        checked={question.correctOption === 'A'}
                                        onChange={() => handleOptionChange(index, 'A')}
                                    />
                                    {question.A}
                                </label><br /><br />
                                <label>
                                    <input
                                        type="radio"
                                        value="B"
                                        checked={question.correctOption === 'B'}
                                        onChange={() => handleOptionChange(index, 'B')}
                                    />
                                    {question.B}
                                </label><br /><br />
                                <label>
                                    <input
                                        type="radio"
                                        value="C"
                                        checked={question.correctOption === 'C'}
                                        onChange={() => handleOptionChange(index, 'C')}
                                    />
                                    {question.C}
                                </label><br /><br />
                                <label>
                                    <input
                                        type="radio"
                                        value="D"
                                        checked={question.correctOption === 'D'}
                                        onChange={() => handleOptionChange(index, 'D')}
                                    />
                                    {question.D}
                                </label><br /><br />
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
            <ManualType />
        </div>
    );
}

export default OCRSpaceExample;
