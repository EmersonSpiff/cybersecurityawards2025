import React from 'react';
import './App.css';
import BackgroundAnimation from './components/BackgroundAnimation';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <BackgroundAnimation />
      <Header />
      <Hero />
    </div>
  );
}

export default App;
