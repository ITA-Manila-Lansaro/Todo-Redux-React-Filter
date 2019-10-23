import React from 'react';
import { Checkbox} from 'antd';


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
        console.log(isCompleted ? "completed": "active");
    }

    render(){
        return (
        <li className = {this.state.statusBool ? 'doneTodo' : ''}>
            <Checkbox
            checked ={this.state.statusBool} 
            onChange = {this.changeValue}/> {this.state.content}
        </li>
        );
    }
}


export default ListElements;