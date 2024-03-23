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
                <h2>Test App</h2>
                <ul>
                    <li></li>
                    <li>Services</li>
                    <li>Contact Us</li>
                    <li>
                        {isAuthenticated ? (
                            <div>
                                <img src={user.picture} alt={user.name} />
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