import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage"
import SignUp from './pages/SignUpPage/SignUp';
import CreateLibrary from './pages/CreateLibrary/CreateLibrary';

const RoutesConst = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" >
                    <Route index element={<HomePage />} />
                    <Route path="home" element={<HomePage />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="createlibrary" element={<CreateLibrary />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default RoutesConst;