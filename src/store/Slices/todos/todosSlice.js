import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos } from "./todosAPI";

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        editId: ''
    },
    reducers: {
        addTodo(state,{payload}) {
            state.todos.unshift({
                id: new Date().getTime().toString(),
                    txt: payload,
                    isChek: false
            })
        },
        editTxt(state, {payload}) {
            let idx = state.todos.findIndex(el => el.id === state.editId)
            state.todos[idx].txt = payload
            state.editId = ''
        },
        editId(state, {payload}) {
            state.editId = payload
        },
        checkTodo(state,{payload}) {
            let idx = state.todos.findIndex(el => el.id === payload)
            state.todos[idx].isChek = !state.todos[idx].isChek
        },
        delItem(state,{payload}) {
            return {
                ...state,
                   todos: [
                    ...state.todos.filter(el => el.id !== payload)
                   ]
            }
        },
        todoFilter(state) {
            state.todos = [
                ...state.todos.filter(el => !el.isChek),
                ...state.todos.filter(el => el.isChek),
            ]
        },
        delChecked(state) {
            state.todos = [
                ...state.todos.filter(el => !el.isChek)
            ]
        }

    },
    extraReducers: {
        [fetchTodos.pending]: (state) => {
            console.log('loading ...');
        },
        [fetchTodos.fulfilled]: (state, {payload}) => {
            state.todos = payload
        },
        [fetchTodos.rejected]: () => {
            console.log('Error');
        }
    }
})

export const selectTodos = state => state.todos

export const {addTodo, editTxt, editId, checkTodo, delItem, todoFilter, delChecked} = todosSlice.actions

export const todosReducer = todosSlice.reducer