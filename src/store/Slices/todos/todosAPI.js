import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk(
    'todos/fetchtodos',
    async function () {
        const response = await axios.get('https://jsonplaceholder.typicode.com/tods')

        const data = response.data.map(todo => ({
            id: todo.id,
            txt: todo.title,
            isCheck: todo.completed
        }))

    return data
    }
)

// import axios from "axios";

// export const fetchTodos = () => {
//     return axios.get('https://jsonplaceholder.typicode.com/todos')
//                 .then((res) => {
//                     const currentData = res.data.map(todo => ({
//                         id: todo.id,
//                         txt: todo.title,
//                         isChek: todo.completed 
//                     }))
//                     return currentData
//                 })
//     }