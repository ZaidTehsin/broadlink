import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AboutMe from './Components/AboutMe';
import Analytics from './Components/Analytics';
import Cards from './Components/Cards';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Newsletter from './Components/Newsletter';


function App() {
  return (
    <div>

      <Routes>
        <Route exact path='/' element={[

          <Navbar />,
          <Hero />,
          <Analytics />,
          <Newsletter />,
          <Cards />,
          <Footer />,

        ]} />

        <Route exact path='/company' element={[

          <Navbar />,
          <AboutMe />,
          <Footer />,

        ]} />

        <Route exact path='/contact' element={[

          <Navbar />,
          <ContactUs />,
          <Footer />,

        ]} />
      </Routes>

    </div>
  );
}

export default App;
