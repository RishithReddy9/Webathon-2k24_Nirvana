import React from 'react'
import './Navbar.css'
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {

    const { loginWithRedirect } = useAuth0();
    const { user, isAuthenticated, isLoading, logout } = useAuth0();
    if (isLoading) {
        return <div>Loading ...</div>;
    }
    return (
        <div>
            <nav>
                {/* <img src="" alt="" /> */}
                <a href='/' ><li>Quiz App</li></a>
                <ul>
                    <li></li>
                    <a href='/admin'><li>Admin</li></a>
                    <a href='/quizPage'><li>Take Quiz</li></a>
                    <li>
                        {isAuthenticated ? (
                            <div>
                                {/* <img src={user.picture} alt={user.name} /> */}
                                <h2>{user.name}</h2>
                                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                    Log Out
                                </button>
                            </div>
                        ) : (
                            <button onClick={() => loginWithRedirect()}>Log In</button>
                        )}

                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Navbar