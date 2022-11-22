import { createSlice } from "@reduxjs/toolkit";

const txtSlice = createSlice({
    name: 'txt',
    initialState: '',
    reducers: {
        toggleTxt(state, {payload}) {
            return payload
        },
        resetTxt() {
            return ''
        }
    }
})

export const selectTxt = state => state.txt

export const {toggleTxt, resetTxt} = txtSlice.actions

export const txtReducer = txtSlice.reducer