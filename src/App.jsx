
import { useEffect, useState } from 'react'
import './styles.css'
import { Form } from './Form'
import { List } from './List'

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localStore = localStorage.getItem('Todo')
    if (localStore == null) return []
    
    return JSON.parse(localStore)
  })

  useEffect(() => {
    localStorage.setItem("Todo", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [...currentTodos, { id: crypto.randomUUID(), title, state: false }]
    })
  }

  function toggleTodo(id, state) {
    setTodos(currentTodos => {
      return currentTodos.map(i => {
        if (i.id === id) {
          return { ...i, state }
        }
        return i
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(i => i.id !== id)
    })
  }

  return (
    <>
      <Form addTodo={addTodo} />
      <h1 className='header'>Todo List</h1>
      {todos.length === 0 && 'No todos'}
      <List todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}