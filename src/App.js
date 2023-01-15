import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Data from './pages/Data'
import Header from './Components/Header'
import Sample from './pages/Sample'
import Findthing from './pages/Findthing'



import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='product' element={<Product />} />
        <Route path='data' element={<Data />}/>
        <Route path='sample' element={<Sample />} />
        <Route path='findthing' element={<Findthing />} />


      </Routes>
    </div>
    
  );
}

export default App;
