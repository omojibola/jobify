import React, { useEffect } from 'react';

import './App.css';
import Header from './components/header/Header';
import Products from './components/Products';
import ContextDataProvider from './Context';

const App = () => {
  return (
    <ContextDataProvider>
      <div className="App">
        <Header />
        <Products />
      </div>
    </ContextDataProvider>
  );
};

export default App;
