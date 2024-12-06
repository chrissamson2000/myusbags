import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; // Import Home component
import About from './About'; // Import About component
import Navigation from './Navigation'; // Import Navigation component


function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Links */}
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
