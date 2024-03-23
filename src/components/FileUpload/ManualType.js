import React, { useState } from 'react';
import './ManualType.css'; // Import CSS file

const ManualType = () => {
    const [questions, setQuestions] = useState([]);
    const [newQuestion, setNewQuestion] = useState('');
    const [options, setOptions] = useState(['', '', '', '']);
    const [correctOption, setCorrectOption] = useState('');
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);
    const [editingIndex, setEditingIndex] = useState(-1);

    const handleAddQuestion = () => {
        if (newQuestion.trim() === '') {
            setError('Please enter a question.');
            return;
        }

        if (options.some(option => option.trim() === '')) {
            setError('Please enter all options.');
            return;
        }

        if (!correctOption.trim()) {
            setError('Please select the correct option.');
            return;
        }

        const newQuestionObj = {
            question: newQuestion.trim(),
            options: options.map(option => option.trim()),
            correctOption: correctOption.trim(),
        };

        if (editingIndex !== -1) {
            const updatedQuestions = [...questions];
            updatedQuestions[editingIndex] = newQuestionObj;
            setQuestions(updatedQuestions);
            setEditingIndex(-1);
        } else {
            setQuestions([...questions, newQuestionObj]);
        }

        setNewQuestion('');
        setOptions(['', '', '', '']);
        setCorrectOption('');
        setError(null);
    };

    const handleEditQuestion = (index) => {
        const question = questions[index];
        setNewQuestion(question.question);
        setOptions(question.options);
        setCorrectOption(question.correctOption);
        setEditingIndex(index);
    };

    const handleDeleteQuestion = (index) => {
        const updatedQuestions = questions.filter((_, i) => i !== index);
        setQuestions(updatedQuestions);
    };

    const handleCreateQuiz = () => {
        if (questions.length === 0) {
            setError('Please add at least one question.');
            return;
        }

        setProcessing(true);
        // You can perform any action here after clicking "Create Quiz"
        // For example, you can send the questions to a server or display them on the screen
        console.log('Questions:', questions);
    };


    return (
        <div className="manual-type-container">
            <h1>The Ultimate Trivia Quiz</h1>
            {error && <div className="message error">{error}</div>}
            <hr />
            <div className="questions">
                {questions.map((question, index) => (
                    <div key={index} className="question">
                        <h3>Question {index + 1}</h3>
                        <p>{question.question}</p>
                        <h4>Options:</h4>
                        <ul>
                            {question.options.map((option, optionIndex) => (
                                <li key={optionIndex}>{option}</li>
                            ))}
                        </ul>
                        <p>Correct Option: {question.correctOption}</p>
                        <button onClick={() => handleEditQuestion(index)}>Edit</button>
                        <button onClick={() => handleDeleteQuestion(index)}>Delete</button>
                    </div>
                ))}
            </div>
            <hr />
            <div className="meta">
                <h3>Add Question:</h3>
                <textarea
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                    placeholder="Enter your question here"
                />
                <br />
                <h3>Add Options:</h3>
                {options.map((option, index) => (
                    <input
                        key={index}
                        value={option}
                        onChange={(e) => {
                            const newOptions = [...options];
                            newOptions[index] = e.target.value;
                            setOptions(newOptions);
                        }}
                        placeholder={`Option ${index + 1}`}
                    />
                ))}
                <br />
                <h3>Correct Option:</h3>
                <select
                    value={correctOption}
                    onChange={(e) => setCorrectOption(e.target.value)}
                >
                    <option value="">Select Correct Option</option>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
            <hr />
            <div className="extra">
                <button onClick={handleAddQuestion}>
                    {editingIndex !== -1 ? 'Update Question' : 'Add Question'}
                </button>
                <button onClick={handleCreateQuiz} disabled={processing}>
                    {processing ? 'Creating Quiz...' : 'Create Quiz'}
                </button>
            </div>
        </div>
    );
};

export default ManualType;
