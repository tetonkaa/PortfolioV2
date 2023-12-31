import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main/main';
import Projects from './pages/projects/projects';
import Contact from './pages/contact/contact';
import About from './pages/about/about';
import Cursor from './components/cursor/cursor';
function App() {
  return (
    <div className="App">
    <Cursor />
    <Router>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/Projects" element={<Projects/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/About" element={<About/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
