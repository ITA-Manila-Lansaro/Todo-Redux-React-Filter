import React from 'react';
import List from './List.js';
import TodoResource from "../API";
import {Button, Input, Card, message, Col, Row} from 'antd';


class TodoList extends React.Component {
    state = {inputValue: ''};

    componentDidMount() {
        TodoResource.fetchAllData()
            .then(res => res.json())
            .then(res => this.props.refreshTodos(res._embedded.todos));
    }

    pushInput = () => {
        if (this.state.inputValue !== '') {
            this.props.addNewtodo(this.state.inputValue, "active");
            message.success('Added Successfully');
        }
    }

    handleInput = (event) => {
        this.setState({inputValue: event.target.value});
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
        message.success('Filtered to All Data');
    }
    filterAllActive = () => {
        this.refreshState();
        TodoResource.fetchAllActive()
            .then(res => res.json())
            .then(res => this.props.refreshTodos(res._embedded.todos));
        message.success('Filtered to All Active data');
    }
    filterAllComplete = () => {
        this.refreshState();
        TodoResource.fetchAllCompleted()
            .then(res => res.json())
            .then(res => this.props.refreshTodos(res._embedded.todos));
        message.success('Filtered to All Complete data');
    }

    //end FILTER FUNCTIONS

    render() {
        return (
            <div>
                <div>
                    <Input className="Input-text" type="text" onChange={this.handleInput}/>
                    <Button className="addButton" icon="plus" type="primary" onClick={this.pushInput}>Add</Button>
                </div>
                <Row><Col>&nbsp;</Col></Row>
                <Card size="large" title="My ToDo List" style={{width: 600}}>
                    <ol>
                        <List todos={this.props.todos}/>
                    </ol>
                </Card>

                <ol className="buttonGroup">
                    <Button icon="search" onClick={this.filterAllData}> All </Button>
                    <Button icon="border" onClick={this.filterAllActive}> Active </Button>
                    <Button icon="check" onClick={this.filterAllComplete}> Complete </Button>
                </ol>
            </div>
        );
    }
}


export default TodoList;