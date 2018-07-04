import React, { Component } from 'react';
import './App.css';
import HeaderInfo from './HeaderInfo'
import TodoApp from './ToDoApp'
import Timer from './Timer'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderInfo name="Welcome to React World" />
        <div className="container">
          <div className="row">
            <div className="col-6"><Timer /></div>
            <div className="col-6"><TodoApp /></div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default App;
