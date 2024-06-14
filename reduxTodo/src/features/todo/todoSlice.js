import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: [{
        id: 1,
        text: "hello world",
        isEditable: false
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                isEditable: false
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            const id = action.payload;
            state.todos = state.todos.filter((todo) => todo.id !== id)
        },
        updateTodo: (state, action) => {
            const id = action.payload.id;
            const newText = action.payload.text;
            const todo = state.todos.find((todo) => todo.id == id)
            if(todo){
                todo.text = newText
            }
        },
        editState: (state, action) => {
            const id = action.payload;
            const todo = state.todos.find((todo) => todo.id == id);
            if(todo){
                todo.isEditable = !todo.isEditable
            }
        }
    }
})

export const {addTodo, removeTodo, updateTodo, editState} = todoSlice.actions

export default todoSlice.reducer