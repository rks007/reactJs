import {atom} from 'recoil'

const todoAtom = atom({
    key: "todoAtom",
    default: [{
        id: 1,
        todo: "go to gym",
        isEditable: false,
        completed: false
    }]
})

export {todoAtom}