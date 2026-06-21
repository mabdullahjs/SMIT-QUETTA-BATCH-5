import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'Todo',
    initialState: [
        {
            title: 'first todo',
            id: nanoid()
        }
    ],
    reducers: {
        addTodo: (state , action)=>{
            state.push({
                title: action.payload.title,
                id: nanoid()
            })
        },
        deleteTodo: (state , action)=>{
            const index = state.findIndex(item => item.id === action.payload.id)

            state.splice(index , 1)
        }
    }
})


export const { addTodo, deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;
