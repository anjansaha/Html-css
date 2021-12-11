import React,{ Component } from 'react';
import './App.css'
import Great from './components/great'
import Massage from './components/massage';
import Counts from './components/Counts.js';
class App extends Component{
  render(){
    return (
      <div>
        <Great name="Anjan" heroName="Spiderman">
          <p>This is a Children</p>
        </Great>
        <Great name="Vai">
          <button>Chap</button>
        </Great>
        <Massage />
        <Counts />
      </div>
    );
  }
}

export default App;
