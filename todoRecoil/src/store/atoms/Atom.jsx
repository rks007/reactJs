import {atom} from 'recoil'

const todoAtom = atom({
    key: "todoAtom",
    default: [{
        id: 1,
        todo: "go to gym",
        completed: false
    }]
})

export {todoAtom}