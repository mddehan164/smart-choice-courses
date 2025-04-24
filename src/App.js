
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Home/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='container-fluid'>
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
