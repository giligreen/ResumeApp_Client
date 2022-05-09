import logo from './logo.svg';
import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import Upload from './components/Upload/Upload'
import { Provider } from 'react-redux'
import store from './Redux/store'
import Form from './components/Form'


function App() {

  return (

    <div className="App App-header">
      
        <Provider store={store}>
          {/* <Upload></Upload> */}
          <Form></Form>
        </Provider>
    
    </div>
  );
}

export default App;
