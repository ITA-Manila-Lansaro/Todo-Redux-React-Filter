import { connect } from 'react-redux';
import TodoList from '../TodoList';
import TodoResource from '../API';


const mapStateToProps = state => ({
    todos: state.todos
  });
  
  const mapStateToDispatch = dispatch => ({
    addNewtodo: (contentVal, status) => {
        const newTodoItem = {
            content : contentVal,
            status: status};

        TodoResource.addTodo(newTodoItem)
        .then(res => res.json())
        .then(({id, status, content}) =>{
            dispatch ({
                type: 'ADD_TODO',
                payload: {id, status, content}
            })
        })
    },

    refreshTodos: todos => dispatch({
        type: 'FETCH_DATA',
        payload: todos
      })
  });

  export default connect (mapStateToProps,mapStateToDispatch)(TodoList)