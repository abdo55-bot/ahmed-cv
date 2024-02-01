
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Experince from './components/Certificates';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';
import Certificates from './components/Certificates';

function App() {
  return (
    <div className="App ">
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/portfolio' element={<Portfolio/>} />
    <Route path='/certificates' element={<Certificates/>} />
    <Route path='/contact' element={<Contact/>} />
    

  </Routes>
  <SocialLinks/>
  </div>
  
  );
}

export default App;
