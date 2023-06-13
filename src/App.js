import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Navbar from './Components/Common/Navbar';
import Footer from './Components/Common/Footer';
import Contact from './Pages/Contact';
import Post from './Pages/Post';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/> 
          <Route path='/contact' element={<Contact />}/>
          <Route path='/post' element={<Post />}/>
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
