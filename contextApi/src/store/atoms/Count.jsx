import {atom, selector} from 'recoil'

const countAtom = atom({
    key: "countAtom",
    default: 0
})

const isEvenState = selector({ //this is used to get an atom value and perform something on it
    key:"isEvenState",
    get: ({get}) => {
        const countValue = get(countAtom);

        if(countValue % 2 == 0){
            return true;
        }
        return false;

    },
})

export {countAtom, isEvenState};