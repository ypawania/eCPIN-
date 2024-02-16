import './App.css';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
const pages = ['Home','Browse', 'Search', 'About','Contact'];

function App() {
  return (
    <div className="App">
      <Navbar pages={pages}/>
      <Routes>
       
        
        <Route path="/Home" element={ <Home /> } />
        <Route path = "/About" element={ <About />} />
        <Route path="/Contact" element={<Contact />} />


      
    </Routes>
      
    </div>
  );
}

export default App;
