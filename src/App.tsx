import React from 'react';
import logo from './logo.svg';
import './App.css';
import PayWithCardComponent from './componets/PayWithCardComponent';
import InterfaceTest from './componets/InterfaceTest';
import Metamask from './componets/Metamask';

function App() {
  return (
    <div className="App">
      <div className="flex flex-wrap justify-center items-center h-screen bg-[#1B2430]">
        <div className=" w-96">
          {' '}
          <Metamask />
        </div>
      </div>
    </div>
  );
}

export default App;
