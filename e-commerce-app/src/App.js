import React from 'react';
import './assets/css/main.scss';


//Components
import Home from './containers/Home';
import Cart from './containers/Cart';
import ProductPage from './containers/ProductPage'

import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
        <Navbar />
        {/* {1 === 2/2? <Cart /> : <Home />} */}
        <ProductPage />
        <Footer />
        
    </div>
  );
}

export default App;
