import React from 'react';
import './assets/css/main.scss';

//Components
import Home from './containers/Home';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <Footer />
        
    </div>
  );
}

export default App;
