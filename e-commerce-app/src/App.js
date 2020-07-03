import React from 'react';
import './assets/css/main.scss';


//Components
import Home from './containers/Home';
import Cart from './containers/Cart';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
        <Navbar />
        {1 === 2/2? <Cart /> : <Home />}
        <Footer />
        
    </div>
  );
}

export default App;
