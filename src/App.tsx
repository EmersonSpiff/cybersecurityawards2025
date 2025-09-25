import React from 'react';
import './App.css';
import BackgroundAnimation from './components/BackgroundAnimation';
import Header from './components/Header';
import Hero from './components/Hero';
import Awards from './components/Awards';
import Nominees from './components/Nominees';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BackgroundAnimation />
      <Header />
      <Hero />
      <Awards />
      <Nominees />
      <Footer />
    </div>
  );
}

export default App;
