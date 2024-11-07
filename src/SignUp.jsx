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
            // Redirect ke halaman Login
            navigate('/login');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-white text-3xl font-bold pb-2">Sign Up</h1>

            <div className="mt-2 mb-1">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-[320px] px-4 py-2 bg-gray-300 border border-gray-300 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>
            <div className="mb-3">
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-[320px] px-4 py-2 bg-gray-300 border border-gray-300 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>

            <button
                onClick={handleSignUp}
                className="w-[320px] h-9 bg-gray-500 text-xl font-semibold rounded-lg hover:bg-gray-600 transition duration-500"
            >
                Sign Up
            </button>
            <a
                href="#"
                onClick={() => navigate('/login')}
                className="text-lg text-purple-400 font-semibold hover:text-purple-600 transition duration-500"
            >
                Already have an account?
            </a>
        </div>
    );
};

export default SignUp;
