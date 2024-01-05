import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Services  from "./pages/Services";
import Contact from "./pages/Contact";
import Testimonial from './pages/Testimonial'
import NoPage from "./pages/NoPage";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";



function App() {
  useEffect(() =>{
    AOS.init({
      offset:100,
      duration:500,
      easing:"ease-in-sine",
      delay:100
    });
    AOS.refresh();
  }, [])
  return (
  <>
    
      <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="testimonial" element={<Testimonial />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  
  </>
  );
}

export default App;
