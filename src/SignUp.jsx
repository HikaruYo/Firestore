import React, { useState } from 'react';
import { auth } from "./configuration";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("User Registered");
            navigate('/login'); // Redirect ke halaman Login
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <>
            <h1>Sign Up</h1>
            <div className="form-group">
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={handleSignUp}>Sign Up</button>
            <a href="#" onClick={() => navigate('/login')}>Already have an account?</a>
        </>
    );
};

export default SignUp;
