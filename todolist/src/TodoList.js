import React from 'react';
import List from './List.js';
import TodoResource from "./API";


class TodoList extends React.Component {
    state = { inputValue: '' };

    componentDidMount() {
        TodoResource.fetchAllData()
            .then(res => res.json())
            .then(res => this.props.refreshTodos(res._embedded.todos));
    }

    pushInput = () => {
        if (this.state.inputValue !== '') {
            this.props.addNewtodo(this.state.inputValue, false);
        }
    }

    handleInput = (event) => {
        this.setState({ inputValue: event.target.value });
    }

    //FILTER Functions
    refreshState = () => {
        let emptyArr = [];
        this.props.refreshTodos(emptyArr);
    }

    filterAllData = () => {
        this.refreshState();
        TodoResource.fetchAllData()
            .then(res => res.json())
            .then(res => this.props.refreshTodos(res._embedded.todos));
    }
    filterAllActive = () => {
        this.refreshState();
        TodoResource.fetchAllActive()
            .then(res => res.json())
            .then(res => this.props.refreshTodos(res._embedded.todos));
    }
    filterAllComplete = () => {
        this.refreshState();
        TodoResource.fetchAllCompleted()
            .then(res => res.json())
            .then(res => this.props.refreshTodos(res._embedded.todos));
    }
    //end FILTER FUNCTIONS

    render() {
        return (
            <div>
                <div>
                    <input className="input-text" type="text" onChange={this.handleInput} />
                    <button className="addButton" onClick={this.pushInput}>Add</button>
                </div>
                <ol>
                    <List todos={this.props.todos} />
                </ol>

                <ol>
                    <button className="addButton" onClick = {this.filterAllData}> All </button>
                    <button className="addButton" onClick = {this.filterAllActive}> Active </button>
                    <button className="addButton" onClick = {this.filterAllComplete}> Complete </button>
                </ol>
            </div>
        );
    }
}




export default TodoList;