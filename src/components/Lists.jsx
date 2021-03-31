import React from 'react'
import ListItem from './ListItems'

const Lists = ({ todos, delHandler, doneHandler }) => {
    if (todos.length <= 0) {
        return (
            <div className='jumbotron text-center'>
                <h1 className='text-danger'>Enter your task</h1>
            </div>
        )
    }

    return (
        <div className='listWrap'>
            <ul className='list-group'>
                {todos &&
                    todos.length > 0 &&
                    todos.map((todo) => (
                        <ListItem
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            done={todo.done}
                            delHandler={delHandler}
                            doneHandler={doneHandler}
                        />
                    ))}
            </ul>
        </div>
    )
}

export default Lists