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
            // Redirect ke halaman AddItem
            navigate('/addItem');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-white text-3xl font-bold pb-2">Login</h1>

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
                onClick={handleLogin}
                className="w-[320px] h-9 bg-gray-500 text-xl font-semibold rounded-lg hover:bg-gray-600 transition duration-500"
            >
                Login
            </button>
            <a
                href="#"
                onClick={() => navigate('/signup')}
                className="text-lg text-purple-400 font-semibold hover:text-purple-600 transition duration-500"
            >
                Don&apos;t have an account?
            </a>
        </div>
    );
};

export default Login;
