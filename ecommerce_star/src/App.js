import './App.css';
import NavBar from './components/NavBar/navbar'
import {Route,Routes} from "react-router-dom"
import Home from './components/pages/Home';
import About from './components/pages/About';
import Product from './components/pages/Product';
import Contact from './components/pages/Contact';

function App() {
  return <>
  <NavBar/>
  <div className="container">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  </div>
  </>
}
export default App
