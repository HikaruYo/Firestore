import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import AddItem from './AddItem';

const App = () => {
    return (
        <Router>
            <div className="flex flex-col items-center justify-center bg-[#242424] w-screen h-screen">
                <h1 className="text-purple-400 text-4xl font-semibold pb-4">Firestore by Hikaru</h1>
                <div className="container p-4 w-[400px] text-center border-2 border-gray-600 rounded-lg bg-gray-700/60 backdrop-blur-3xl">
                    <div className="flex flex-col">
                        <Routes>
                            <Route path="/" element={<Navigate to="/login" replace />} />

                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<SignUp />} />
                            <Route path="/addItem" element={<AddItem />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default App;
