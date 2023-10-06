import { ListItem } from "./ListItem"

export function List({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className='list'>
            {todos.map(i => (
                <ListItem
                    key={i.id}
                    id={i.id}
                    title={i.title}
                    state={i.state}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}   
                />
            ))}
        </ul>
    )
}