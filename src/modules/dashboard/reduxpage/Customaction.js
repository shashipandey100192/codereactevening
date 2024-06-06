import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    mycard: 0,
}


export const customaction = createSlice({
    name: 'ecom',
    initialState,
    reducers: {
        cardvalue: (state) => {
            state.mycard += 1
            
        }
    },
})


export const { cardvalue} = customaction.actions

export default customaction.reducer