import './Nav.css';
import './style.css';

import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Support from './components/Support/Support';
import Navigation from './components/Navigation/Navigation';

function App() {
  return ( 
    <div>
      <div className="Nav"> 
      <Navigation />          
          <Routes>                 
             <Route path='/' element={<Home />}/>
             <Route path='/about' element={<About />}/>
             <Route path='/support' element={<Support />}/>            
          </Routes>
      </div>
      
    </div>       
    

);
}

export default App;
