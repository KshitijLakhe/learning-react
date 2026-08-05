//get todo list with async-await

async function getTodos(id) {
    let res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    let data = await res.json()
    return data
}

console.log('getTodo', getTodos(4))

async function loadData(id) {
    try {
        let todos = await getTodos(id)
        console.log('todos', todos)
    } catch (error) {
        console.log('error', error)
    } finally {
        console.log('done')
    }
}
loadData(1)