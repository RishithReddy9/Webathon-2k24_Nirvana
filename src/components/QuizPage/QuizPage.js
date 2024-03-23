import React, { useState } from 'react';

function QuizPage() {
    const [selectedType, setSelectedType] = useState('All');
    const [quizzes, setQuizzes] = useState([
        // Your quiz data
        { id: 1, name: 'Sports Quiz 1', type: 'Sports', numberOfQuestions: 10, duration: 15 },
        { id: 2, name: 'General Quiz 1', type: 'General', numberOfQuestions: 15, duration: 20 },
        { id: 3, name: 'Movies Quiz 1', type: 'Movies', numberOfQuestions: 12, duration: 18 },
        { id: 4, name: 'Songs Quiz 1', type: 'Songs', numberOfQuestions: 8, duration: 10 },
        { id: 5, name: 'Sports Quiz 2', type: 'Sports', numberOfQuestions: 12, duration: 20 },
        { id: 6, name: 'General Quiz 2', type: 'General', numberOfQuestions: 20, duration: 25 },
        { id: 7, name: 'Movies Quiz 2', type: 'Movies', numberOfQuestions: 10, duration: 15 },
        { id: 8, name: 'Songs Quiz 2', type: 'Songs', numberOfQuestions: 15, duration: 22 },
        { id: 9, name: 'Sports Quiz 3', type: 'Sports', numberOfQuestions: 8, duration: 12 },
        { id: 10, name: 'General Quiz 3', type: 'General', numberOfQuestions: 18, duration: 23 },
        { id: 11, name: 'Movies Quiz 3', type: 'Movies', numberOfQuestions: 14, duration: 19 },
        { id: 12, name: 'Songs Quiz 3', type: 'Songs', numberOfQuestions: 12, duration: 18 },
        { id: 13, name: 'Sports Quiz 4', type: 'Sports', numberOfQuestions: 10, duration: 15 },
        { id: 14, name: 'General Quiz 4', type: 'General', numberOfQuestions: 16, duration: 21 },
        { id: 15, name: 'Movies Quiz 4', type: 'Movies', numberOfQuestions: 13, duration: 17 },
        { id: 16, name: 'Songs Quiz 4', type: 'Songs', numberOfQuestions: 10, duration: 14 },
        { id: 17, name: 'Sports Quiz 5', type: 'Sports', numberOfQuestions: 12, duration: 18 },
        { id: 18, name: 'General Quiz 5', type: 'General', numberOfQuestions: 22, duration: 28 },
        { id: 19, name: 'Movies Quiz 5', type: 'Movies', numberOfQuestions: 11, duration: 16 },
        { id: 20, name: 'Songs Quiz 5', type: 'Songs', numberOfQuestions: 14, duration: 20 },
    ]);

    const filterQuizzesByType = (type) => {
        if (type === 'All') {
            return quizzes;
        }
        return quizzes.filter(quiz => quiz.type === type);
    };

    const goToQuiz = (quizId) => {
        console.log(`Navigating to quiz with ID: ${quizId}`);
        // Implement your navigation logic here
    };

    return (
        <div className="container mt-5">
            {/* <div className="btn-group mb-4">
                {['All', 'Sports', 'General', 'Movies', 'Songs'].map(type => (
                    <button
                        key={type}
                        className={`btn ${selectedType === type ? 'btn-primary' : 'btn-secondary'}`}
                        onClick={() => setSelectedType(type)}
                    >
                        {type}
                    </button>
                ))}
            </div> */}

            <div className="row">
                {filterQuizzesByType(selectedType).map(quiz => (
                    <div key={quiz.id} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{quiz.name}</h5>
                                <p className="card-text">Type: {quiz.type}</p>
                                <p className="card-text">Number of Questions: {quiz.numberOfQuestions}</p>
                                <p className="card-text">Duration: {quiz.duration} minutes</p>
                                <button className="btn btn-primary" onClick={() => goToQuiz(quiz.id)}>Go to Quiz</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default QuizPage;
