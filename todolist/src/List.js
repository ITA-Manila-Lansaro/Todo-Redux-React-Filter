import React from 'react';
import ListElements from './ListElements.js';
import TodoResource from "./API"


class List extends React.Component{

    updateStatus= (status, id ) =>{
        // console.log(status + id)
        TodoResource.updateStatus(status,id);
    }

    render(){
        const {todos} = this.props;
        return (    
            <div>
                {
            todos.map((todo) =>
            <ListElements 
            id = {todo.id}
            content = {todo.content} 
            status = {todo.status} 
            updateStatus = {this.updateStatus}/>
            )}
            </div>

        );
    }
}

export default List;
