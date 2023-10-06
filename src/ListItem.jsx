export function ListItem({id, title, state, toggleTodo, deleteTodo}) {
    return (
        <li>
            <label>
                <input type="checkbox" checked={state} onChange={e => toggleTodo(id, e.target.checked)} />
                {title}
                <button className='btn btn-danger' onClick={() => deleteTodo(id)}>Delete</button>
            </label>
        </li>
    )
}