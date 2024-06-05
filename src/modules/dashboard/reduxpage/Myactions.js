import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value: 0,
}


export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        myfunc: (state) => {
            state.value += 90
        }

    },
})


export const { increment, decrement,myfunc } = counterSlice.actions

export default counterSlice.reducer