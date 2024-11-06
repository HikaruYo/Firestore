import React, { useState } from 'react';
import { auth } from "./configuration";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("User Logged in");
            navigate('/addItem'); // Redirect ke halaman AddItem
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <>
            <h1>Login</h1>
            <div className="form-group">
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={handleLogin}>Login</button>
            <a href="#" onClick={() => navigate('/signup')}>Don't have an account?</a>
        </>
    );
};

export default Login;
