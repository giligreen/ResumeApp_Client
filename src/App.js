import logo from './logo.svg';
import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import Upload from './components/Upload/Upload'
import { Provider } from 'react-redux'
import store from './Redux/store'



function App() {

  return (

    <div className="App App-header">
      
        <Provider store={store}>
          <Upload></Upload>
        </Provider>
    
    </div>
  );
}

export default App;
