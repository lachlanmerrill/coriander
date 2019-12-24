import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './todo-list';

function App() {
  const items = [
    {num: 0, name: "First item"},
    {num: 1, name: "Second item"},
    {num: 2, name: "Axel is a good boy"}
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <List list={items}/>
      </header>


    </div>
  );
}

export default App;
