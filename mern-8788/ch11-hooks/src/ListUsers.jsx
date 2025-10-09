import React, { useEffect, useState } from 'react'

const ListUsers = () => {

    const [todos, setTodos] = useState([])

    const URL = "https://jsonplaceholder.typicode.com/todos"

    const fetchTodos = async () => {
        try {
            const response = await fetch(URL)
            const data = await response.json()
            setTodos(data)
            
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchTodos()
    }, [])

    return (
        <div>
            {todos.map((todo, index) => (
                <>
                    <p>{todo.title}</p>
                    <hr />
                </>
            ))}
        </div>
    )
}

export default ListUsers
