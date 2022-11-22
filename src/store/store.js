import { txtReducer } from "./Slices/txt/txtSlice"
import { configureStore } from "@reduxjs/toolkit"
import { todosReducer } from "./Slices/todos/todosSlice"

const store = configureStore({
    reducer: {
        txt: txtReducer,
        todos: todosReducer
    }
})

export default store