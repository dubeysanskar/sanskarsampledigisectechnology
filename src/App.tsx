import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Development from './components/Development';
import Courses from './components/Courses';
import Founder from './components/Founder';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Development />
          <Courses />
          <Founder />
          <WhyUs />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;