import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Product from './components/pages/Product/Product';
import Contact from './components/pages/Contact/Contact';
import NavBar from './components/NavBar/navbar';
import Footer from "./components/Footer/footer";

function App() {
  return <>
    <NavBar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    <Footer />
  </>
}
export default App