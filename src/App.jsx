import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import AddItem from './AddItem';

const App = () => {
    return (
        <Router>
            <div className="App">
                <h1>Firestore</h1>
                <div className="form">
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/addItem" element={<AddItem />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
