import { getAllTodos,addNewTodo} from "../todoservice/todosapi"

async function getAllTodosRepository(){
    return await getAllTodos();
}
async function addNewTodoRepository(newTodo){
    return await addNewTodo(newTodo);
}
export{getAllTodosRepository,addNewTodoRepository};