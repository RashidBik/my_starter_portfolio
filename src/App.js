import React,{useState} from 'react';
import './input.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Portfolio from './Components/Project/Portfolio';
import Testimonials from './Components/Testimonials/Testimonials';
import Header from './Components/Header/Header';
import Brands from './Components/Brands';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import BacKTotop from './Components/BacKTotop';
import Show from './Show';
import Loader from './Components/Loader';
import { AnimatePresence } from 'framer-motion';



function App() {
 const [show, setShow] = useState(false);
  return (
   <AnimatePresence >
      {window.onload ? <Loader />
      :(       
     <div className="bg-white dark:bg-gray-900 ">
        <Show show={show} setShow={setShow} />
        <Header/>
        <Home setShow={setShow} />
        <Brands />
        <About />
        <Skills />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
        <BacKTotop /> 
     </div>
       ) 
       }
   </AnimatePresence>
  );
}

export default App;
