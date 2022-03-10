import React, { FC } from 'react'
import { ITodo, IUser } from '../types/types'

interface TodoItemProps {
    todo: ITodo
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
    return (
        <div style={{ padding: '15px' }}>
            <input type='checkbox' checked={todo.completed}/>
            {todo.id}. {todo.title}
        </div>
    )
}

export default TodoItem