import React, { useState, useEffect } from 'react'
import './QuizPage.css'

function QuizPage() {
    const [questions, setQuestions] = useState([]);
    const [index, setIndex] = useState(0);
    // const [question, setQuestion] = useState(questions[index])
    // let [lock, setLock] =useState(false);

    // const checkAns = (e, ans) => {

    //     if (lock === false) {

    //         if (question.ans === ans) {

    //             e.target.classList.add("correct");

    //             setLock(true);

    //         }

    //         else {

    //             e.target.classList.add("wrong"); setLock(true);

    //         }

    //     }

    // }

    const checkAns = (chosenAnswer, correctAnswers) => {
        // Check if the chosen answer is correct
        const isCorrect = correctAnswers.some((answer, index) => {
            const answerKey = `answer_${String.fromCharCode(97 + index)}_correct`;
            return answer === "true" && correctAnswers[answerKey] === "true";
        });

        // Handle correct or incorrect answer
        if (isCorrect) {
            console.log('Correct!');
        } else {
            console.log('Incorrect!');
        }
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://quizapi.io/api/v1/questions?limit=10', {
                    method: 'GET',
                    headers: {
                        'X-Api-Key': 'Y37cg4bPWIYmx2d2V2Q19lZ0twTDHh0ol5Eq3HZc'
                    }
                });
                const data = await response.json();
                setQuestions(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const currentQuestion = questions.length > 0 ? questions[index] : null;

    if (!currentQuestion) {
        return <div>Loading...</div>;
    }

    return (
        <div className="quiz-container">
            <h1 className="quiz-question">Quiz Questions</h1>
            <div>
                <h2>{index + 1}.{currentQuestion.question}</h2>
                <ul className="quiz-options">
                    <li className="quiz-option" onClick={(e) => checkAns(e, 1)}>{currentQuestion.answers.answer_a}</li>
                    <li className="quiz-option" onClick={(e) => checkAns(e, 2)}>{currentQuestion.answers.answer_b}</li>
                    <li className="quiz-option" onClick={(e) => checkAns(e, 3)}>{currentQuestion.answers.answer_c}</li>
                    <li className="quiz-option" onClick={(e) => checkAns(e, 4)}>{currentQuestion.answers.answer_d}</li>
                </ul>
            </div>
        </div>
    );
}

export default QuizPage