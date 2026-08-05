const todos = [
    { id: 1, task: "Learn JavaScript", completed: true },
    { id: 2, task: "Learn React", completed: false },
    { id: 3, task: "Build a project", completed: false },
];

//CRUD -> Create, Read, Update, Delete

//create new todo
function addTodo(todos, newTodo) {
    return [...todos, newTodo]
}
let newTodo = { id: 4, task: "Learn node.js", completed: false }
let addedNewTodo = addTodo(todos, newTodo)
console.log('addedNewTodo', addedNewTodo)


//update todo
function updateTodos(id, updatedTodo) {
    return todos.map((todo) => todo.id === id ? { ...todo, ...updatedTodo } : todo)
}
let updatedList = updateTodos(2, { id: 2, task: "Learn React.js", completed: false })
console.log('updatedList', updatedList)


//delete todo
function deleteTodo(todos,id) {
    return todos.filter((todo) => todo.id !== id)
}
let updatedAfterDel = deleteTodo(todos,3)
console.log('updatedAfterDel', updatedAfterDel)


//find todo
function findTodo(todos,id){
return todos.find((todo)=> todo.id === id)
}
let foundTodo = findTodo(todos,3)
console.log('foundTodo',foundTodo)