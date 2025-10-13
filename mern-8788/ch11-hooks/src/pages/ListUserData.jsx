import React, { useEffect, useState } from 'react'

const ListUserData = () => {

    const [todos , setTodos] = useState([]) 

    const URL = "https://jsonplaceholder.typicode.com/todos"

    const fetchTodos = async () => {
        try {

            const response = await fetch(URL)
            const data = await response.json()
            setTodos(data)

        } catch (error){

        }
    }

    useEffect(() => {
        fetchTodos()
    }, [])
  return (
    <div>
        {todos.map((todos, index) => (
            <p>{todos.title}</p>
        ))}
    </div>
  )
}

export default ListUserData
