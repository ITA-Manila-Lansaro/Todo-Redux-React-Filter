// export const fetchAllData = () => {
//     return fetch("http://localhost:8080/api/todos", {mode: 'cors'})
//     .then(res => res.json())
// }

// export const addTodo = (payload) => {
//     fetch("http://localhost:8080/api/todos", {method: 'POST', headers: new Headers({
//   'Content-Type': 'application/json'
//   }), mode: 'cors', body: JSON.stringify({id:payload.id, content: payload.content, status: payload.status})})
//   }

//  export const updateStatus = (status, id) => {
//     fetch("http://localhost:8080/api/todos/"+id, {
//     mode: 'cors', 
//     method: 'PATCH', 
//     headers: new Headers({'Content-Type': 'application/json'}), 
//     body: JSON.stringify({"status" : status})})    
//     console.log(status, id);
//   }


export default {
    fetchAllData: () => fetch("http://localhost:8080/api/todos",
        {mode: 'cors'})
    ,
    fetchAllCompleted: () => fetch("http://localhost:8080/api/todos/search/statusOfTodos?status=completed",
        {mode: 'cors'})
    ,
    fetchAllActive: () => fetch("http://localhost:8080/api/todos/search/statusOfTodos?status=active",
        {mode: 'cors'})
    ,
    addTodo: (payload) => fetch("http://localhost:8080/api/todos", {
        method: 'POST', headers: new Headers({
            'Content-Type': 'application/json'
        }), mode: 'cors', body: JSON.stringify(payload)
    })
    ,
    updateStatus: (status, id) =>
        fetch("http://localhost:8080/api/todos/" + id, {
            mode: 'cors',
            method: 'PATCH',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({"status": status})
        })

}
  