import React from 'react'
import './Home.css';
import img from '../../images/banner.png'

function Home() {
    return (
        <div>
            <div className='container'>
                {/* <a href='/jee' className='jeebtn'>
                    <div className='jeeBox'>
                        <img src="" alt="" />
                        <h1>JEE</h1>
                    </div>
                </a>
                <a href='/quizPage' className='neetbtn'>
                    <div className='neetBox'>
                        <img src="" alt="" />
                        <h1>NEET</h1>
                    </div>
                </a> */}
                <a href='/quizPage'>
                    {/* <button type="button" class="btn btn-primary">Take a Quiz!</button> */}
                    <img src={img} style={{ width: 1200 }}></img>
                </a>
            </div>
        </div>
    )
}

export default Home