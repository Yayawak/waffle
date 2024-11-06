import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './Components/Landing';
import Home from './Components/Home';

function App() {
    return (
        <Router>
            <Routes>
                {/* <Route path="/" element={<Landing />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<Navigate to="/" />} /> */}
            </Routes>
        </Router>
    );
}

export default App; 