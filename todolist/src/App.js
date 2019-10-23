import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoContainer from './containers/TodoContainers';

class App extends React.Component {

  render (){
    return (
      <div className="App-header">
        <div>
            <h2>React To Do List</h2>
        </div>
        <TodoContainer/>
    </div>
    );
  }

}

export default App;
