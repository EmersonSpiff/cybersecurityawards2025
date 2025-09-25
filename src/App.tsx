import React from 'react';
import './App.css';
import BackgroundAnimation from './components/BackgroundAnimation';
import Header from './components/Header';
import Hero from './components/Hero';
import Awards from './components/Awards';
import Nominees from './components/Nominees';

function App() {
  return (
    <div className="App">
      <BackgroundAnimation />
      <Header />
      <Hero />
      <Awards />
      <Nominees />
    </div>
  );
}

export default App;
