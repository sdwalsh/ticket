import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ticket from './components/Ticket/Ticket';
import TicketAnimated from './components/Ticket/TicketAnimated';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            #
          </p>
          <TicketAnimated />
        </header>
      </div>
    );
  }
}

export default App;
