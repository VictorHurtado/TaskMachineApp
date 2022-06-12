import axios from 'axios';

const url = 'http://localhost:8081/api';

async function getAllTodos(){
    return await axios.get(url + '/todos' )
    .then(function (response) {
        return (response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
}
async function addNewTodo(newTodo){
    console.log(newTodo);
    return await axios.post(url + '/addTodo', {newTask:newTodo} )
    .then(function (response) {
        return (response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
}

export {getAllTodos,addNewTodo};

