import React from 'react';


class ListElements extends React.Component{

    state =  {id : this.props.id,
                content : this.props.content,
                status : this.props.status,
                statusBool : this.props.status === "completed"
            };

    changeValue = () =>{
        let isCompleted = !this.state.statusBool
        this.setState ({statusBool : isCompleted})
        this.props.updateStatus(isCompleted ? "completed": "active", this.state.id);
    }

    render(){
        return (
        <li className = {this.state.statusBool ? 'doneTodo' : ''}>
            <input type="checkbox" 
            checked ={this.state.statusBool} 
            onClick = {this.changeValue}/> {this.state.content} 
        </li>
        );
    }
}


export default ListElements;