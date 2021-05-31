import React, { Component } from 'react';
import './App.css';
import ChatUIContainer from './components/container/ChatUIContainer';
import { CookiesProvider } from 'react-cookie';

class App extends Component {
  constructor() {
    super();

    this.state = {
      chatShown: true
    }
  }


  render() {
    return (
      <CookiesProvider>
        <div className="app--container">
          {
            (this.state.chatShown)
              ? <ChatUIContainer />
              : null
          }
        </div>
      </CookiesProvider>
    );
  }
}

export default App;
