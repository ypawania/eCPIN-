import logo from './logo.svg';
import './App.css';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
       
        
        <Route path="/Home" element={ <Home /> } />
        <Route path = "/About" element={ <About />} />
        <Route path="/Contact" element={<Contact />} />
       

      
    </Routes>
      
    </div>
  );
}

export default App;
