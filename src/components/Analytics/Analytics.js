import React from 'react';

const Analytics = () => {
    return (
        <div className="container mt-5">
            <div className="card">
                <div className="lie m-auto" style={{ borderRadius: '10%', borderWidth: '5px', padding: '3px', margin: '5px', height: '0v9h', width: '70vw' }}>
                    <div className="ele mt-5 mb-5" style={{ backgroundColor: 'rgb(155, 152, 118)', padding: '5px', margin: '5px', textAlign: 'center' }}><p>Learning is a journey</p></div>
                    <div className="ele" style={{ backgroundColor: 'rgb(155, 152, 118)', padding: '5px', margin: '5px', textAlign: 'center' }}><p>Grade: D</p></div>
                    <div className="ele" style={{ backgroundColor: 'rgb(155, 152, 118)', padding: '5px', margin: '5px', textAlign: 'center' }}><p>Total Questions: 5</p></div>
                    <div className="ele" style={{ backgroundColor: 'rgb(155, 152, 118)', padding: '5px', margin: '5px', textAlign: 'center' }}><p>Correct Answers: 2</p></div>
                    <div className="ele" style={{ backgroundColor: 'rgb(155, 152, 118)', padding: '5px', margin: '5px', textAlign: 'center' }}><p>Your Score: 40%</p></div>
                    <div className="ele" style={{ backgroundColor: 'rgb(155, 152, 118)', padding: '5px', margin: '5px', textAlign: 'center' }}><p>Passing Score: 60%</p></div>
                    <div className="ele" style={{ backgroundColor: 'rgb(155, 152, 118)', padding: '5px', margin: '5px', textAlign: 'center' }}><p>Time Taken: 0h 0m 11s</p></div>
                </div>
            </div>
            <button className="btn btn-primary mr-3 ml-3 mt-5">ReTry</button>
            <button className="btn btn-success mr-3 ml-3 mt-5">Back To Home</button>
        </div>
    );
};

export default Analytics;