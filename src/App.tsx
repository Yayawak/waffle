import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './app/page';
import Landing from './app/Components/Landing';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App; 