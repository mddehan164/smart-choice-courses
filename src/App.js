
import { useState } from 'react';
import './App.css';
import Course from './components/Course/Course';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Home/Navbar/Navbar';

function App() {
  const [display, setDisplay] = useState('home');
  const handleCourseClick = () =>{
    setDisplay('course');
  }
  const handleHomeClick = () => {
    setDisplay('home');
  };
  return (
    <div>
      <Navbar onCourseClick={handleCourseClick} onHomeClick={handleHomeClick} />
      {display === 'home' && <Home />}
      {display === 'course' && <Course />}
      <Footer />
    </div>
  );
}

export default App;
