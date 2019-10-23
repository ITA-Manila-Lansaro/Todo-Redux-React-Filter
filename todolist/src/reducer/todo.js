const initialState = {
    todos: []
  };
    
  export default (state = initialState, {type, payload}) => {
    switch (type) {
      case "ADD_TODO":
      return {
            ...state, 
            todos:[...state.todos , payload]}
      case "FETCH_DATA":
        return {
          ...state ,
          todos: payload}
      default:
        return state;
    }
  }

