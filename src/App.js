
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experince from './components/Experince';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div className="App ">
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/portfolio' element={<Portfolio/>} />
    <Route path='/experince' element={<Experince/>} />
    <Route path='/contact' element={<Contact/>} />
    

  </Routes>
  <SocialLinks/>
  </div>
  
  );
}

export default App;
