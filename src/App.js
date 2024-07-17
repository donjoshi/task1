import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Page1 from './pages/page1/page1';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Page1 />} />        
        
      </Routes>
    </div>
  );
}

export default App;
