
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import About from './components/About';
import Developer from './components/Developer';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Developer/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
