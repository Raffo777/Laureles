import React from 'react';
import Header from './header.js'; // Asegúrate de importar tu Header
import Footer from './footer.js'; // Asegúrate de importar tu Footer
import '../login.css'; // Estilos del login

const Login = () => {
    return (
        <>
            <Header />
            <div className="login-page">
                <div className="login-container">
                    <div className="login-box">
                        <div className="login-left">
                            <h2>Login</h2>
                            <label>Username</label>
                            <input type="text" placeholder="Enter your username" />
                            <label>Password</label>
                            <input type="password" placeholder="Enter your password" />
                            <button>Login</button>
                            <p className="signup-link">
                                Don't have an account? <a href="#signup">Sign Up</a>
                            </p>
                        </div>
                        <div className="login-right">
                            <h2>WELCOME BACK!</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delentiurem?</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
