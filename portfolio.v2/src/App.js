import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main/main';
import Projects from './pages/projects/projects';
import Contact from './pages/contact/contact';

function App() {
  return (
    <>
      <Sidebar/>
    <Router>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/Projects" element={<Projects/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
