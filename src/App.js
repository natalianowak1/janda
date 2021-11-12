import React from 'react';
import './App.css';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import Main from './layouts/Main/Main';


function App() {
  return (
    <div className="app">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
