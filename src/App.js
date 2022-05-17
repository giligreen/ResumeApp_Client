import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Upload from './components/Upload/Upload'
import Form from './components/Form'
import Home from './components/Home/Home'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Output from './components/output'


function App() {

 return (
    <div className="App App-header"> 
    
       <Routes >
           <Route path="/" element={<Home></Home>}></Route>
           <Route path="/upload" element={ <Upload></Upload>}></Route>
           <Route path="/jobDetails" element={<Form></Form>}></Route>
           <Route path="/Output/" element={<Output></Output>}></Route>
           <Route
            path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
        </Routes>
    </div>
  );
}

export default App;
